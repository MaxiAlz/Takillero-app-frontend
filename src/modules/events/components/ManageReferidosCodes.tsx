import { ModalCustom, RoundedFilledButton } from '../../../components';
import { useState } from 'react';
import Loader from '../../../components/Loader';
import { useReferidosCodes } from '../hooks/useInvitationCodes';
import { CreateReferidoCodesForm } from './Forms/CreateReferidoCodesForm';
import { FaCheck, FaIdBadge, FaLink } from 'react-icons/fa6';
import { formatUrlToString } from '../../../helpers';

interface ManageInvitationCodesProps {
  eventId: string | undefined;
  enventName: string | undefined;
}

const ManageReferidosCodes = ({
  eventId,
  enventName,
}: ManageInvitationCodesProps) => {
  const invitationCodes = useReferidosCodes.getReferidosCodesByEvent(+eventId!);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>(
    {},
  );

  const getEventName = () => {
    if (enventName) {
      return formatUrlToString(enventName);
    }
    return 'evento';
  };

  const buildReferralUrl = (code: string) => {
    if (typeof window !== 'undefined') {
      const baseUrl = window.location.origin;
      const eventName = getEventName();
      return `${baseUrl}/${eventName}/${eventId}/${code}`;
    }
    return `/${getEventName()}/${eventId}/${code}`;
  };

  const copyReferralUrl = async (code: string, index: number) => {
    try {
      const url = buildReferralUrl(code);
      await navigator.clipboard.writeText(url);
      setCopiedStates((prev) => ({ ...prev, [index]: true }));

      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [index]: false }));
      }, 2000);
    } catch (err) {}
  };

  return (
    <>
      <article>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700 my-2"></div>
        <section>
          <h3 className="dark:text-white text-xl font-bold mb-4">
            Tus Codigos Creados:
          </h3>

          {
            invitationCodes.isLoading ? (
              <Loader />
            ) : (
              <div className="space-y-3">
                {invitationCodes.invitationCodes?.data.map(
                  (invitation, index: number) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between mb-1">
                        <span className="dark:text-white truncate pr-2">
                          {invitation.name}
                        </span>
                        <button
                          onClick={() =>
                            copyReferralUrl(invitation.code, index)
                          }
                          className="flex items-center gap-1.5 px-2 py-1 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 rounded transition-colors"
                        >
                          {copiedStates[index] ? (
                            <>
                              <FaCheck className="h-3 w-3 text-green-600" />
                              <span className="text-green-600">Copiado</span>
                            </>
                          ) : (
                            <>
                              <FaLink className="h-3 w-3" />
                              <span>Copiar URL</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="text-md font-mono dark:text-gray-2  px-2 py-1.5 rounded border">
                        {invitation.code}
                      </div>
                    </div>
                  ),
                )}
              </div>
            )

            // (
            //   invitationCodes.invitationCodes &&
            //   invitationCodes.invitationCodes.data.map((invitation, indx) => (
            //     <p className="my-2 text-xl" key={indx}>
            //       <span className="font-semibold  ">{invitation.name}</span>:
            //       {invitation.code}
            //     </p>
            //   ))
            // )
          }

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
            text="Crear nuevo codigo de referido"
            icon={<FaIdBadge size={25} />}
            className="w-full mt-6"
            onClick={() => setOpenModal(true)}
          />
        </section>
      </article>

      <ModalCustom
        openModal={openModal}
        setOpenModal={setOpenModal}
        title="Crear codigo de referido"
        subtitle="Usa este codigo para identificar venta de tickets"
      >
        <CreateReferidoCodesForm setOpenModal={setOpenModal} />
      </ModalCustom>
    </>
  );
};

export { ManageReferidosCodes };
