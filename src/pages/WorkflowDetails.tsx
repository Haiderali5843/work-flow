import React from 'react';

const WorkflowDetails: React.FC = () => {
  const actions = [
    { type: 'Click', details: 'Click on screen' },
    { type: 'Swipe', details: 'Swipe up' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Workflow Details</h1>
      {actions.map((action, index) => (
        <div key={index} className="p-4 border rounded-md">
          <p>Action: {action.type}</p>
          <p>Details: {action.details}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkflowDetails;
