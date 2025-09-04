import { MdOutlineEnhancedEncryption } from 'react-icons/md';
import { RoundedFilledButton } from '../../../../components';
import { useState } from 'react';
import { useCreateInvitationCode } from '../../hooks/useInvitationCodeMutation';
import { useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useAlert } from '../../../../context/AlertContext';

interface createInvitationProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateInvitationCodesForm = ({ setOpenModal }: createInvitationProps) => {
  const { eventId } = useParams();
  const queryClient = useQueryClient();
  const { showErrorToast, showSuccessToast } = useAlert();
  const creteInvitationCodeMutation = useCreateInvitationCode();
  const [invitationCodeName, setInvitationCodeName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const invitationValues = {
      name: invitationCodeName,
      eventId: +eventId!,
    };

    creteInvitationCodeMutation.mutate(invitationValues, {
      onSuccess() {
        queryClient.refetchQueries({
          queryKey: ['invitationCodes'],
          exact: false,
        });
        showSuccessToast('Codigo creado con exito');
        setOpenModal(false);
      },
      onError() {
        showErrorToast(`Error al crear el codigo de invitacion!`);
      },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        id="name"
        type="text"
        placeholder="RRPP - Juan"
        className="w-full rounded-lg  border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        onChange={(e) => {
          setInvitationCodeName(e.target.value);
        }}
        value={invitationCodeName}
      />

      <div className="items-end mt-4">
        <RoundedFilledButton
          type="submit"
          text="Crear codigo de invitacion"
          icon={<MdOutlineEnhancedEncryption size={25} />}
          disabled={invitationCodeName.length < 3}
          className="items-end"
          isLoading={creteInvitationCodeMutation.isPending}
        />
      </div>
    </form>
  );
};

export { CreateInvitationCodesForm };
