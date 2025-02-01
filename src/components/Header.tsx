import React from 'react';
interface HeaderProps {
  toggleSidebar: () => void;
}
const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className=" h-16 flex items-center fixed w-full top-0 left-0 z-10 bg-white" style={{ borderBottom: '1px solid #1E2939' }}>
      <h1 className="text-lg text-gray-800 font-extrabold  ml-10 md:block hidden">WorkFlow Builder</h1>
      <button className=" sm:ml-10 lg:ml-6 ml-3 hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] transition-colors duration-300 cursor-pointer px-4 py-1 rounded mr-10" onClick={toggleSidebar}> 
        <i className="fa-solid fa-bars"></i>
      </button>
      <h1 className="text-lg text-gray-800 font-bold font-serif md:ml-32 ml-14 md:hidden block">WorkFlow Builder</h1>
    </header>
  );
};
export default Header;
