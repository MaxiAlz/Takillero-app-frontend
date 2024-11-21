import { useParams } from 'react-router-dom';
import { PageTitle } from '../../../components';
import HomeLayaut from '../../../layout/HomeLayaut';

const ViewEventDetail = () => {
  const { eventName, eventId } = useParams();
  return (
    <>
      <PageTitle title="Ver Evento | Bobby Hub " />
      <HomeLayaut>
        <div>eventId:{eventId}</div>;<div>eventName:{eventName}</div>;
      </HomeLayaut>
    </>
  );
};

export { ViewEventDetail };
