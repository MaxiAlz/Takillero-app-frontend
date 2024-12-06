import { Carousel } from 'flowbite-react';
import { RoundedFilledButton } from '../../../components';

const CarrouselSection = () => {
  return (
    <div className="h-full sm:h-64 lg:h-80 2xl:h-96 m-5 mx-5">
      <Carousel className="object-fill w-full h-full" pauseOnHover>
        <div className="relative w-full h-full">
          <img
            src="https://cdn.getcrowder.com/images/b7ffaba7-c250-4071-852b-77cc6bccf94a-1920x720-4.jpg"
            alt="..."
            className="object-cover "
          />
          <div className="absolute  bottom-20 left-10 shadow-black shadow-xl m-5 rounded-lg">
            <RoundedFilledButton text="Ir al evento" />
          </div>
        </div>
        <div className="relative w-full h-full">
          <img
            src="https://cdn.getcrowder.com/images/90ebaf55-b80c-4b08-b7f1-38252c927965-1920x720-aa.jpg"
            alt="..."
            className="object-cover w-full h-full"
          />
          <div className="absolute  bottom-20 left-10 shadow-black shadow-xl">
            <RoundedFilledButton text="Ir al evento" />
          </div>
        </div>
        <div className="relative w-full h-full">
          <img
            src="https://cdn.getcrowder.com/images/25df6eb2-57da-44e2-b221-985b4c42cdab-1920x720-2.jpg"
            alt="..."
            className="object-cover w-full h-full"
          />
          <div className="absolute  bottom-20 left-10 shadow-black shadow-xl">
            <RoundedFilledButton text="Ir al evento" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export { CarrouselSection };
