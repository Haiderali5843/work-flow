import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();

  return (
    <div className={`w-56 h-[calc(100%-4rem)] bg-gray-800 text-white fixed top-16 left-0 flex flex-col transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}>
      <ul className="list-none text-left mt-3">
        <li className={`my-2 transition-colors duration-300 ${location.pathname === "/Rigs" ? "bg-[#F3642C]" : "hover:bg-[#F3642C]"}`}>
          <Link to="/Rigs" className="text-white no-underline py-2 block pl-10">
            <i className="fa-solid fa-sitemap pr-4"></i> RIGs
          </Link>
        </li>
        <li className={`my-2 transition-colors duration-300 ${location.pathname === "/Workflow" ? "bg-[#F3642C]" : "hover:bg-[#F3642C]"}`}>
          <Link to="/Workflow" className="text-white no-underline py-2 block pl-10">
            <i className="fa-solid fa-gear pr-4"></i> Workflow
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
