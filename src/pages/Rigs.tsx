import React, { useState } from 'react';
import RIGItem from '../components/RIGItem';
import Modal from '../components/Modal';
import AddWorkflowModal from '../components/AddWorkflowModal';
import SwitchPhoneModal from '../components/SwitchPhoneModal';

const Rigs: React.FC = () => {
  const [isRIGModalOpen, setIsRIGModalOpen] = useState(false);
  const [isWorkflowModalOpen, setIsWorkflowModalOpen] = useState(false);
  const [isRIGDetailsModalOpen, setIsRIGDetailsModalOpen] = useState(false);
  const [isAddWorkflowModalOpen, setIsAddWorkflowModalOpen] = useState(false);
  const [isSwitchPhoneModalOpen, setIsSwitchPhoneModalOpen] = useState(false);
  const [isTimeDelayModalOpen, setIsTimeDelayModalOpen] = useState(false);
  const [timeDelay, setTimeDelay] = useState<number | ''>('');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRIG, setSelectedRIG] = useState<{ id: number; name: string; description: string; phoneNumber: string; workflowAssignment: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isListVisible, setIsListVisible] = useState(true);
  const [rigName, setRigName] = useState('');
  const [rigDescription, setRigDescription] = useState('');
  const [rigPhoneNumber, setRigPhoneNumber] = useState('');
  const [rigWorkflow, setRigWorkflow] = useState('');
  const [selectedWorkflow, setSelectedWorkflow] = useState('');

  const rigs = [
    { id: 1, name: "Manuel's RIG Nr. 1", description: "Description for RIG Nr. 1", phoneNumber: "3", workflowAssignment: "Workflow 1" },
    { id: 2, name: "RIG Nr. 2", description: "Description for RIG Nr. 2", phoneNumber: "4", workflowAssignment: "Workflow 2" },
    { id: 3, name: "RIG Nr. 3", description: "Description for RIG Nr. 3", phoneNumber: "1", workflowAssignment: "Workflow 3" },
    { id: 4, name: "RIG Nr. 4", description: "Description for RIG Nr. 4", phoneNumber: "2", workflowAssignment: "Workflow 4" },
    { id: 5, name: "RIG Nr. 5", description: "Description for RIG Nr. 5", phoneNumber: "3", workflowAssignment: "Workflow 5" },
    { id: 6, name: "RIG Nr. 6", description: "Description for RIG Nr. 6", phoneNumber: "4", workflowAssignment: "Workflow 6" },
    { id: 7, name: "RIG Nr. 7", description: "Description for RIG Nr. 7", phoneNumber: "1", workflowAssignment: "Workflow 7" },
  ];

  const workflows = [
    'Select One',
    'Workflow 1',
    'Workflow 2',
    'Workflow 3',
    'Workflow 4',
    'Workflow 5',
    'Workflow 6',
  ];

  const filteredRigs = rigs.filter(rig =>
    rig.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [workflowSteps, setWorkflowSteps] = useState([
    { id: 1, step: 'Set Work Time' },
    { id: 2, step: 'Workflow 1' },
    { id: 3, step: 'Time delay 3600 seconds' },
    { id: 4, step: 'Switch to phone Nr. 2' },
    { id: 5, step: 'Workflow 4' },
    { id: 6, step: 'Check Equipment Status' },
    { id: 7, step: 'Notify Team' },
    { id: 8, step: 'Prepare for Operation' },
    { id: 9, step: 'Conduct Safety Check' },
    { id: 10, step: 'Start Operation' },
    { id: 11, step: 'Monitor Performance' },
    { id: 12, step: 'End Operation' },
  ]);

  const handleRIGClick = (id: number) => {
    const selectedRIG = rigs.find(rig => rig.id === id);
    setSelectedRIG(selectedRIG || null);
    setIsRIGDetailsModalOpen(true);
    setIsEditing(false);
  };

  const handleSaveRIG = () => {
    console.log('RIG Name:', rigName);
    console.log('RIG Description:', rigDescription);
    console.log('RIG Phone Number:', rigPhoneNumber);
    console.log('RIG Workflow:', rigWorkflow);
    setIsRIGModalOpen(false);
  };

  const handleEditRIG = () => {
    setIsEditing(true);
    setRigName(selectedRIG?.name || '');
    setRigDescription(selectedRIG?.description || '');
    setRigPhoneNumber(selectedRIG?.phoneNumber || '');
    setRigWorkflow(selectedRIG?.workflowAssignment || '');
  };

  const handleDeleteRIG = () => {

  };

  const handleSaveEditRIG = () => {
    if (selectedRIG) {
      selectedRIG.name = rigName;
      selectedRIG.description = rigDescription;
      selectedRIG.phoneNumber = rigPhoneNumber;
      selectedRIG.workflowAssignment = rigWorkflow;
      setSelectedRIG({ ...selectedRIG });
    }
    setIsEditing(false);
  };

  const handleWorkflowChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWorkflow(event.target.value);
  };

  const handleSwitchPhoneSubmit = (existingNumber: string, newNumber: string) => {
    console.log('Existing Number:', existingNumber);
    console.log('New Number:', newNumber);
    setIsSwitchPhoneModalOpen(false);
  };

  const handleDeleteStep = (id: number) => {
    setWorkflowSteps(prevSteps => prevSteps.filter(step => step.id !== id));
  };

  const handleMoveStepUp = (id: number) => {
    setWorkflowSteps(prevSteps => {
      const index = prevSteps.findIndex(step => step.id === id);
      if (index > 0) {
        const newSteps = [...prevSteps];
        [newSteps[index - 1], newSteps[index]] = [newSteps[index], newSteps[index - 1]];
        return newSteps;
      }
      return prevSteps;
    });
  };

  const handleMoveStepDown = (id: number) => {
    setWorkflowSteps(prevSteps => {
      const index = prevSteps.findIndex(step => step.id === id);
      if (index < prevSteps.length - 1) {
        const newSteps = [...prevSteps];
        [newSteps[index], newSteps[index + 1]] = [newSteps[index + 1], newSteps[index]];
        return newSteps;
      }
      return prevSteps;
    });
  };

  const handleTimeDelaySubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Time Delay:', timeDelay);
    setIsTimeDelayModalOpen(false);
  };

  return (
    <>
      <div className='flex justify-start items-center'>
        <button
          className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
          onClick={() => {
            setRigName('');
            setRigDescription('');
            setRigPhoneNumber('');
            setRigWorkflow('');
            setIsRIGModalOpen(true);
          }}
        >
          Create new RIG
        </button>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <div className='md:col-span-1 col-span-4 shadow-md rounded-lg h-full p-4'>
          <div className='flex justify-between pt-2 pb-1'>
            <h2 className="text-lg font-semibold text-left mt-1 ml-3">All Rigs</h2>
            <button
              className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] cursor-pointer transition-colors duration-300 px-2 py-[2px] rounded mr-3"
              onClick={() => setIsListVisible(!isListVisible)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          {isListVisible && (
            <div className="w-full">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search RIGs"
                  className="p-2 border rounded w-full pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fa fa-search absolute top-3 left-3 text-gray-500"></i>
              </div>
              <div
                className="flex flex-col space-y-2 scrollable"
                style={{
                  maxHeight: '300px',
                  overflowY: 'auto', // Ensures vertical scrollbar appears
                }}
              >
                {filteredRigs.map(rig => (
                  <RIGItem key={rig.id} id={rig.id} name={rig.name} onClick={handleRIGClick} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className='md:col-span-2 col-span-4 h-full'>
          <div className='col-span-2 h-auto p-4 rounded-lg shadow-md'>
            <h2 className='text-lg font-semibold mb-4 bg-[#F6F6F6] pt-2 pb-2'>Workflow Configuration</h2>
            <div className='scrollable mb-4' style={{ maxHeight: '270px', overflowY: 'auto' }}>
              {workflowSteps.map((step, index) => (
                <div key={step.id} className="flex items-center justify-between mb-2 p-2 rounded bg-gray-200">
                  <p className="text-gray-700">{step.step}</p>
                  <div className="flex items-center">
                    <button onClick={() => handleMoveStepUp(step.id)} disabled={index === 0} className="text-black hover:text-[#F3642C] transition-colors duration-300 cursor-pointer mr-2">
                      <i className="fa fa-arrow-up"></i>
                    </button>
                    <button onClick={() => handleMoveStepDown(step.id)} disabled={index === workflowSteps.length - 1} className="mr-2 text-black hover:text-[#F3642C] transition-colors duration-300 cursor-pointer">
                      <i className="fa fa-arrow-down"></i>
                    </button>
                    <button onClick={() => handleDeleteStep(step.id)} className="text-red-400 cursor-pointer">
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              className='mt-4 hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded cursor-pointer'
              onClick={() => setIsWorkflowModalOpen(true)}
            >
              Add a Step
            </button>
          </div>
        </div>
        <div className='md:col-span-1 col-span-4 shadow-md rounded-lg'>
          <div className='bg-white p-4 rounded-lg'>
            <h2 className='text-lg font-semibold mb-4 bg-[#F6F6F6] pt-2 pb-2'>Add Options</h2>
            <button
              className="text-left text-gray-800 w-full px-4 py-2 bg-gray-200 hover:text-white hover:bg-[#F3642C] transition-colors duration-300 rounded cursor-pointer mb-3"
              onClick={() => setIsAddWorkflowModalOpen(true)}
            >
              Add Workflow
            </button>
            <button
              className="text-left text-gray-800 w-full px-4 py-2 bg-gray-200 hover:text-white hover:bg-[#F3642C] transition-colors duration-300 rounded cursor-pointer mb-3"
              onClick={() => setIsTimeDelayModalOpen(true)}
            >
              Set Time Delay
            </button>
            <button
              className="text-left text-gray-800 w-full px-4 py-2 bg-gray-200 hover:text-white hover:bg-[#F3642C] transition-colors duration-300 rounded cursor-pointer mb-3"
              onClick={() => setIsSwitchPhoneModalOpen(true)}
            >
              Switch to Phone Nr. (x)
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isRIGModalOpen} onClose={() => setIsRIGModalOpen(false)} title="Create new RIG">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">RIG Name</label>
            <input
              type="text"
              placeholder="Enter RIG name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={rigName}
              onChange={(e) => setRigName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">RIG Description</label>
            <input
              type="text"
              placeholder="Enter RIG description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={rigDescription}
              onChange={(e) => setRigDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Number of Phones</label>
            <input
              type="number"
              placeholder="Enter number of phones"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={rigPhoneNumber}
              onChange={(e) => setRigPhoneNumber(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
              type="button"
              onClick={handleSaveRIG}
            >
              Save
            </button>
            <button
              className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
              type="button"
              onClick={() => setIsRIGModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={isRIGDetailsModalOpen} onClose={() => setIsRIGDetailsModalOpen(false)} title="RIG Details">
        {selectedRIG && !isEditing && (
          <div>
            <p><strong>ID:</strong> {selectedRIG.id}</p>
            <p><strong>Name:</strong> {selectedRIG.name}</p>
            <p><strong>Description:</strong> {selectedRIG.description}</p>
            <p><strong>Number of Phones:</strong> {selectedRIG.phoneNumber}</p>
            <div className="flex items-center justify-between mt-4">
              <button
                className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
                type="button"
                onClick={handleEditRIG}
              >
                Edit
              </button>
              <button
                className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
                type="button"
                onClick={handleDeleteRIG}
              >
                Delete
              </button>
            </div>
          </div>
        )}
        {selectedRIG && isEditing && (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">RIG Name</label>
              <input
                type="text"
                placeholder="Enter RIG name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={rigName}
                onChange={(e) => setRigName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">RIG Description</label>
              <input
                type="text"
                placeholder="Enter RIG description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={rigDescription}
                onChange={(e) => setRigDescription(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Number of Phones</label>
              <input
                type="number"
                placeholder="Enter number of phones"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={rigPhoneNumber}
                onChange={(e) => setRigPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
                type="button"
                onClick={handleSaveEditRIG}
              >
                Save
              </button>
              <button
                className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
                type="button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </Modal>

      <AddWorkflowModal
        isOpen={isAddWorkflowModalOpen}
        onClose={() => setIsAddWorkflowModalOpen(false)}
        workflows={workflows}
        selectedWorkflow={selectedWorkflow}
        onWorkflowChange={handleWorkflowChange}
      />

      <SwitchPhoneModal
        isOpen={isSwitchPhoneModalOpen}
        onClose={() => setIsSwitchPhoneModalOpen(false)}
        onSubmit={handleSwitchPhoneSubmit}
      />

      <Modal isOpen={isWorkflowModalOpen} onClose={() => setIsWorkflowModalOpen(false)} title="Add Workflow Step">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Workflow Step</label>
            <input
              type="text"
              placeholder="Enter workflow step"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer" type="button">
              Save
            </button>
            <button
              className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
              type="button"
              onClick={() => setIsWorkflowModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={isTimeDelayModalOpen} onClose={() => setIsTimeDelayModalOpen(false)} title="Set Time Delay">
        <form onSubmit={handleTimeDelaySubmit}>
          <div className="mb-4">
            <label htmlFor="timeDelay" className="block text-sm font-medium text-gray-700">Time Delay (seconds):</label>
            <input
              type="number"
              id="timeDelay"
              value={timeDelay}
              onChange={(e) => setTimeDelay(e.target.value ? Number(e.target.value) : '')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsTimeDelayModalOpen(false)}
              className="hover:text-white hover:bg-[#F3642C] border border-[#F3642C] bg-white text-[#F3642C] px-4 py-2 transition-colors duration-300 rounded mb-4 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Rigs;