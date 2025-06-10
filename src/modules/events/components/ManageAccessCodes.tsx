import { Button } from 'flowbite-react';
import Loader from '../../../components/Loader';
import {
  MdContentCopy,
  MdDeleteForever,
  MdOutlineEnhancedEncryption,
} from 'react-icons/md';
import { formatFullDate } from '../../../helpers';
import { useState } from 'react';
import {
  ModalCustom,
  RoundedFilledButton,
  RoundedOutlineButton,
} from '../../../components';
import { GenerateAccesTokenForm } from './Forms/GenerateAccesTokenForm';
import { useAccessCodesQuery, useDeleteAccessCodeById } from '../hooks';
import { useAlert } from '../../../context/AlertContext';
import { useQueryClient } from '@tanstack/react-query';

interface ListAcessCodesCardsProps {
  eventId: string | undefined;
}

const ManageAccessCodes = ({ eventId }: ListAcessCodesCardsProps) => {
  const { showErrorToast, showSuccessToast, showInfoToast } = useAlert();
  // Mutations nad Querys
  const deleteAccessCodeById = useDeleteAccessCodeById();
  const { accessCodesData, error, isLoading } =
    useAccessCodesQuery.getAccesCodesByEventId(+eventId!);
  const queryClient = useQueryClient();
  // usestates
  const [showAccessCodeModal, setShowAccessCodeModal] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [selectedAccessCode, setSelectedAccessCode] = useState<{
    name: string;
    id: number;
  } | null>(null);

  const hadleOpenModalsDeleteAccessCode = (
    accesCodeId: number,
    acessCodeName: string,
  ) => {
    setShowConfirmDeleteModal(true);
    setSelectedAccessCode({ name: acessCodeName, id: accesCodeId });
  };

  const copyToken = (token: string) => {
    navigator.clipboard.writeText(token);
    showInfoToast('Token copiado');
  };

  const handleDeleteAccessCode = () => {
    deleteAccessCodeById.mutate(selectedAccessCode!.id, {
      onSuccess: () => {
        setSelectedAccessCode(null);
        setShowConfirmDeleteModal(false);
        queryClient.invalidateQueries({
          queryKey: ['accessCodes', eventId],
        });
        queryClient.refetchQueries({ queryKey: ['accessCodes'], exact: false });

        showSuccessToast('Codigo de Aceeso Eliminado Correctamente');
      },
      onError: () => {
        setSelectedAccessCode(null);
        setShowConfirmDeleteModal(false);
        showErrorToast('No se pudo eliminar, Pruebe mas tarde');
      },
    });
  };

  function isAccessCodeValid(endDate: Date | string): boolean {
    const now = new Date();
    const finalDate = new Date(endDate);
    const localNow = new Date(now.toLocaleString());
    const localFinalDate = new Date(finalDate.toLocaleString());
    const accesCodeValidResult = localFinalDate >= localNow;
    return !accesCodeValidResult;
  }

  return (
    <>
      <article>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700 my-2"></div>
        <section>
          <h3 className="dark:text-white text-xl font-bold mb-4">
            Tokens de Accesos Activos:
          </h3>

          {isLoading ? (
            <Loader />
          ) : (
            accessCodesData!.length > 0 &&
            !error &&
            accessCodesData?.map((accessCodeData) => (
              <section key={accessCodeData.id}>
                <div
                  key={accessCodeData.id}
                  className={`p-4 rounded-lg ${
                    isAccessCodeValid(accessCodeData.end)
                      ? 'opacity-50 pointer-events-none'
                      : ''
                  }`}
                >
                  <label className="block text-xl text-primary font-normal">
                    {accessCodeData.name}{' '}
                    <span className="text-black dark:text-white">
                      {isAccessCodeValid(accessCodeData.end) &&
                        ':Token vencido'}
                    </span>
                  </label>
                  <div className="flex items-center">
                    <input
                      disabled={isAccessCodeValid(accessCodeData.end)}
                      name="accessCode"
                      type="text"
                      className="w-full rounded-lg m-1 border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={accessCodeData.code}
                      onChange={() => {}}
                    />

                    <Button
                      disabled={isAccessCodeValid(accessCodeData.end)}
                      onClick={() => copyToken(accessCodeData.code)}
                    >
                      <MdContentCopy className="" /> Copiar
                    </Button>
                  </div>
                  <p className="text-sm">
                    Valido del{' '}
                    <span className=" text-primary">
                      {formatFullDate(accessCodeData.start)} Hs
                    </span>{' '}
                    al{' '}
                    <span className=" text-primary">
                      {formatFullDate(accessCodeData.end)} Hs
                    </span>
                  </p>
                </div>
                <button
                  className=""
                  onClick={() =>
                    hadleOpenModalsDeleteAccessCode(
                      accessCodeData.id,
                      accessCodeData.name,
                    )
                  }
                >
                  <p className="mt-2 hover:text-error  flex items-center">
                    <MdDeleteForever /> Eliminar acceso
                  </p>
                </button>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-700 my-2 "></div>
              </section>
            ))
          )}

          {!isLoading && !accessCodesData?.length && (
            <>
              <p className="mb-2 text-warning">
                Todavia no hay Tokens de acceso creados
              </p>
              <div className="flex-grow border-t border-gray-300 dark:border-gray-700 my-2 "></div>
            </>
          )}

          {!isLoading && error && (
            <>
              <p className="text-error">
                Oops! Hubo un error al cargar los tokens de acceso, Pruebe mas
                tarde...
              </p>
              <div className="flex-grow border-t border-gray-300 dark:border-gray-700 my-2 "></div>
            </>
          )}

          <RoundedFilledButton
            text="Crear nuevo token de acceso"
            icon={<MdOutlineEnhancedEncryption size={25} />}
            className="w-full mt-6"
            onClick={() => setShowAccessCodeModal(true)}
          />
        </section>
      </article>

      {/* ELIMAR CODIGOS DE ACCESO */}
      <ModalCustom
        openModal={showConfirmDeleteModal}
        setOpenModal={setShowConfirmDeleteModal}
        title="Eliminar codigo de acceso"
      >
        <div className="">
          <p className="text-center">
            Solo podras <span className="text-primary">eliminar</span> un Codigo
            de Acceso{' '}
            <span className="text-primary">
              si no hay E-Tickes que ya han sido validados{' '}
            </span>
            con este mismo.
          </p>
          <p className="text-center text-xl mt-2 dark:text-white text-black">
            ¿ Estas seguro que desea eliminar{' '}
            <span className="text-primary">"{selectedAccessCode?.name}"</span> ?
          </p>
          <div className="flex justify-between mt-5">
            <RoundedFilledButton
              disabled={deleteAccessCodeById.isPending}
              text="Eliminar codigo de acceso"
              onClick={handleDeleteAccessCode}
              isLoading={deleteAccessCodeById.isPending}
            />
            <RoundedOutlineButton text="Cancelar" />
          </div>
        </div>
      </ModalCustom>

      {/* CREAR CODIGOS DE ACCESO */}
      <ModalCustom
        openModal={showAccessCodeModal}
        setOpenModal={setShowAccessCodeModal}
        title="Generar Token de Acceso"
        subtitle="Usa este codigo para validar las E-Tickes en la entrada de tu evento, puedes crear diferentes codigos para identificar a tu Staff"
      >
        <GenerateAccesTokenForm />
      </ModalCustom>
    </>
  );
};

export default ManageAccessCodes;
