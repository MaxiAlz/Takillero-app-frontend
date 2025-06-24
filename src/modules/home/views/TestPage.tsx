import HomeLayaut from '../../../layout/HomeLayaut';
import { TicketQrBuyed } from '../../../components';

const TestPage = () => {
  const ticketCount = 2;
  const eventData = {
    name: 'FIESTA DEL MUNDO',
    date: '2023-06-01',
    location: 'la loma del orto',
    photo:
      'https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D',
    verticalPhoto:
      'https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D',
    venue: 'PREDIO FERIAL CATAMARCA',
  };

  const ticket = {
    code: 'VC9EVR',
    type: 'asd',
  };

  const personaData = {
    name: 'Juan Perez',
    dni: '13123',
  };
  return (
    <HomeLayaut>
      <section className="w-full  flex flex-col justify-center items-center">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-gray-900">Mis Tickets</h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {ticketCount} 'ticket'
          </span>
        </div>

        <TicketQrBuyed
          key={'VC9EVR'}
          eventData={eventData}
          personaData={personaData}
          ticket={ticket}
        />
      </section>
    </HomeLayaut>
  );
};

export { TestPage };
