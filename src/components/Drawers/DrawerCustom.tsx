import { Drawer } from 'flowbite-react';
import React, { ReactNode } from 'react';

interface DrawerCustomProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  title: string;
  subtitle?: string;
  position?: 'left' | 'top' | 'right' | 'bottom' | undefined;
  titleIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const DrawerCustom = ({
  openModal,
  setOpenModal,
  children,
  title,
  titleIcon,
  subtitle,
  position = 'left',
}: DrawerCustomProps) => {
  return (
    <>
      {openModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-40"
          onClick={() => setOpenModal(false)}
        ></div>
      )}

      <Drawer
        open={openModal}
        edge
        onClose={() => setOpenModal(false)}
        position={position}
        className="dark:shadow-1 z-99999 shadow-8 dark:bg-boxdark w-1/3 "
      >
        <Drawer.Header
          className="dark:bg-boxdark dark:text-white"
          title={title}
          titleIcon={titleIcon}
        />
        <Drawer.Items className="dark:bg-boxdark">
          <p>{subtitle}</p>
          {children}
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export { DrawerCustom };
