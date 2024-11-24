import { useParams } from 'react-router-dom';
import { PageTitle, RoundedFilledButton } from '../../../components';
import EventHorizontalCard from '../../../components/Cards/EventHorizontalCard';
import HomeLayaut from '../../../layout/HomeLayaut';
import { useGetPublicEventById } from '../hooks/useGetPublicEventById';
import { SummaryProductsTable } from '../components/SummaryProductsTable';
import { useEffect, useState } from 'react';
import { MdFactCheck } from 'react-icons/md';
import {
  TicketItem,
  useCartTicketStorage,
} from '../../../hooks/useCardTicketStorage';
import { PaymentMethodForm } from '../components/forms/PaymentMethotsForm';
import { CardResume } from '../components/forms/CardResumme';

const EventPourchasePage = () => {
  const { eventId } = useParams();
  const { eventData, /* isLoading, isError */ } = useGetPublicEventById(+eventId!);

  const { cartsPurchase } = useCartTicketStorage();
  const [selectedProductsCart, setSelectedProductsCart] = useState<
    TicketItem[]
  >([]);

  console.log('selectedProductsCart', selectedProductsCart);

  useEffect(() => {
    const eventCart = cartsPurchase.find((cart) => cart.eventId === +eventId!);

    if (eventCart && eventCart.ticketItems.length > 0) {
      setSelectedProductsCart(eventCart.ticketItems);
    } else {
      alert('Error al acceder a los tickets del evento');
    }
  }, [cartsPurchase, eventId]);

  return (
    <>
      <PageTitle title="Compra de tickets" />
      <HomeLayaut>
        {eventData && (
          <>
            <EventHorizontalCard {...eventData} />

            <section className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:mx-10 mt-5">
              <div className="col-span-2">
                <SummaryProductsTable
                  selectedProductsCart={selectedProductsCart}
                />
                <PourchaseUserInformationForm />
                <PaymentMethodForm
                  selectedProductsCart={selectedProductsCart}
                />

                <RoundedFilledButton
                  className="w-full"
                  text="Confirmar compra"
                  icon={<MdFactCheck />}
                />
              </div>
              <div className="sticky top-26  z-50 flex h-min">
                <CardResume />
              </div>
            </section>
          </>
        )}
      </HomeLayaut>
    </>
  );
};

export { EventPourchasePage };

export const PourchaseUserInformationForm = () => {
  return (
    <>
      <div className="border border-black rounded-lg mb-5 bg-white px-5 pt-6 pb-2.5 shadow-lg dark:border-white dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
          Datos del Comprador
        </h2>
        <div className="my-5">
          <label className="mt-1 block text-black dark:text-white ">
            Nombre Completo
          </label>
          <input
            type="text"
            name="name"
            placeholder="Juan Perez"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />

          <label className="mt-1 block text-black dark:text-white ">
            Email
          </label>
          <p>Este email sera usado para enviar los tickets de compra.</p>
          <input
            type="email"
            name="email"
            placeholder="juan.perez@email.com"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />

          <label className="mt-1 block text-black dark:text-white ">
            DNI o Pasaporte
          </label>
          <p>
            Este DNI o Pasaporte sera usado para la validacion de la identidad
            en el ingreso al evento.
          </p>
          <input
            type="text"
            name="dni"
            placeholder="12345678"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
    </>
  );
};
