import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { issueCertificate } from '../services/api';

const FacultyDashboard: React.FC = () => {
  const [studentId, setStudentId] = useState('');
  const [certificateTitle, setCertificateTitle] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await issueCertificate(studentId, certificateTitle, issueDate);
      setSuccessMessage('Certificate issued successfully!');
      setErrorMessage('');
      // Reset form
      setStudentId('');
      setCertificateTitle('');
      setIssueDate('');
    } catch (error) {
      setErrorMessage('Failed to issue certificate. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Faculty Dashboard</h1>
      <Card className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Issue New Certificate</h2>
        {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">Student ID</label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="certificateTitle" className="block text-sm font-medium text-gray-700">Certificate Title</label>
            <input
              type="text"
              id="certificateTitle"
              value={certificateTitle}
              onChange={(e) => setCertificateTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700">Issue Date</label>
            <input
              type="date"
              id="issueDate"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <Button type="submit">Issue Certificate</Button>
        </form>
      </Card>
    </div>
  );
};

export default FacultyDashboard;