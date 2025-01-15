import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PurchaseData } from '../../../modules/home/types/purchaseTypes';

const initialState: PurchaseData = {
  eventData: {
    name: '',
    date: '',
    location: '',
    photo: '',
    verticalPhoto: '',
    venue: '',
  },
  personaData: {
    name: '',
    dni: '',
  },
  tickets: [],
};

const ticketSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    setPurchaseData: (state, action: PayloadAction<PurchaseData | null>) => {
      state.eventData = action.payload!.eventData;
      state.personaData = action.payload!.personaData;
      state.tickets = action.payload!.tickets;
    },
    clearTickets: () => initialState,
  },
});

export const { setPurchaseData, clearTickets } = ticketSlice.actions;

export default ticketSlice.reducer;
