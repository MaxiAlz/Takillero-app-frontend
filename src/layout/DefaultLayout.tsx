import React, { useState, ReactNode } from 'react';
import Header from '../components/Header/index';
import { DesktopSidebar } from '../components/Sidebar/DesktopSidebar';
import { MobileDrawerSidebar } from '../components/Sidebar/MobileDrawerSidebar';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        {/* Desktop Sidebar */}
        <DesktopSidebar />

        {/* Mobile Drawer Sidebar */}
        <MobileDrawerSidebar
          sidebarOpen={mobileSidebarOpen}
          setSidebarOpen={setMobileSidebarOpen}
        />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header
            sidebarOpen={mobileSidebarOpen}
            setSidebarOpen={setMobileSidebarOpen}
          />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="flex-grow">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;
