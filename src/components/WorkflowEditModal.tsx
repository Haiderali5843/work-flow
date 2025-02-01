// // WorkflowEditModal.tsx
// import React, { useState } from 'react';
// import Modal from './Modal'; // Adjust the import path as necessary

// interface WorkflowEditModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   workflowName: string;
//   activeHours: number[];
//   activeDays: { [key: string]: boolean };
//   onSave: (name: string, hours: number[], days: { [key: string]: boolean }) => void;
// }

// const WorkflowEditModal: React.FC<WorkflowEditModalProps> = ({
//   isOpen,
//   onClose,
//   workflowName,
//   activeHours,
//   activeDays,
//   onSave,
// }) => {
//   const [name, setName] = useState(workflowName);
//   const [hours, setHours] = useState(activeHours);
//   const [days, setDays] = useState(activeDays);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave(name, hours, days);
//     onClose(); // Close the modal after saving
//   };

//   const handleDayChange = (day: string) => {
//     setDays((prev) => ({ ...prev, [day]: !prev[day] }));
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} title="Edit Workflow">
//       <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md max-h-[90vh] overflow-y-auto w-full max-w-[90%] md:max-w-[400px]">
//         <div className="mb-4">
//           <label htmlFor="workflowName" className="block text-sm font-medium text-gray-700">Workflow Name:</label>
//           <input
//             type="text"
//             id="workflowName"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Active Hours:</label>
//           <div className="flex items-center">
//             <input
//               type="range"
//               min="0"
//               max="24"
//               value={hours[0]}
//               onChange={(e) => setHours([Number(e.target.value), hours[1]])}
//               className="w-full bg-white accent-[#F3642C]"
//             />
//             <span className="ml-2">{hours[0]}:00</span>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Active Days:</label>
//           {Object.keys(days).map((day) => (
//             <div key={day} className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={days[day]}
//                 onChange={() => handleDayChange(day)}
//                 className="mr-2 accent-[#F3642C]"
//               />
//               <span>{day}</span>
//             </div>
//           ))}
//         </div>
//         <button type="submit" className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer">Save</button>
//       </form>
//     </Modal>
//   );
// };

// export default WorkflowEditModal;

// WorkflowEditModal.tsx
import React, { useState } from 'react';
import Modal from './Modal'; // Adjust the import path as necessary
import AddStepModal from './AddStepModal'; // Import the AddStepModal

interface WorkflowEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  workflowName: string;
  activeHours: number[];
  activeDays: { [key: string]: boolean };
  onSave: (name: string, hours: number[], days: { [key: string]: boolean }) => void;
}

const WorkflowEditModal: React.FC<WorkflowEditModalProps> = ({
  isOpen,
  onClose,
  workflowName,
  activeHours,
  activeDays,
  onSave,
}) => {
  const [name, setName] = useState(workflowName);
  const [hours, setHours] = useState(activeHours);
  const [days, setDays] = useState(activeDays);
  const [isAddStepModalOpen, setIsAddStepModalOpen] = useState(false); // State for the AddStepModal

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(name, hours, days);
    onClose(); // Close the modal after saving
  };

  const handleDayChange = (day: string) => {
    setDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const handleAddStep = (stepName: string) => {
    // Handle the addition of the step here
    console.log('Step added:', stepName);
    // You can also update the state or perform any other action needed
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Edit Workflow">
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md max-h-[90vh] overflow-y-auto w-full max-w-[90%] md:max-w-[400px]">
          <div className="mb-4">
            <label htmlFor="workflowName" className="block text-sm font-medium text-gray-700">Workflow Name:</label>
            <input
              type="text"
              id="workflowName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Active Hours:</label>
            <div className="flex items-center">
              <input
                type="range"
                min="0"
                max="24"
                value={hours[0]}
                onChange={(e) => setHours([Number(e.target.value), hours[1]])}
                className="w-full bg-white accent-[#F3642C]"
              />
              <span className="ml-2">{hours[0]}:00</span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Active Days:</label>
            {Object.keys(days).map((day) => (
              <div key={day} className="flex items-center">
                <input
                  type="checkbox"
                  checked={days[day]}
                  onChange={() => handleDayChange(day)}
                  className="mr-2 accent-[#F3642C]"
                />
                <span>{day}</span>
              </div>
            ))}
          </div>
          <div className='flex justify-between'>
          <input
            type="button"
            value="Edit Step"
            onClick={() => setIsAddStepModalOpen(true)}
            className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
          />
          <button type="submit" className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer">Save</button>
          </div>
        </form>
      </Modal>
      <AddStepModal isOpen={isAddStepModalOpen} onClose={() => setIsAddStepModalOpen(false)} onAddStep={handleAddStep} />
    </>
  );
};

export default WorkflowEditModal;