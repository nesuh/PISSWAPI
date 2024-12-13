// src/components/FormField.tsx
import React from 'react';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, value, onChange, type = 'text' }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FormField;




// const FormField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; type?: string }> = ({ label, value, onChange, type = 'text' }) => {
//   return (
//     <div className="mb-4">
//       <label className="block text-gray-700">{label}</label>
//       <input
//         type={type}
//         value={value}
//         onChange={onChange}
//         className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//     </div>
//   );
// };

// export default FormField;
