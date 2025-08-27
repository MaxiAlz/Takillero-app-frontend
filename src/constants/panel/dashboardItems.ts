import { IoColorPaletteOutline } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';
import {
  MdOutlineDashboard,
  MdOutlinePeople,
  MdEventNote,
  MdOutlineSettings,
  MdOutlinePerson,
  MdOutlineReceipt,
  MdOutlinePayments,
  MdOutlineAirplaneTicket,
} from 'react-icons/md';

type DashboardItem = {
  itemName: string;
  icon: IconType;
  link: string;
  subLinksGroup?: { itemName: string; link: string; icon: IconType }[];
};

const admin_dashboard_items: DashboardItem[] = [
  { itemName: 'Overview', icon: MdOutlineDashboard, link: '/panel' },
  { itemName: 'Usuarios', icon: MdOutlinePeople, link: '/panel/users' },
  { itemName: 'Eventos', icon: MdEventNote, link: '/panel/events' },
  {
    itemName: 'Configuraciones',
    icon: MdOutlineSettings,
    link: '/panel/settings',
    subLinksGroup: [
      {
        itemName: 'Mi Perfil',
        link: '/panel/settings/profile',
        icon: MdOutlinePerson,
      },
      {
        itemName: 'Transacciones',
        link: '/panel/settings/transactions',
        icon: MdOutlineReceipt,
      },
      {
        itemName: 'Personalizar',
        link: '/panel/settings/personalize',
        icon: IoColorPaletteOutline,
      },
    ],
  },
];

const producer_dashboard_items: DashboardItem[] = [
  { itemName: 'Overview', icon: MdOutlineDashboard, link: '/panel' },
  { itemName: 'Mis Eventos', icon: MdEventNote, link: '/panel/events' },
  {
    itemName: 'Datos de Facturacion',
    icon: MdOutlinePayments,
    link: '/panel/billing',
  },

  {
    itemName: 'Configuraciones',
    icon: MdOutlineSettings,
    link: '/panel/settings',
    subLinksGroup: [
      {
        itemName: 'Mi Perfil',
        link: '/panel/settings/profile',
        icon: MdOutlinePerson,
      },
      {
        itemName: 'Transacciones',
        link: '/panel/billing',
        icon: MdOutlineReceipt,
      },
    ],
  },
];

const user_dashboard_items: DashboardItem[] = [
  {
    itemName: 'Mis tickets',
    icon: MdOutlineAirplaneTicket,
    link: '/my-tickets',
  },
];

export {
  admin_dashboard_items,
  producer_dashboard_items,
  user_dashboard_items,
};
