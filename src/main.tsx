import ReactDOM from 'react-dom/client';
import App from './App';
import { WorkflowProvider } from './state/workflowContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WorkflowProvider>
    <App/>
  </WorkflowProvider>
);
