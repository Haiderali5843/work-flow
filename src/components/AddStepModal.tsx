import React, { useState } from 'react';
import Modal from '../components/Modal';

// Define the props interface
interface AddStepModalProps {
  isOpen: boolean; // Type for isOpen
  onClose: () => void; // Type for onClose function
  onAddStep: (stepName: string) => void; // Type for onAddStep function
}

const AddStepModal: React.FC<AddStepModalProps> = ({ isOpen, onClose, onAddStep }) => {
  const [stepName, setStepName] = useState<string>(''); // Specify the type for stepName

  const handleAddStep = () => {
    if (stepName) {
      onAddStep(stepName);
      setStepName('');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Step">
      <div className="p-4">
      <label htmlFor="stepSelect" className="block mt-4 mb-2 ">Select a Step:</label>
            <select id="stepSelect" className="border px-4 py-2 rounded" required>
              <option value="" selected disabled>--Please choose an option--</option>
              <option value="step1">Step 1</option>
              <option value="step2">Step 2</option>
              <option value="step3">Step 3</option>
              <option value="step4">Step 4</option>
              <option value="step5">Step 5</option>
            </select>
        <div className="mt-4 flex">
          <button
            onClick={handleAddStep}
            className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
          >
            Add Step
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddStepModal;