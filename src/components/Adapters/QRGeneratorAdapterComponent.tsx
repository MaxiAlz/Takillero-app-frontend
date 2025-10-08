import { QRCodeSVG } from 'qrcode.react';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { GiTicket } from 'react-icons/gi';

interface QRCodeAdapterProps {
  value: string; // Contenido del código QR
  size?: number; // Tamaño del código QR
  level?: 'L' | 'M' | 'Q' | 'H'; // Nivel de corrección de errores
  bgColor?: string; // Color de fondo
  fgColor?: string; // Color del código QR
}

const QRGeneratorAdapterComponent = (QRgeneratorProps: QRCodeAdapterProps) => {
  return (
    <div className="relative flex items-center justify-center">
      <QRCodeSVG
        marginSize={1}
        value={QRgeneratorProps.value}
        title={'Title for my QR Code'}
        size={QRgeneratorProps.size || 250}
        bgColor={QRgeneratorProps.bgColor || '#ffffff'}
        fgColor={QRgeneratorProps.fgColor || '#000000'}
        level={QRgeneratorProps.level || 'M'}
        imageSettings={{
          src: '',
          x: undefined,
          y: undefined,
          height: 40,
          width: 40,
          opacity: 1,
          excavate: true,
        }}
      />
      {/* <BsFillRocketTakeoffFill
        className="absolute text-xl text-primary"
        size={40}
      /> */}
      <GiTicket className="absolute text-xl text-primary" size={40} />
    </div>
  );
};

export { QRGeneratorAdapterComponent };
