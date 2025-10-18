import { APP_TEXT } from '../../constants/text';
import { GiTicket } from 'react-icons/gi';

interface LoaderProps {
  title?: string;
  subtitle?: string;
}
const Loader = ({ title, subtitle }: LoaderProps) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white w-full dark:bg-boxdark-2">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      <div className="flex my-4 font-bold uppercase text-primary text-2xl text-center justify-center">
        <GiTicket />
        <h2 className="">{APP_TEXT.app_name}</h2>
      </div>
      <div className="flex flex-col">
        {title && <h1 className="text-2xl font-bold">{title}</h1>}
        {subtitle && <p className="mt-4">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Loader;
