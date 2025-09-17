import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Hero: React.FC = () => {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Event start date: November 3, 2025
  const eventDate = new Date('2025-11-03T10:00:00+05:30').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const handleRegister = () => {
    // This will be updated with the actual Google form link
    window.open('https://forms.google.com/your-form-link', '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Extension Event Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              Extension Event
            </h2>
            
            {/* Main Event Visual */}
            <div className="relative mb-8">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="inline-block"
              >
                <div className="relative">
                  <div className="text-8xl md:text-9xl font-bold text-purple-400 opacity-20 select-none">
                    100
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Years of Quantum Mechanics
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Qiskit Fall Fest 2025
            </h1>
            <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin size={20} />
                <span>KL University</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={20} />
                <span>November 3-5, 2025</span>
              </div>
            </div>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Join talks, workshops, and community sessions exploring quantum algorithms, 
              optimization techniques, and the future of quantum computing.
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Event starts in</h3>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { value: countdown.days, label: 'Days' },
                { value: countdown.hours, label: 'Hours' },
                { value: countdown.minutes, label: 'Minutes' },
                { value: countdown.seconds, label: 'Seconds' }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-x-4"
          >
            <button
              onClick={handleRegister}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Register Now
            </button>
            <button className="bg-white hover:bg-gray-50 text-purple-600 font-semibold py-3 px-8 rounded-lg border-2 border-purple-600 transition-colors duration-300">
              View Agenda
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;