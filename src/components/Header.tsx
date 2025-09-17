import React from 'react';
import { motion } from 'framer-motion';
import ibmLogo from '../../assets/images/ibm.png';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-gray-900">
                Qiskit Fall Fest 2025
              </h1>
            </div>
          </motion.div>

          {/* KL University Branding */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-gray-600">KL University</span>
            <img src={ibmLogo} alt="IBM Logo" className="h-8" />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;