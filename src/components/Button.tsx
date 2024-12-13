// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, isLoading }) => {
  return (
    <button
      type="submit"
      className={`w-full p-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none ${
        isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={isLoading}
    >
      {isLoading ? 'Sending...' : label}
    </button>
  );
};

export default Button;


// const Button: React.FC<{ label: string; onClick: () => void; isLoading: boolean }> = ({ label, onClick, isLoading }) => {
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
