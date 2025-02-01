import React, { useState } from 'react';
import Modal from './Modal';

interface SetTimeDelayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (timeDelay: number) => void;
}

const SetTimeDelayModal: React.FC<SetTimeDelayModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [timeDelay, setTimeDelay] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof timeDelay === 'number') {
      onSubmit(timeDelay);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Set Time Delay">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Time Delay (seconds)</label>
          <input
            type="number"
            placeholder="Enter time delay in seconds"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={timeDelay}
            onChange={(e) => setTimeDelay(Number(e.target.value))}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
            type="submit"
          >
            Set Delay
          </button>
          <button
            className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default SetTimeDelayModal;
