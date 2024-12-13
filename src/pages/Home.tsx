// src/pages/Home.tsx
import React from 'react';
import ReportForm from '../components/ReportForm';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <ReportForm />
    </div>
  );
};

export default Home;
