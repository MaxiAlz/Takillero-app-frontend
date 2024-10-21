import {
  MdPersonOutline,
  MdOutlineDashboard,
  MdOutlineSettings,
} from 'react-icons/md';

const dropdown_user_links = [
  { itemName: 'Mi perfil', icon: MdPersonOutline, link: '/profile' },
  { itemName: 'Mi Panel', icon: MdOutlineDashboard, link: '/panel' },
  {
    itemName: 'Configuraciones',
    icon: MdOutlineSettings,
    link: '/panel/settings',
  },
  // { item: 'Cerrar sesion', icon: 'MdLogout  ' },
];

export { dropdown_user_links };
