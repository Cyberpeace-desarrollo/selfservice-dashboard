import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';

const DefaultLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark h-screen overflow-hidden flex transition-all duration-300 ease-in-out">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'w-72' : 'w-0'
        }`}
      >
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      </div>



      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'pl-0' : 'pl-1'
        }`}
      >
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="transition-all duration-300 ease-in-out">
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <Outlet /> {/* Renderiza las rutas anidadas aquí */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;

