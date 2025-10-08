import { Modal } from 'flowbite-react';
import { ReactNode } from 'react';

interface ModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  title: string;
  subtitle?: string;
}
const ModalCustom = ({
  openModal,
  setOpenModal,
  children,
  title,
  subtitle,
}: ModalProps) => {
  return (
    <Modal
      show={openModal}
      onClose={() => setOpenModal(false)}
      className="dark:bg-opacity-85 dark:shadow-1 z-99999 bg-black-2 bg-opacity-70 shadow-8"
    >
      <Modal.Header className="dark:bg-boxdark">
        <span>{title}</span>
        <p className="text-sm font-light">{subtitle}</p>
      </Modal.Header>
      <Modal.Body className="dark:bg-boxdark">{children}</Modal.Body>
    </Modal>
  );
};

export { ModalCustom };
