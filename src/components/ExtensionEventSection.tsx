import React from 'react';
import { motion } from 'framer-motion';

const ExtensionEventSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Extension Event
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Celebrating 100 Years of Quantum Mechanics - A Special IBM Qiskit Fall Fest Event
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* First Extension Event Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-8 text-center">
                <div className="text-6xl font-bold text-purple-600 mb-4">100</div>
                <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                  Years of Quantum Mechanics
                </div>
                <div className="mt-6 text-sm text-gray-600">
                  <div className="font-semibold">Qiskit Fall Fest 2025</div>
                  <div className="flex items-center justify-center mt-2">
                    <span className="mr-4">Extension Event</span>
                    <span className="font-bold text-blue-600">IBM</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second Extension Event Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-8 text-center">
                <div className="text-sm font-semibold text-gray-700 mb-4">Qiskit Fall Fest 2025</div>
                <div className="text-4xl font-bold text-purple-600 mb-4">Extension Event</div>
                <div className="text-6xl font-bold text-purple-600 mb-4">100</div>
                <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                  Years of Quantum Mechanics
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="font-bold text-blue-600 text-xl">IBM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              A Historic Milestone
            </h3>
            <p className="text-gray-700 mb-6">
              Join us in commemorating the centennial of quantum mechanics, from the foundational 
              work of Heisenberg and Schrödinger to today's quantum computing revolution with IBM Qiskit.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600">1925</div>
                <div className="text-sm text-gray-600">Quantum Mechanics Born</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">2025</div>
                <div className="text-sm text-gray-600">Centennial Celebration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">∞</div>
                <div className="text-sm text-gray-600">Future Possibilities</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtensionEventSection;