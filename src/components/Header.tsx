import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">CertVerify</Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-primary">Dashboard</Link>
                <button onClick={logout} className="text-gray-700 hover:text-primary">Logout</button>
              </>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-primary">Login</Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;