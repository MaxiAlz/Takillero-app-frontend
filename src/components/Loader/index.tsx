import logoApp from '../../images/logo/LG-TAKILLERO-NARANJA.svg';
interface LoaderProps {
  title?: string;
  subtitle?: string;
}
const Loader = ({ title, subtitle }: LoaderProps) => {
  return (
    <div className="flex  flex-col items-center justify-center  w-full dark:bg-boxdark-2">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      <div className="flex font-bold uppercase text-primary text-2xl text-center justify-center">
        <img src={logoApp} alt="Takillero!-logo" className="w-50 ml-5" />
      </div>
      <div className="flex flex-col">
        {title && <h1 className="text-2xl font-bold">{title}</h1>}
        {subtitle && <p className="mt-4">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Loader;
