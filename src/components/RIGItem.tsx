import React from 'react';
interface RIGItemProps {
  id: number;
  name: string;
  onClick: (id: number, name: string) => void;
}
const RIGItem: React.FC<RIGItemProps> = ({ id, name, onClick }) => {
  return (
      <button
        className="text-left text-gray-800 w-full px-4 py-2 bg-gray-200 hover:text-white hover:bg-[#F3642C] transition-colors duration-300 rounded cursor-pointer"
        onClick={() => onClick(id, name)}
      >
        {name}
      </button>
  );
};

export default RIGItem;
