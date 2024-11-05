import {
  MdPersonOutline,
  MdOutlineDashboard,
  MdOutlineSettings,
} from 'react-icons/md';

const dropdown_user_links = [
  { itemName: 'Mi perfil', icon: MdPersonOutline, link: '/user/profile' },
  { itemName: 'Mi Panel', icon: MdOutlineDashboard, link: '/panel' },

  {
    itemName: 'Configuraciones',
    icon: MdOutlineSettings,
    link: '/panel/settings',
  },

];

export { dropdown_user_links };
