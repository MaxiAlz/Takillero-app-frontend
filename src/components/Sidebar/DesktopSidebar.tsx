import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import logoFaviconApp from '../../images/logo/FAVICON-TK-NARANJA.svg';
import logoApp from '../../images/logo/LG-TAKILLERO-NARANJA.svg';
import SidebarLinkGroup from './SidebarLinkGroup';
import { UserRoles } from '../../modules/Auth/types/authTypes';
import {
  admin_dashboard_items,
  producer_dashboard_items,
  user_dashboard_items,
} from '../../constants';
import { RootState } from '../../redux/store';

interface DesktopSidebarProps {}

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

const DesktopSidebar: React.FC<DesktopSidebarProps> = () => {
  const location = window.location;
  const { user } = useSelector((state: RootState) => state.auth);
  const [sidebarExpanded, setSidebarExpanded] = useState(
    localStorage.getItem('sidebar-expanded') === 'true',
  );

  const dashboardItems = getDashboardItems(user!.data.role);

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.body.classList.add('sidebar-expanded');
    } else {
      document.body.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      onMouseEnter={() => setSidebarExpanded(true)}
      onMouseLeave={() => setSidebarExpanded(false)}
      className={`hidden lg:flex z-50 flex-col h-screen overflow-y-auto overflow-x-hidden bg-black dark:bg-boxdark duration-300 ease-in-out ${
        sidebarExpanded ? 'w-64' : 'w-20'
      }`}
    >
      {/* HEADER */}
      <NavLink to={'/'}>
        <div className="flex items-center justify-center lg:justify-start px-4 py-2 overflow-hidden">
          {!sidebarExpanded && (
            <img
              src={logoFaviconApp}
              alt="Takillero!-logo"
              className={`transition-all  duration-400 overflow-hidden h-15 w-20 ${
                !sidebarExpanded ? 'opacity-100 ml-2' : 'opacity-0  ml-0'
              }`}
            />
          )}

          <img
            className={` transition-all h-12 duration-300 overflow-hidden ${
              sidebarExpanded
                ? 'opacity-100 max-w-xs ml-2'
                : 'opacity-0 max-w-0 ml-0'
            }`}
            src={logoApp}
            alt="Takillero!-logo"
          />
        </div>
      </NavLink>

      {/* MENU */}
      <nav className="px-2 mt-4 flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-1.5">
          {dashboardItems.map((item) => {
            const isActive =
              location.pathname === item.link ||
              (item.link !== '/panel' &&
                location.pathname.startsWith(item.link));

            return (
              <li key={item.itemName}>
                {item.subLinksGroup ? (
                  <SidebarLinkGroup activeCondition={isActive}>
                    {(handleClick, open) => (
                      <>
                        <button
                          className={`flex w-full items-center rounded-md p-3 text-bodydark1 hover:bg-graydark dark:hover:bg-meta-4 duration-200 ${
                            sidebarExpanded ? 'gap-3' : 'gap-0'
                          } ${isActive && 'bg-primary text-white'}`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (sidebarExpanded) handleClick();
                          }}
                        >
                          <item.icon size={22} />
                          <span
                            className={`transition-all duration-300 whitespace-nowrap overflow-hidden ${
                              sidebarExpanded
                                ? 'opacity-100 max-w-xs ml-2'
                                : 'opacity-0 max-w-0 ml-0'
                            }`}
                          >
                            {item.itemName}
                          </span>
                          {sidebarExpanded && open && (
                            <svg
                              className="ml-auto h-4 w-4 rotate-90"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 6L14 10L6 14V6Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>

                        {sidebarExpanded && open && (
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
                  >
                    <item.icon size={22} />
                    <span
                      className={`transition-all duration-300 whitespace-nowrap overflow-hidden ${
                        sidebarExpanded
                          ? 'opacity-100 max-w-xs ml-2'
                          : 'opacity-0 max-w-0 ml-0'
                      }`}
                    >
                      {item.itemName}
                    </span>
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export { DesktopSidebar };
