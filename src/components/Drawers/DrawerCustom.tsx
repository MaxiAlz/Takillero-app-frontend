import { Drawer } from 'flowbite-react';
import React, { ReactNode } from 'react';

interface DrawerCustomProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  title: string;
  subtitle?: string;
  position?: 'left' | 'top' | 'right' | 'bottom';
  titleIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: 'sm' | 'md' | 'lg';
}

const DrawerCustom = ({
  openModal,
  setOpenModal,
  children,
  title,
  titleIcon,
  subtitle,
  position = 'left',
  size = 'sm', // valor por defecto
}: DrawerCustomProps) => {
  // Mapeo de tamaños
  const sizeClasses = {
    sm: 'w-1/3',
    md: 'w-1/2',
    lg: 'w-2/3',
  };

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
        className={`dark:shadow-1 z-99999 shadow-8 dark:bg-boxdark ${sizeClasses[size]}`}
      >
        <Drawer.Header
          className="dark:bg-boxdark dark:text-white"
          title={title}
          titleIcon={titleIcon}
        />
        <Drawer.Items className="dark:bg-boxdark">
          {subtitle && <p>{subtitle}</p>}
          {children}
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export { DrawerCustom };
