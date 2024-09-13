import React from 'react';
import SideMenu from '../components/header/Header'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <SideMenu>
      <div className="flex-grow-1 p-3">
        {children}
      </div>
      </SideMenu>
    </>
  );
};

export default MainLayout