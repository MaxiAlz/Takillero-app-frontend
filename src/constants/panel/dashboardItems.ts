import {
  MdOutlineDashboard,
  MdOutlinePeople,
  MdEventNote,
  MdOutlineSettings,
} from 'react-icons/md';

const admin_dashboard_items = [
  { itemName: 'Overview', icon: MdOutlineDashboard, link: '/panel' },
  { itemName: 'Usuarios', icon: MdOutlinePeople, link: '/panel/users' },
  { itemName: 'Eventos', icon: MdEventNote, link: '/panel/events' },
  {
    itemName: 'Configuraciones',
    icon: MdOutlineSettings,
    link: '/panel/settings',
  },
];

export { admin_dashboard_items };
