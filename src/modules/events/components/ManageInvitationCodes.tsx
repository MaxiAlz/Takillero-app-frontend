import { MdCardGiftcard } from 'react-icons/md';
import { ModalCustom, RoundedFilledButton } from '../../../components';
import { useState } from 'react';
import { useInvitationCodes } from '../hooks/useInvitationCodes';
import Loader from '../../../components/Loader';
import { CreateInvitationCodesForm } from './Forms/CreateInvitationCodesForm';

interface ManageInvitationCodesProps {
  eventId: string | undefined;
}

const ManageInvitationCodes = ({ eventId }: ManageInvitationCodesProps) => {
  const invitationCodes = useInvitationCodes.getInvitationCodesByEvent(
    +eventId!,
  );
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <article>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700 my-2"></div>
        <section>
          <h3 className="dark:text-white text-xl font-bold mb-4">
            Tus invitaciones creadas:
          </h3>

          {invitationCodes.isLoading ? (
            <Loader />
          ) : (
            invitationCodes.invitationCodes &&
            invitationCodes.invitationCodes.data.map((invitation, indx) => (
              <p className="my-2 text-xl" key={indx}>
                <span className="font-semibold  ">{invitation.name}</span>:
                {invitation.code}
              </p>
            ))
          )}

          {!invitationCodes.isLoading &&
            !invitationCodes.invitationCodes?.data.length && (
              <>
                <p className="mb-2 text-warning">
                  Todavia no hay codigos de invitacion creados
                </p>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-700 my-2 "></div>
              </>
            )}

          {!invitationCodes.isLoading && invitationCodes.error && (
            <>
              <p className="text-error">
                Oops! Hubo un error al cargar tus codigos de invitacion, Pruebe
                mas tarde...
              </p>
              <div className="flex-grow border-t border-gray-300 dark:border-gray-700 my-2 "></div>
            </>
          )}

          <RoundedFilledButton
            text="Crear nuevo codigo de invitacion"
            icon={<MdCardGiftcard size={25} />}
            className="w-full mt-6"
            onClick={() => setOpenModal(true)}
          />
        </section>
      </article>

      <ModalCustom
        openModal={openModal}
        setOpenModal={setOpenModal}
        title="Crear codigo de invitacion"
        subtitle="Usa este codigo para identificar venta de tickets"
      >
        <CreateInvitationCodesForm setOpenModal={setOpenModal} />
      </ModalCustom>
    </>
  );
};

export { ManageInvitationCodes };
