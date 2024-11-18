import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { verifyCertificate } from '../services/api';

interface CertificateDetails {
  id: string;
  title: string;
  issueDate: string;
  institution: string;
  studentName: string;
  verified: boolean;
}

const CertificateVerification: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [certificate, setCertificate] = useState<CertificateDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const data = await verifyCertificate(id!);
        setCertificate(data);
      } catch (err) {
        setError('Failed to verify certificate. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-600">{error}</div>;
  }

  if (!certificate) {
    return <div className="text-center mt-8">Certificate not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Certificate Verification</h1>
        <div className="mb-6">
          <p className="text-lg font-semibold">Status: 
            <span className={certificate.verified ? 'text-green-600' : 'text-red-600'}>
              {certificate.verified ? ' Verified' : ' Not Verified'}
            </span>
          </p>
        </div>
        <div className="space-y-4">
          <p><strong>Certificate ID:</strong> {certificate.id}</p>
          <p><strong>Title:</strong> {certificate.title}</p>
          <p><strong>Student Name:</strong> {certificate.studentName}</p>
          <p><strong>Issuing Institution:</strong> {certificate.institution}</p>
          <p><strong>Issue Date:</strong> {certificate.issueDate}</p>
        </div>
        <div className="mt-8">
          <Button onClick={() => window.print()}>Print Certificate</Button>
        </div>
      </Card>
    </div>
  );
};

export default CertificateVerification;