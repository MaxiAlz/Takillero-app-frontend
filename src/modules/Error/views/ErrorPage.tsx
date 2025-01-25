import { useNavigate } from 'react-router-dom';
import { RoundedFilledButton } from '../../../components';
import { MdHome } from 'react-icons/md';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <div>
        <h2 className="text-5xl text-primary">404 Not Found</h2>
      </div>
      <div>
        <p className="text-4xl font-bold m-10">
          Oops! Ha ocurrido un error. Página no encontrada
        </p>
      </div>
      <div>
        <RoundedFilledButton
          text="Volver a home"
          icon={<MdHome />}
          onClick={() => navigate('/')}
        />
      </div>
    </main>
  );
};

export { ErrorPage };
