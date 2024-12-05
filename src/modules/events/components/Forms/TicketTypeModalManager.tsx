// import { useState } from 'react';
// import { SelectTicketTypeModal } from './SelectTicketTypeModal';
// import { CreateTicketTypeForm } from './CreateTicketTypeForm';

// interface TicketTypeModalManagerProps {
//   eventId: number;
//   ticketId?: number;
//   price?: number;
//   closeModal: () => void;
//   refetchTickets?: () => void;
// }

// export type TicketTypeOption = 'free' | 'paid' | 'donation' | 'undefined';

// export const TicketTypeModalManager = (props: TicketTypeModalManagerProps) => {
//   const [step, setStep] = useState<'select' | 'form'>(() => 
//     props.ticketId ? 'form' : 'select'
//   );
//   const [selectedType, setSelectedType] = useState<TicketTypeOption>(() => {
//     if (props.ticketId) {
//       return props.price === 0 ? 'free' : 'paid';
//     }
//     return 'undefined';
//   });

//   console.log('props.ticketId', props.ticketId);
//   console.log('props.eventId', props.eventId);
  
//   if (step === 'select') {
//     return (
//       <SelectTicketTypeModal
//         onClose={props.closeModal}
//         onSelectType={(type) => {
//           setSelectedType(type);
//           setStep('form');
//         }}
//       />
//     );
//   }

//   return (
//     <CreateTicketTypeForm
//       {...props}
//       selectedType={selectedType}
//       onBack={() => setStep('select')}
//     />
//   );
// };
