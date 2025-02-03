import React from 'react';
interface RIG {
  id: number;
  name: string;
}
interface RIGDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  rig: RIG | null; 
}
const RIGDetailsModal: React.FC<RIGDetailsModalProps> = ({ isOpen, onClose, rig }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 w-1/3">
        <button onClick={onClose} className="text-red-500 float-right">Close</button>
        {rig ? (
          <div>
            <h2 className="text-lg font-bold">{rig.name}</h2>
            <p>ID: {rig.id}</p>
          </div>
        ) : (
          <p>No RIG selected.</p>
        )}
      </div>
    </div>
  );
};

export default RIGDetailsModal;
