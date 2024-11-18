import React, { useEffect, useState } from 'react';
import CertificateCard from '../components/CertificateCard';
import { useAuth } from '../hooks/useAuth';
import { getCertificates } from '../services/api';

interface Certificate {
  id: string;
  title: string;
  issueDate: string;
  institution: string;
}

const StudentDashboard: React.FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchCertificates = async () => {
      if (user) {
        try {
          const data = await getCertificates(user.id);
          setCertificates(data);
        } catch (error) {
          console.error('Failed to fetch certificates:', error);
        }
      }
    };

    fetchCertificates();
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Certificates</h1>
      {certificates.length === 0 ? (
        <p className="text-gray-600">You don't have any certificates yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              id={cert.id}
              title={cert.title}
              issueDate={cert.issueDate}
              institution={cert.institution}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;