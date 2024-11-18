import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold">CertVerify</h3>
            <p className="mt-2 text-sm">Secure Certificate Verification System</p>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} CertVerify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;