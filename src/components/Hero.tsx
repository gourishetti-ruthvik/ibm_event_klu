import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Monitor, Wifi } from 'lucide-react';

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
    // Opening the Google Form registration link
    window.open('https://forms.gle/hyFFHEGrUmhwtaoN9', '_blank');
  };

  const handleViewAgenda = () => {
    // Scroll to the events section
    const eventsSection = document.getElementById('events-section');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
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
              <div className="text-2xl md:text-3xl font-normal text-blue-600 mt-2">
                Virtual Event
              </div>
            </h1>
            
            {/* Online Event Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-base font-bold mb-6 shadow-lg"
            >
              <Wifi size={20} />
              <span>🌐 LIVE VIRTUAL EVENT</span>
            </motion.div>
            
            {/* Platform Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <Monitor size={20} className="mr-2" />
                Virtual Event Platform
              </h3>
              <div className="space-y-2 text-blue-800">
                <div className="flex items-center space-x-2">
                  <span>�</span>
                  <span>Interactive virtual sessions via Zoom/Google Meet</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🔗</span>
                  <span>Virtual event links & passwords sent after registration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🌍</span>
                  <span>Join the virtual event from anywhere worldwide</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>💬</span>
                  <span>Live Q&A, chat, and virtual breakout sessions</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar size={20} />
                <span>November 3-5, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🕙</span>
                <span>10:00 AM IST</span>
              </div>
            </div>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Join us for this <strong>interactive virtual event</strong> featuring three days of quantum computing workshops, talks, and networking. 
              Connect with quantum enthusiasts, researchers, and industry experts through live virtual sessions from around the globe!
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
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleRegister}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🚀 Register for Virtual Event
              </button>
              <button 
                onClick={handleViewAgenda}
                className="bg-white hover:bg-gray-50 text-purple-600 font-semibold py-4 px-8 rounded-lg border-2 border-purple-600 transition-colors duration-300"
              >
                📅 View Virtual Event Schedule
              </button>
            </div>
            <div className="text-sm text-gray-600 max-w-md mx-auto">
              💡 <strong>Free virtual event</strong> • Join via video call with internet access
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;