import { ReactNode, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { SidebarApp } from '../components/Sidebar/SidebarApp';
import FooterCustom from '../components/Navbar/Footer';

const HomeLayaut: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <SidebarApp sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div
          className={`relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden duration-100 ease-linear ${
            sidebarOpen ? 'blur-sm' : ''
          }`}
        >
          {/* <!-- ===== Header Start ===== --> */}
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="flex-grow ">
            <div className="mx-auto max-w-screen-2xl w-full p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
          <FooterCustom />
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default HomeLayaut;
