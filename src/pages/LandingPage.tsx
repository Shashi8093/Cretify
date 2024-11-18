import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary mb-4">Welcome to CertVerify</h1>
        <p className="text-xl text-gray-600 mb-8">Secure and Transparent Certificate Verification System</p>
        <Link to="/login">
          <Button variant="primary" className="text-lg px-8 py-3">Get Started</Button>
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-primary mb-4">For Students</h2>
          <p className="text-gray-600">Access and verify your certificates with ease. Your achievements, securely stored and easily shareable.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-primary mb-4">For Universities</h2>
          <p className="text-gray-600">Issue tamper-proof certificates and manage student records efficiently on our blockchain-based platform.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-primary mb-4">For Employers</h2>
          <p className="text-gray-600">Instantly verify the authenticity of certificates, streamlining your recruitment process.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;