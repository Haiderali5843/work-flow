import { useState } from 'react';
import Modal from '../components/Modal';
import WorkflowEditModal from '../components/WorkflowEditModal';

interface ActiveDays {
  [key: string]: boolean;
}

interface WorkflowStep {
  id: number;
  type: string;
  details: string;
}

export default function Workflow() {
  const [isWorkflowModalOpen, setIsWorkflowModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false); // Added state for edit modal
  const [isAddStepsModalOpen, setIsAddStepsModalOpen] = useState<boolean>(false); // State for 
  const [workflowName, setWorkflowName] = useState<string>('');
  const [activeHours, setActiveHours] = useState<number[]>([0, 24]);
  const [activeDays, setActiveDays] = useState<ActiveDays>({
    Mo: false,
    Tu: false,
    We: false,
    Th: false,
    Fr: false,
    Sa: false,
    Su: false,
  });
  const [isActive, setIsActive] = useState<boolean>(false);
  const workflowSteps: WorkflowStep[] = [
    { id: 1, type: 'Start', details: 'Initiate the workflow' },
    { id: 2, type: 'Process', details: 'Process the data' },
    { id: 3, type: 'Review', details: 'Review the results' },
    { id: 4, type: 'Complete', details: 'Complete the workflow' },
    { id: 5, type: 'Complete', details: 'Complete the workflow' },
    { id: 6, type: 'Complete', details: 'Complete the workflow' },
    { id: 7, type: 'Complete', details: 'Complete the workflow' },
    { id: 8, type: 'Complete', details: 'Complete the workflow' },
    { id: 9, type: 'Complete', details: 'Complete the workflow' },
  ];
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState<boolean>(false);

  const mockWorkflows = [
    'Workflow 1',
    'Workflow 2',
    'Workflow 3',
    'Workflow 4',
    'Workflow 5',
    'Workflow 6',
    'Workflow 7',
    'Workflow 8',
    'Workflow 9',
    'Workflow 10',
  ];

  const handleSaveWorkflow = () => {
    try {
      if (!workflowName) {
        alert("Workflow Name is required.");
        return;
      }
  
      if (activeHours[0] === activeHours[1]) {
        alert("Active Hours must be different.");
        return;
      }
  
      if (!Object.values(activeDays).some(day => day)) {
        alert("At least one Active Day must be selected.");
        return;
      }

      console.log(`Saving workflow: ${workflowName}, Active Hours: ${activeHours}, Active Days: ${JSON.stringify(activeDays)}, Active: ${isActive}`);
      
      // Close the modal
      setIsWorkflowModalOpen(false);
      
      // Reset the form
      setWorkflowName('');
      setActiveHours([0, 24]);
      setActiveDays({
        Mo: false,
        Tu: false,
        We: false,
        Th: false,
        Fr: false,
        Sa: false,
        Su: false,
      });
      setIsActive(false);
    } catch (error) {
      console.error("Error saving workflow:", error);
      alert("An error occurred while saving the workflow. Please try again."); // Improved error handling
    }
  };


  return (
    <>
      <div className='flex justify-start items-center'>
        <button
          className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
          onClick={() => setIsWorkflowModalOpen(true)}
        >
          Create new Workflow
        </button>
      </div>

      <div className='container mx-auto'>
        <div className='grid grid-cols-4 h-full '>
          <div className='md:col-span-1 col-span-4 shadow-md h-full p-4'>
            <h2 className="text-lg font-semibold bg-[#F6F6F6] pt-1 pb-1 mb-4">All Workflows</h2>
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex flex-col space-y-2 scrollable" style={{ maxHeight: '300px', overflowY: 'auto' }} >
              {mockWorkflows.filter(workflow => workflow.toLowerCase().includes(searchQuery.toLowerCase())).map((name, index) => (
                <button
                  key={index}
                  className="bg-gray-200 text-black hover:bg-[#F3642C] hover:text-white transition-colors duration-300 p-2 rounded cursor-pointer"
                  onClick={() => {
                    setSelectedWorkflow(name);
                    setIsDetailsModalOpen(true);
                  }}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
          <div className='md:col-span-2 col-span-4 shadow-md h-full p-4'>
            <h2 className="text-lg font-semibold mb-2 bg-[#F6F6F6] pt-1 pb-1">Workflow Steps</h2>
            <div className='scrollable' style={{ maxHeight: '340px', overflowY: 'auto' }}>
              <ul>
                {workflowSteps.length > 0 ? (
                  workflowSteps.map((step) => (
                    <li key={step.id} className="flex items-center justify-between bg-gray-200 p-2 rounded my-2">
                      <span>{step.type}: {step.details}</span>
                      <div className="flex items-center space-x-2">
                        <button type="button" onClick={() => { }} className="text-black hover:text-[#F3642C] transition-colors duration-300 cursor-pointer"><i className="fa fa-arrow-up"></i></button>
                        <button type="button" onClick={() => { }} className="text-black hover:text-[#F3642C] transition-colors duration-300 cursor-pointer"><i className="fa fa-arrow-down"></i></button>
                        <button type="button" onClick={() => { }} className="text-red-400 hover:text-[#F3642C] flex items-center transition-colors duration-300 cursor-pointer">
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>No steps added yet.</p>
                )}
              </ul>
            </div>
          </div>
          <div className='md:col-span-1 col-span-4 shadow-md h-full p-4'>
            <h2 className="text-lg font-semibold mb-4 bg-[#F6F6F6] pt-1 pb-1">Add Options</h2>
            <div className="scrollable max-h-[340px] overflow-y-auto">
              <button
                className="text-left text-gray-800 w-full px-4 py-2 bg-gray-200 hover:text-white hover:bg-[#F3642C] transition-colors duration-300 rounded cursor-pointer mb-3"
                onClick={() => console.log('Click on Screen (word or Image)')}
              >
                Click on Screen (word or Image)
              </button>
              <button
                className="text-left text-gray-800 w-full px-4 py-2 bg-gray-200 hover:text-white hover:bg-[#F3642C] transition-colors duration-300 rounded cursor-pointer mb-3"
                onClick={() => console.log('Type Input (XYZ)')}
              >
                Type Input (XYZ)
              </button>
              <button
                className="text-left text-gray-800 w-full px-4 py-2 bg-gray-200 hover:text-white hover:bg-[#F3642C] transition-colors duration-300 rounded cursor-pointer mb-3"
                onClick={() => console.log('Swipe on Screen (down/up/left/right)')}
              >
                Swipe on Screen (down/up/left/right)
              </button>
              <button
                className="text-left text-gray-800 w-full px-4 py-2 bg-gray-200 hover:text-white hover:bg-[#F3642C] transition-colors duration-300 rounded cursor-pointer mb-3"
                onClick={() => console.log('Swipe (down/up/left/right) till (word) or (sentence)')}
              >
                Swipe (down/up/left/right) till (word) or (sentence)
              </button>
              <button
                className="text-left text-gray-800 w-full px-4 py-2 bg-gray-200 hover:text-white hover:bg-[#F3642C] transition-colors duration-300 rounded cursor-pointer mb-3"
                onClick={() => console.log('Swipe (down/up/left/right) till (Image)')}
              >
                Swipe (down/up/left/right) till (Image)
              </button>
              <button
                className="text-left text-gray-800 w-full px-4 py-2 bg-gray-200 hover:text-white hover:bg-[#F3642C] transition-colors duration-300 rounded cursor-pointer mb-3"
                onClick={() => console.log('Set time delay (Seconds)')}
              >
                Set time delay (Seconds)
              </button>
            </div>
          </div>
        </div>

        <Modal isOpen={isDetailsModalOpen} onClose={() => setIsDetailsModalOpen(false)} title="Workflow Details">
        <div className="p-4">
          <h3 className="text-lg font-semibold">{selectedWorkflow}</h3>
          <p>Details about {selectedWorkflow} will be displayed here.</p>
          <div className="mt-4 flex justify-between">
          <button
              className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
              onClick={() => {
                setIsEditModalOpen(true);
              }}
            >
              Edit
            </button>
            <button
              className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
              onClick={() => {
                setIsDetailsModalOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Edit Workflow">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Editing {selectedWorkflow}</h3>
          <div className="mt-4 flex justify-between">
            <button
              className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
              onClick={() => {
                console.log("Changes saved!");
                setIsEditModalOpen(false);
              }}
            >
              Save
            </button>
            <button
              className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
              onClick={() => {
                setIsEditModalOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>

        <WorkflowEditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          workflowName={workflowName}
          activeHours={activeHours}
          activeDays={activeDays}
          onSave={handleSaveWorkflow}
        />

        {/* Main Workflow Modal */}
        <Modal isOpen={isWorkflowModalOpen} onClose={() => setIsWorkflowModalOpen(false)} title="Create New Workflow">
          <div className="p-4">
            <input
              type="text"
              placeholder="Workflow Name"
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
              value={workflowName}
              onChange={(e) => setWorkflowName(e.target.value)} required
            />
            <div className="mb-4">
              <label className="block mb-2">Active Hours:</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="0"
                  max="24"
                  value={activeHours[0]}
                  onChange={(e) => setActiveHours([Number(e.target.value), activeHours[1]])}
                  className="w-full bg-white accent-[#F3642C]" required
                />
                <span className="ml-2">{activeHours[0]}:00</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Active Days:</h3>
              <div className='flex flex-row ml-3 mr-3'>
                {Object.keys(activeDays).map((day) => (
                  <label key={day} className="ml-3 mr-3">
                    <input
                      type="checkbox"
                      className='accent-[#F3642C]'
                      checked={activeDays[day]}
                      onChange={() => setActiveDays({ ...activeDays, [day]: !activeDays[day] })} required
                    />
                    {day}
                  </label>
                ))}
              </div>
            </div>
            <div className='flex justify-between'>
              <input
                type="button"
                value="Add Steps"
                className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
                onClick={() => setIsAddStepsModalOpen(true)} required
              />
              {/* Save Workflow Button */}
              <button
                className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
                onClick={handleSaveWorkflow}
              >
                Save Workflow
              </button>
            </div>
          </div>
        </Modal>

        {/* Add Steps Modal */}
        <Modal isOpen={isAddStepsModalOpen} onClose={() => setIsAddStepsModalOpen(false)} title="Add Steps">
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

            <div className="mt-4 flex justify-between">
              <button
                className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mr-2 cursor-pointer"
                onClick={() => {
                  console.log("Saved!");
                  setIsAddStepsModalOpen(false);
                }}
              >
                Save
              </button>
              <button
                className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded cursor-pointer"
                onClick={() => setIsAddStepsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
