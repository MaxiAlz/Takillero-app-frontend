import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SidebarLinkGroup from './SidebarLinkGroup';
import { UserRoles } from '../../modules/Auth/types/authTypes';
import {
  admin_dashboard_items,
  producer_dashboard_items,
  user_dashboard_items,
} from '../../constants';
import { RootState } from '../../redux/store';
import { GiTicket } from 'react-icons/gi';
import { APP_TEXT } from '../../constants/text';
import { FaArrowLeft } from 'react-icons/fa6';

interface MobileDrawerSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const getDashboardItems = (role: UserRoles) => {
  switch (role) {
    case UserRoles.ADMINISTRADOR:
      return admin_dashboard_items;
    case UserRoles.PRODUCTOR:
      return producer_dashboard_items;
    case UserRoles.USUARIO:
      return user_dashboard_items;
    default:
      return [];
  }
};

const MobileDrawerSidebar: React.FC<MobileDrawerSidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dashboardItems = getDashboardItems(user!.data.role);

  return (
    <div
      className={`fixed inset-0 z-999 flex lg:hidden pointer-events-none transition-all duration-300 ${
        sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
      }`}
    >
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/50 z-998 transition-opacity duration-300"
        onClick={() => setSidebarOpen(false)}
      />
      {/* drawer */}
      <aside className="relative z-9999 w-64 h-screen bg-black dark:bg-boxdark p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          <NavLink to={'/'}>
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <GiTicket className="text-primary text-2xl" />
              <h1
                className={` text-xl font-bold text-primary transition-opacity duration-300 `}
              >
                {APP_TEXT.app_name}
              </h1>
            </div>
          </NavLink>
          <button
            onClick={() => setSidebarOpen(false)}
            className="mb-4 px-3 py-2 bg-gray-700 text-white rounded"
          >
            <FaArrowLeft />
          </button>
        </div>

        <ul className="flex flex-col gap-2">
          {dashboardItems.map((item) => {
            const isActive =
              window.location.pathname === item.link ||
              (item.link !== '/panel' &&
                window.location.pathname.startsWith(item.link));
            return (
              <li key={item.itemName}>
                {item.subLinksGroup ? (
                  <SidebarLinkGroup activeCondition={isActive}>
                    {(handleClick, open) => (
                      <>
                        <button
                          className={`flex w-full items-center gap-3 rounded-md p-3 text-bodydark1 hover:bg-graydark dark:hover:bg-meta-4 duration-200 ${
                            isActive && 'bg-primary text-white'
                          }`}
                          onClick={handleClick}
                        >
                          <item.icon size={22} />
                          {item.itemName}
                        </button>
                        {open && (
                          <ul className="mt-2 mb-3 flex flex-col gap-1 pl-8">
                            {item.subLinksGroup?.map((subLink) => (
                              <li key={subLink.itemName}>
                                <NavLink
                                  to={subLink.link}
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 rounded-md py-2 px-2 text-sm text-bodydark2 hover:text-white duration-200 ${
                                      isActive
                                        ? 'text-primary dark:text-primary'
                                        : ''
                                    }`
                                  }
                                  onClick={() => setSidebarOpen(false)}
                                >
                                  <subLink.icon size={18} />
                                  {subLink.itemName}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </SidebarLinkGroup>
                ) : (
                  <NavLink
                    to={item.link}
                    className={`flex items-center gap-3 rounded-md p-3 text-bodydark1 hover:bg-graydark dark:hover:bg-meta-4 duration-200 ${
                      isActive && 'bg-primary text-white'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon size={22} />
                    {item.itemName}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export { MobileDrawerSidebar };
