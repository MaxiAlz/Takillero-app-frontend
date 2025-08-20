import { Button, Label, Select, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { HiFilter, HiLocationMarker, HiSearch } from 'react-icons/hi';
import { RiSearchLine, RiMapPinLine, RiFilter3Line } from 'react-icons/ri';
import { RoundedFilledButton } from '../Buttons';

export function SearchSection() {
  return (
    <div className="rounded-lg p-6 shadow-sm border my-5">
      <h2 className="font-bold text-xl mb-4 dark:text-white">
        Encuentra tu evento
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <TextInput
          className="dark:text-black"
          id="search"
          type="text"
          icon={HiSearch}
          placeholder="Nombre del evento"
        />

        <Select id="ciudad" icon={HiLocationMarker}>
          <option disabled selected className="text-black">
            Seleccionar ciudad
          </option>
          <option className="text-black">United States</option>
          <option className="text-black">Canada</option>
          <option className="text-black">France</option>
          <option className="text-black">Germany</option>
        </Select>

        <Select id="countries" icon={HiFilter}>
          <option selected className="text-black">
            United States
          </option>
          <option className="text-black">Canada</option>
          <option className="text-black">France</option>
          <option className="text-black">Germany</option>
        </Select>

        <RoundedFilledButton text="Buscar" icon={<HiSearch />} />
      </div>
    </div>
  );
}
