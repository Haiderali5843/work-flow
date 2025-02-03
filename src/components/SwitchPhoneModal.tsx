import React, { useState } from 'react';
import Modal from './Modal';

interface SwitchPhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (existingNumber: string, newNumber: string) => void;
}

const SwitchPhoneModal: React.FC<SwitchPhoneModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [existingNumber, setExistingNumber] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(existingNumber, newNumber);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Switch Phone Number">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Existing Number of Phones</label>
          <input
            type="number"
            placeholder="Enter existing number of phones"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={existingNumber}
            onChange={(e) => setExistingNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Select New Phone Number</label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          >
            <option value="" selected disabled>Select a new phone number</option>
            <option value="123-456-7890">1</option>
            <option value="234-567-8901">2</option>
            <option value="345-678-9012">3</option>
            <option value="456-789-0123">4</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
            type="submit"
          >
            Switch
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

export default SwitchPhoneModal;