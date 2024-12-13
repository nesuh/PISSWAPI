// src/components/ReportForm.tsx
import React, { useState } from 'react';
import FormField from './FormField';
import Button from './Button';
import axios from 'axios';

const ReportForm: React.FC = () => {
  const [reportName, setReportName] = useState('');
  const [generatedAt, setGeneratedAt] = useState('');
  const [status, setStatus] = useState('PENDING');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
   await axios.post('http://localhost:4000/slack/send-message', {
        reportName,
        generatedAt,
        status,
        errorMessage,
      });
      alert('Report Sent Successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send the report!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Send Report to Slack</h2>

      <FormField label="Report Name" value={reportName} onChange={(e) => setReportName(e.target.value)} />
      <FormField
        label="Generated At"
        value={generatedAt}
        onChange={(e) => setGeneratedAt(e.target.value)}
        type="datetime-local"
      />
      <FormField label="Error Message" value={errorMessage} onChange={(e) => setErrorMessage(e.target.value)} />

      <div className="mb-4">
        <label className="block text-gray-700">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="PENDING">Pending</option>
          <option value="COMPLETED">Completed</option>
          <option value="FAILED">Failed</option>
        </select>
      </div>

      {/* Submit button triggers form submission */}
      <Button label="Send Report" isLoading={isLoading} />
    </form>
  );
};

export default ReportForm;



// const Button: React.FC<{ label: string; onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; isLoading: boolean }> = ({ label, onClick, isLoading }) => {
//   return (
//     <button
//       type="submit"
//       onClick={onClick}
//       disabled={isLoading}
//       className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
//     >
//       {isLoading ? 'Sending...' : label}
//     </button>
//   );
// };

// export default Button;

