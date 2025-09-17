import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Monitor, Wifi } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-4">Qiskit Fall Fest 2025 - Online Meeting</h3>
            <p className="text-gray-300 mb-4">
              Promoting accessibility of quantum computing to students and researchers through 
              interactive online meetings hosted by KL University in partnership with IBM.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Wifi size={16} />
                <span>Live Online Meeting Event</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Monitor size={16} />
                <span>Video Conference Platform</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About the Event
                </a>
              </li>
              <li>
                <a href="#agenda" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Event Agenda
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Quantum Demo
                </a>
              </li>
              <li>
                <a 
                  href="https://qiskit.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-1"
                >
                  <span>Qiskit Official</span>
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Registration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Join the Online Meeting</h3>
            <div className="space-y-4">
              <button
                onClick={() => window.open('https://forms.google.com/your-form-link', '_blank')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                📹 Register for Online Meeting
              </button>
              <div className="text-sm text-gray-400 text-center">
                💻 Join from anywhere • Video meeting links sent after registration
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span>Contact: quantum@kluniversity.in</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 KL University. Extension Event - 100 Years of Quantum Mechanics.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Powered by</span>
              <div className="flex items-center space-x-4">
                <span className="text-blue-400 font-bold">IBM Quantum</span>
                <span className="text-purple-400 font-bold">Qiskit</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;