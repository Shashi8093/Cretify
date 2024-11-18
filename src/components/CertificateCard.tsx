import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Button from './Button';

interface CertificateCardProps {
  id: string;
  title: string;
  issueDate: string;
  institution: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ id, title, issueDate, institution }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-1">Issued by: {institution}</p>
      <p className="text-gray-600 mb-4">Date: {issueDate}</p>
      <Link to={`/verify/${id}`}>
        <Button variant="outline">Verify Certificate</Button>
      </Link>
    </Card>
  );
};

export default CertificateCard;