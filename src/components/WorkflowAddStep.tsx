import React from 'react';
interface WorkflowAddStepProps {
  isOpen: boolean;
  onClose: () => void;
  stepType: string;
  setStepType: (type: string) => void;
  stepDetails: string;
  setStepDetails: (details: string) => void;
  handleStepSubmit: () => void;
}
const WorkflowAddStep: React.FC<WorkflowAddStepProps> = ({
  isOpen,
  onClose,
  stepType,
  setStepType,
  stepDetails,
  setStepDetails,
  handleStepSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="pt-4 pb-4 pl-10 pr-10 bg-white rounded-lg shadow-md w-full md:max-w-[500px] max-w-[95%] border border-[#F3642C]">
        <h2 className="text-lg font-semibold">Add New Step</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Select Step Type:</label>
          <select value={stepType} onChange={(e) => setStepType(e.target.value)} className="w-full border rounded p-2" required>
            <option value="">Select a step</option>
            <option value="Start Flow">Start Flow</option>
            <option value="Swipe on Screen (up)">Swipe on Screen (up)</option>
            <option value="Type Input">Type Input</option>
            <option value="Click on Screen (image)">Click on Screen (image)</option>
            <option value="Set Time Delay">Set Time Delay</option>
          </select>
        </div>

        {stepType && (
          <div className="mb-4">
            <label className="block text-sm font-medium">{stepType === 'Type Input' ? 'Input Text:' : stepType === 'Set Time Delay' ? 'Delay (seconds):' : 'Details:'}</label>
            <input type="text" value={stepDetails} onChange={(e) => setStepDetails(e.target.value)} className="w-full border rounded p-2" placeholder="Enter details" />
          </div>
        )}

        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 border border-gray-300 bg-gray-200 text-black px-4 py-2 rounded">Cancel</button>
          <button onClick={handleStepSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Add Step</button>
        </div>
      </div>
    </div>
  );
};
export default WorkflowAddStep;