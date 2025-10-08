import { Button } from 'flowbite-react';
import { useState } from 'react';
import { MdContentCopy, MdOutlineEnhancedEncryption } from 'react-icons/md';
import { RoundedFilledButton } from '../../../../components';
import { FormikHelpers, useFormik } from 'formik';
import {
  AccessCode,
  AccessCodeFormData,
} from '../../interfaces/accesCodeTypes';
import * as Yup from 'yup';
import { addDaysToDate, formatFullDate } from '../../../../helpers/formatDate';
import { useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useAlert } from '../../../../context/AlertContext';
import { useCreateAccessCodeMutation } from '../../hooks';

interface GenerateAcessTokenFormProps {
  setShowAccessCodeModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const GenerateAccesTokenForm = ({
  setShowAccessCodeModal,
}: GenerateAcessTokenFormProps) => {
  const [tokenData, setTokenData] = useState<AccessCode | null>(null);
  const { eventId } = useParams();
  const createAccesCodeMutation = useCreateAccessCodeMutation();
  const queryClient = useQueryClient();
  const { showErrorToast, showSuccessToast, showInfoToast } = useAlert();

  const copyToken = () => {
    showInfoToast('Token copiado');
    navigator.clipboard.writeText(tokenData?.code as string);
    // Aquí podrías mostrar un toast de confirmación
  };

  // const shareToken = () => {
  //   const shareUrl = `${window.location.origin}/validate-token/${token}`;
  //   navigator.clipboard.writeText(shareUrl);
  //   // Aquí podrías mostrar un toast de confirmación
  // };

  const accessCodeInitialValues = {
    name: '',
    start: new Date(),
    end: addDaysToDate({ dateInput: new Date(), daysToAdd: 2 }),
    eventoId: eventId ? Number(eventId) : -1,
  };

  const createAccessCodeFormik = useFormik<AccessCodeFormData>({
    initialValues: accessCodeInitialValues,
    validationSchema: Yup.object({
      name: Yup.string()
        .required('El nombre es obligatorio')
        .max(100, 'El nombre no puede exceder los 30 caracteres'),
    }),
    onSubmit: async (
      values: AccessCodeFormData,
      formikHelpers: FormikHelpers<AccessCodeFormData>,
    ) => {
      try {
        formikHelpers.setSubmitting(true);
        createAccesCodeMutation.mutate(values, {
          onSuccess(data) {
            queryClient.invalidateQueries({
              queryKey: ['accessCodes', eventId],
            });
            queryClient.refetchQueries({
              queryKey: ['accessCodes'],
              exact: false,
            });
            setTokenData(data);
            showSuccessToast(`¡Acceso "${data.name}" creado!`);
            setShowAccessCodeModal(false);
          },
          onError(data) {
            showErrorToast(`Error al crear el Accesso "${data.name}" !`);
          },
        });
      } finally {
        formikHelpers.setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={createAccessCodeFormik.handleSubmit}>
      <input
        name="name"
        id="name"
        type="text"
        placeholder="Acceso Puerta General"
        className="w-full rounded-lg  border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        onChange={createAccessCodeFormik.handleChange}
        onBlur={createAccessCodeFormik.handleBlur}
        value={createAccessCodeFormik.values.name}
      />
      {createAccessCodeFormik.errors.name &&
      createAccessCodeFormik.touched.name ? (
        <div className="text-error">{createAccessCodeFormik.errors.name}</div>
      ) : null}
      <div className="flex items-center gap-2 mt-4">
        <input
          name="accesCode"
          disabled
          type="text"
          placeholder="AB123CDEF"
          value={tokenData?.code}
          className="w-full rounded-lg border-[1.5px]  bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />

        {tokenData?.code && (
          <Button onClick={() => copyToken}>
            <MdContentCopy className="mr-2" /> Copiar
          </Button>
        )}
      </div>
      {tokenData?.start && (
        <p>
          Codigo valido desde el{' '}
          <span className=" text-primary">
            {formatFullDate(tokenData?.start)} Hs
          </span>{' '}
          hasta el{' '}
          <span className=" text-primary">
            {formatFullDate(tokenData?.end)} Hs
          </span>
        </p>
      )}
      <div className="items-end mt-4">
        <RoundedFilledButton
          type="submit"
          text="Genera token"
          icon={<MdOutlineEnhancedEncryption size={25} />}
          disabled={!!tokenData?.code}
          className="items-end"
          isLoading={createAccessCodeFormik.isSubmitting}
        />
      </div>
    </form>
  );
};

export { GenerateAccesTokenForm };
