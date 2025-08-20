import { useEffect, useState } from 'react';
import { secureLocalStorage } from '../../../helpers/secureLocalStorage';
import HomeLayaut from '../../../layout/HomeLayaut';
import { Badge, Card } from 'flowbite-react';
import { BsBank2, BsClock } from 'react-icons/bs';
import CardButton from '../../../components/Buttons/CardButton';
import { IoMdPhonePortrait } from 'react-icons/io';
import { FaRegCreditCard } from 'react-icons/fa6';
import { useLocation, useParams } from 'react-router-dom';
import { RESERVE_DATA_STORAGE_KEY } from '../../../constants/storageKeys';
import { useCartTicketStorage } from '../../../hooks/useCardTicketStorage';
import { PaymentMethod } from '../../../constants/bussinessData/businesData';
import { usePayPurchaseByMp } from '../hooks/usePourchaseEventProductsMutation';
import { formatPrice } from '../../../helpers/formarPrice';
import Loader from '../../../components/Loader';

const PayPourchaseEventPage = () => {
  const location = useLocation();
  const { eventId } = useParams();
  const { getEncryptedItem, removeEncryptedItem } = secureLocalStorage();
  const payByMpMutation = usePayPurchaseByMp();
  const { cartsPurchase } = useCartTicketStorage();

  const eventCart = cartsPurchase.find((cart) => cart.eventId === +eventId!);

  const totalPay =
    eventCart &&
    formatPrice(
      eventCart.ticketItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      ),
    );

  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const savedData =
      getEncryptedItem<{
        token: string;
        total: number;
        expiresAt: number;
      }>(RESERVE_DATA_STORAGE_KEY) ?? location.state?.reserveData;

    if (!savedData) {
      setIsExpired(true);
      return;
    }

    const now = Date.now();
    const diffSeconds = Math.floor((savedData.expiresAt - now) / 1000);

    if (diffSeconds <= 0) {
      setIsExpired(true);
      removeEncryptedItem(RESERVE_DATA_STORAGE_KEY);
    } else {
      setTimeLeft(diffSeconds);
    }
  }, []);

  //Contador regresivo
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsExpired(true);
          removeEncryptedItem(RESERVE_DATA_STORAGE_KEY);
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

  const handlePaymentMethod = (method: PaymentMethod) => {
    if (isExpired) return;

    switch (method) {
      case PaymentMethod.MERCADO_PAGO:
        const reserve = getEncryptedItem<{ token: string }>(
          RESERVE_DATA_STORAGE_KEY,
        );
        if (reserve?.token) {
          payByMpMutation.mutate(reserve.token);
        } else {
          console.error('No hay token de reserva disponible');
        }
        break;

      case PaymentMethod.BANCO_NACION:
        console.log('Procesar lógica para Banco Nación');
        break;

      case PaymentMethod.DEBITO_CREDITO:
        console.log('Procesar lógica para tarjetas/débito');
        break;

      default:
        console.warn('Método de pago no soportado');
    }
  };

  if (!eventCart || isExpired) {
    return (
      <HomeLayaut>
        <div className="text-center my-10">
          <h1 className="text-2xl font-bold text-red-600">
            {isExpired ? 'El tiempo de reserva ha expirado' : 'Carrito vacío'}
          </h1>
          <p className="mt-4">
            {isExpired
              ? 'Por favor, realizar el proceso de compra.'
              : 'No hay productos en tu carrito.'}
          </p>
        </div>
      </HomeLayaut>
    );
  }

  if (payByMpMutation.isPending) {
    return (
      <HomeLayaut>
        <div className="text-center my-10">
          <Loader
            title="Procesando tu pago..."
            subtitle="Por favor, espera mientras completamos la transacción."
          />
        </div>
      </HomeLayaut>
    );
  }

  return (
    <HomeLayaut>
      <section className="my-5 lg:mx-20">
        <h1 className="text-3xl font-bold mb-4 text-black dark:text-white text-center ">
          Pagar Reserva
        </h1>
        <Card className=" dark:bg-boxdark flex flex-col items-center justify-center">
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
          <p className="text-center dark:text-white text-boxdark-2">
            Completa tu pago antes de que expire el tiempo
          </p>
          <p className="text-lg">
            <span className="font-bold text-primary">¡Importante! </span>
            No salgas ni actualices esta pantalla, puedes perder tu reserva
          </p>
        </Card>

        {/* Información del producto */}
        <section className="my-5">
          <Card className=" dark:bg-boxdark">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
              Resumen de Compra: {eventCart?.eventName}
            </h2>
            <section className="space-y-4">
              {eventCart?.ticketItems.map((ticket, indx) => (
                <div
                  className="flex justify-between items-center"
                  key={ticket.name + indx}
                >
                  <span className="text-gray-600">
                    {ticket.name} x {ticket.quantity}
                  </span>
                  <span className="font-semibold ">
                    {formatPrice(ticket.price * ticket.quantity)}
                  </span>
                </div>
              ))}

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total a pagar</span>
                  <span className="text-xl font-bold text-primary">
                    {totalPay}
                  </span>
                </div>
              </div>
            </section>
          </Card>
        </section>

        <h2 className="lg:text-3xl  text-2xl font-bold mb-4 text-black dark:text-white text-center mt-5">
          Selecciona tu método de pago
        </h2>
        <p className="text-center mb-4">
          Elige la opción que prefieras para completar tu compra
        </p>
        {/* Métodos de pago */}
        <section className="grid lg:grid-cols-3 gap-4 mb-6">
          <CardButton
            className="border  hover:bg-primary "
            title="Mercado Pago"
            subtitle="Usa dinero en tu cuenta o tarjetas asociadas"
            onClick={() => handlePaymentMethod(PaymentMethod.MERCADO_PAGO)}
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <IoMdPhonePortrait className="text-primary" size={25} />
            </div>
          </CardButton>
          <CardButton
            className="border hover:bg-primary"
            title="Tarjetas Banco nacion"
            subtitle="Promociones exclusivas - 30% Reintegro"
            onClick={() => handlePaymentMethod(PaymentMethod.BANCO_NACION)}
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <BsBank2 className="text-primary" size={25} />
            </div>
          </CardButton>
          <CardButton
            disabled
            className="hover:bg-primary"
            title="Debito / Credito"
            subtitle="Todos los bancos y billeteras virtuales"
            onClick={() => handlePaymentMethod(PaymentMethod.DEBITO_CREDITO)}
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FaRegCreditCard className="text-primary" size={25} />
            </div>
          </CardButton>
        </section>

        <Card className=" dark:bg-boxdark">
          <p className="text-center">
            🔒 Tu información está protegida con encriptación SSL
          </p>
        </Card>
        {/* <div>PayPourchaseEventPage</div>
          <p>{JSON.stringify(getEncryptedItem(RESERVE_DATA_STORAGE_KEY))}</p> */}
      </section>
    </HomeLayaut>
  );
};

export { PayPourchaseEventPage };
