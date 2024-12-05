import {
  MdOutlineDashboard,
  MdOutlinePeople,
  MdEventNote,
  MdOutlineSettings,
  MdOutlinePerson,
  MdOutlineReceipt,
} from 'react-icons/md';

const admin_dashboard_items = [
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
    ],
  },
];

export { admin_dashboard_items };
