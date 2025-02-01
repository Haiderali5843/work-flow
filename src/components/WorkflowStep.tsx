import React from 'react';
interface WorkflowStepProps {
  step: string;
}
const WorkflowStep: React.FC<WorkflowStepProps> = ({ step }) => {
  return (
    <>
      <div className="my-2 p-4 bg-gray-100 rounded-lg shadow-sm">
        {step}
      </div>
      <div>
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16.5L12 12" />
          <line x1="12" y1="8" x2="12" y2="12" />
        </svg>
      </div></>

  );
};

export default WorkflowStep;
