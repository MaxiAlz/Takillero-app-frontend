'use client';

import { Button } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  featured: boolean;
}

const featuredEvents: Event[] = [
  {
    id: 1,
    title: 'BUD BUNNY - Debi tirar mas fotos Tour',
    date: '15 de Marzo, 2024',
    location: 'Estadio Luna Park',
    image:
      'https://cdn.getcrowder.com/images/791aac29-8353-4d9e-9846-b6cb3fcc6388-banner-inicio-1920-x-720-3-min.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'THE DRIVE - OBSESSION TOUR',
    date: '22 de Marzo, 2024',
    location: 'Teatro Colón',
    image:
      'https://cdn.getcrowder.com/images/90ebaf55-b80c-4b08-b7f1-38252c927965-1920x720-aa.jpg',
    featured: true,
  },
  {
    id: 3,
    title: 'Obra de Teatro Clásica',
    date: '28 de Marzo, 2024',
    location: 'Teatro San Martín',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/dramatic-theater-stage-Q3CYBorhyvPxDSatsoj9p4kB4fWDwc.png',
    featured: true,
  },
];

export function EventBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length,
    );
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg">
      {featuredEvents.map((event, index) => (
        <div
          key={event.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide
              ? 'translate-x-0'
              : index < currentSlide
              ? '-translate-x-full'
              : 'translate-x-full'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={event.image || '/placeholder.svg'}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h2 className="font-montserrat font-black text-2xl md:text-4xl mb-2 ">
                {event.title}
              </h2>
              <p className="text-lg md:text-xl mb-1">{event.date}</p>
              <p className="text-base md:text-lg mb-4">{event.location}</p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Comprar Entradas
              </Button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
      >
        <RiArrowLeftSLine className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
      >
        <RiArrowRightSLine className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {featuredEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
