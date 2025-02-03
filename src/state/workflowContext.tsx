import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the types for the workflow
interface Workflow {
  name: string;
  actions: string[];
}

// Create context
const WorkflowContext = createContext<any>(null);

// Hook to use the workflow context
export const useWorkflow = () => useContext(WorkflowContext);

// Define the type for the props of the WorkflowProvider
interface WorkflowProviderProps {
  children: ReactNode; // This ensures the provider can accept children
}

export const WorkflowProvider: React.FC<WorkflowProviderProps> = ({ children }) => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);

  const addWorkflow = (workflow: Workflow) => {
    setWorkflows([...workflows, workflow]);
  };

  return (
    <WorkflowContext.Provider value={{ workflows, addWorkflow }}>
      {children}
    </WorkflowContext.Provider>
  );
};
