import { useEffect, useState } from 'react';
import { secureLocalStorage } from '../../../helpers/secureLocalStorage';
import HomeLayaut from '../../../layout/HomeLayaut';
import { Badge, Card } from 'flowbite-react';
import { BsBank2, BsClock } from 'react-icons/bs';
import CardButton from '../../../components/Buttons/CardButton';
import { IoMdPhonePortrait } from 'react-icons/io';
import { FaRegCreditCard } from 'react-icons/fa6';

const PayPourchaseEventPage = () => {
  const { getEncryptedItem } = secureLocalStorage();

  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutos en segundos
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  const handlePaymentMethod = (method: string) => {
    if (isExpired) return;
    console.log(`Procesando pago con: ${method}`);
    // Aquí iría la lógica de redirección a cada pasarela
  };

  return (
    <HomeLayaut>
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white text-center m-5">
        Pagar Reserva
      </h1>
      <section className="grid grid-cols-2">
        <Card className="m-5 dark:bg-boxdark flex flex-col items-center justify-center">
          <div className="flex justify-center">
            <BsClock
              size={30}
              className={` ${isExpired ? 'text-red-500' : 'text-primary '}`}
            />
            <h2 className="text-lg font-bold">Tiempo restante</h2>
          </div>
          <div
            className={`flex justify-center items-center w-full text-3xl font-mono font-bold ${
              isExpired ? 'text-red-500' : 'text-primary'
            }`}
          >
            <p>{formatTime(timeLeft)}</p>
          </div>
          <div className="flex justify-center w-full">
            {isExpired && (
              <Badge className="mt-2 bg-error text-white dark:bg-error dark:text-white">
                Tiempo expirado
              </Badge>
            )}
          </div>
          <p>Completa tu pago antes de que expire el tiempo</p>
        </Card>

        {/* Información del producto */}
        <Card className="m-5 dark:bg-boxdark">
          <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
            Resumen de Compra
          </h2>
          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                Nombre del ticket x (cantidad)
              </span>
              <span className="font-semibold ">$50.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                Nombre del ticket x (cantidad)
              </span>
              <span className="font-semibold ">$50.000</span>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total a pagar</span>
                <span className="text-xl font-bold text-primary">$100.000</span>
              </div>
            </div>
          </section>
        </Card>
      </section>
      <h2 className="text-3xl font-bold mb-4 text-black dark:text-white text-center mt-5">
        Selecciona tu método de pago
      </h2>
      <p className="text-center">
        Elige la opción que prefieras para completar tu compra
      </p>
      {/* Métodos de pago */}
      <section className="grid grid-cols-3 gap-4 m-5">
        <CardButton
          className="border  hover:bg-primary "
          title="Mercado Pago"
          subtitle="Usa dinero en tu cuenta o tarjetas asociadas"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <IoMdPhonePortrait className="text-primary" size={25} />
          </div>
        </CardButton>
        <CardButton
          className="border hover:bg-primary"
          title="Tarjetas Banco nacion"
          subtitle="Promociones exclusivas - 30% Reintegro"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <BsBank2 className="text-primary" size={25} />
          </div>
        </CardButton>
        <CardButton
          className="border hover:bg-primary"
          title="Debito / Credito"
          subtitle="Todos los bancos y billeteras virtuales"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaRegCreditCard className="text-primary" size={25} />
          </div>
        </CardButton>
      </section>

      <Card className="m-5 dark:bg-boxdark">
        <p className="text-center">
          🔒 Tu información está protegida con encriptación SSL
        </p>
      </Card>
      <div>PaiPourchaseEventPage</div>
      <p>{JSON.stringify(getEncryptedItem('reserveToken'))}</p>
    </HomeLayaut>
  );
};

export { PayPourchaseEventPage };
