import React from 'react';
import Modal from './Modal';

interface AddWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  workflows: string[];
  selectedWorkflow: string;
  onWorkflowChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const AddWorkflowModal: React.FC<AddWorkflowModalProps> = ({ isOpen, onClose, workflows, selectedWorkflow, onWorkflowChange }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Workflow">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Select Workflow</label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedWorkflow}
          onChange={onWorkflowChange}
        >
          {workflows.map((workflow, index) => (
            <option key={index} value={workflow}>{workflow}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
          type="button"
          onClick={onClose}
        >
          Save
        </button>
        <button
          className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default AddWorkflowModal;
