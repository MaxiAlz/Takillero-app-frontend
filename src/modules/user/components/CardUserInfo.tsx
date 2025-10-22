// import CoverOne from '../images/cover/cover-01.png';
import userSix from '../../..//images/logo/LOGO-TAKILLERO-NARANJA.svg';

const CardUserInfo = () => {
  return (
    <div className="flex mx-20 items-center rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div className="h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
        <div className=" drop-shadow-2">
          <img src={userSix} alt="profile" className="w-full" />
        </div>
      </div>
      <div className="mx-4">
        <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
          Pamela del valle
        </h3>
        <p className="font-medium">pamelita@lacrack.com</p>
        <p className="font-medium uppercase text-primary">PRODUCTOR</p>
      </div>
    </div>
  );
};

export { CardUserInfo };
