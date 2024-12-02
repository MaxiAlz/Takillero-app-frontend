import { useParams } from 'react-router-dom';
import { PageTitle, RoundedFilledButton } from '../../../components';
import EventHorizontalCard from '../../../components/Cards/EventHorizontalCard';
import HomeLayaut from '../../../layout/HomeLayaut';
import { useGetPublicEventById } from '../hooks/useGetPublicEventById';
import { SummaryProductsTable } from '../components/SummaryProductsTable';
import { useEffect, useState } from 'react';
import { MdFactCheck } from 'react-icons/md';
import { useCartTicketStorage } from '../../../hooks/useCardTicketStorage';
import { PaymentMethodForm } from '../components/forms/PaymentMethotsForm';
import { CardResume } from '../components/forms/CardResumme';
import { PourchaseProductItem } from '../types/homeTypes';
import { usePurchaseFormik } from '../formiks/usePoruchaseFormik';
import { PourchaseUserInformationForm } from '../components/PourchaseUserInfoForm';

const hasPaidTickets = (tickets: PourchaseProductItem[]): boolean => {
  return tickets.some((ticket) => ticket.price > 0);
};

const EventPourchasePage = () => {
  // 4.1 Hooks (useState, useParams, custom hooks)
  const [selectedProductsCart, setSelectedProductsCart] = useState<
    PourchaseProductItem[]
  >([]);
  const [hasPaidProducts, setHasPaidProducts] = useState<boolean>(false);
  const { eventId } = useParams();

  // 4.2 Custom hooks
  const { cartsPurchase } = useCartTicketStorage();
  const { eventData } = useGetPublicEventById(+eventId!);
  const purchaseFormik = usePurchaseFormik(+eventId!);

  const setTicketItems = () => {
    const ticketItems = selectedProductsCart.map((product) => ({
      quantity: product.quantity,
      ticketTypeId: product.ticketTypeId,
    }));
    purchaseFormik.setFieldValue('ticketItems', ticketItems);
  };

  useEffect(() => {
    const eventCart = cartsPurchase.find((cart) => cart.eventId === +eventId!);
    setHasPaidProducts(hasPaidTickets(eventCart?.ticketItems || []));
    if (eventCart && eventCart.ticketItems.length > 0) {
      setSelectedProductsCart(eventCart.ticketItems);
    } else {
      return alert('Error al acceder a los tickets del evento');
    }
    setTicketItems();
  }, [cartsPurchase, eventId, selectedProductsCart]);

  console.log('formik', purchaseFormik.values);

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
                <div className="order-1 lg:hidden mb-4">
                  <CardResume
                    selectedProductsCart={selectedProductsCart}
                    hasPaidProducts={hasPaidProducts}
                    purchaseFormik={purchaseFormik}
                  />
                </div>
                <PourchaseUserInformationForm purchaseFormik={purchaseFormik} />
                <PaymentMethodForm
                  selectedProductsCart={selectedProductsCart}
                  hasPaidProducts={hasPaidProducts}
                  purchaseFormik={purchaseFormik}
                />

                <div className="flex flex-col">
                  <div className="order-2">
                    <RoundedFilledButton
                      className="w-full"
                      disabled={!purchaseFormik.isValid}
                      type="submit"
                      onClick={() => purchaseFormik.handleSubmit()}
                      text={
                        purchaseFormik.isSubmitting
                          ? 'Cargando...'
                          : hasPaidProducts
                          ? 'Confirmar compra'
                          : 'Obtener tickets'
                      }
                      icon={<MdFactCheck />}
                    />
                  </div>
                </div>
              </div>
              <div className="sticky top-26 z-50 h-min hidden lg:block">
                <CardResume
                  selectedProductsCart={selectedProductsCart}
                  hasPaidProducts={hasPaidProducts}
                  purchaseFormik={purchaseFormik}
                />
              </div>
            </section>
          </>
        )}
      </HomeLayaut>
    </>
  );
};

export { EventPourchasePage };
