import { FiGift } from 'react-icons/fi';
import { GiTicket } from 'react-icons/gi';
import { MdOutlinePriceChange } from 'react-icons/md';
import {
  RoundedFilledButton,
  RoundedOutlineButton,
} from '../../../../components';
import { useState } from 'react';
import { TEXT_TICKET_TYPE, TICKET_TYPE_LABELS } from '../../../../constants';

type TicketTypeOption = 'free' | 'paid' | 'donation' | 'undefined';

interface SelectTicketTypeModalProps {
  onSelectType: (type: TicketTypeOption) => void;
  onClose: () => void;
}

export const SelectTicketTypeModal = ({
  onSelectType,
}: SelectTicketTypeModalProps) => {
  const [selectedType, setSelectedType] =
    useState<TicketTypeOption>('undefined');

  return (
    <div className="p-2">
      <label className=" block text-black dark:text-white text-xl">
        ¿Qué tipo de entrada quieres crear?
      </label>
      <p>Elije el tipo de entrada a crear</p>

      <div className="flex justify-around my-4">
        {Object.entries(TICKET_TYPE_LABELS).map(([type, label]) => (
          <RoundedOutlineButton
            key={type}
            type="button"
            icon={
              type === 'free'
                ? GiTicket
                : type === 'paid'
                ? MdOutlinePriceChange
                : FiGift
            }
            text={label}
            onClick={() => setSelectedType(type as TicketTypeOption)}
            className={selectedType === type ? 'bg-primary' : ''}
          />
        ))}
      </div>
      <div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
          {TEXT_TICKET_TYPE[selectedType]}
        </p>
      </div>
      <div className="border-t border-gray-300 mt-4"></div>

      <div className="flex justify-end gap-2 mt-4">
        <RoundedFilledButton
          disabled={selectedType === 'undefined'}
          type="button"
          text="Continuar"
          onClick={() => onSelectType(selectedType)}
        />
      </div>
    </div>
  );
};
