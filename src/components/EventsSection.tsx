import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, MapPin } from 'lucide-react';

interface Session {
  time: string;
  title: string;
  speaker: string;
  type: 'inaugural' | 'workshop' | 'talk' | 'valedictory';
}

interface EventDay {
  date: string;
  sessions: Session[];
}

const EventsSection: React.FC = () => {
  const eventData: EventDay[] = [
    {
      date: "November 3, 2025",
      sessions: [
        {
          time: "10:00 AM IST",
          title: "Inaugural Address",
          speaker: "Dr. L. Venkata Subramaniam, IBM Quantum India Lead",
          type: "inaugural"
        },
        {
          time: "10:15 AM – 1:00 PM IST",
          title: "Shor's Algorithm",
          speaker: "Dr. Jayakumar Vaithiyashankar, CEO of Anuthantra",
          type: "workshop"
        },
        {
          time: "2:00 PM – 5:00 PM IST",
          title: "Grover's Algorithm",
          speaker: "IBM Guest Speaker",
          type: "workshop"
        }
      ]
    },
    {
      date: "November 4, 2025",
      sessions: [
        {
          time: "10:00 AM – 1:00 PM IST",
          title: "Deutsch–Jozsa Algorithm",
          speaker: "Karthiganesh Durai, Founder & CEO of KwantumG Research Labs Pvt Ltd",
          type: "workshop"
        },
        {
          time: "2:00 PM – 5:00 PM IST",
          title: "Bernstein–Vazirani Algorithm",
          speaker: "IBM Guest Speaker",
          type: "workshop"
        }
      ]
    },
    {
      date: "November 5, 2025",
      sessions: [
        {
          time: "10:00 AM – 1:00 PM IST",
          title: "QAOA (Quantum Approximate Optimization Algorithm)",
          speaker: "IBM Guest Speaker",
          type: "workshop"
        },
        {
          time: "2:00 PM – 5:00 PM IST",
          title: "VQE (Variational Quantum Eigensolver)",
          speaker: "Dr. Raghavendra V, SRM University",
          type: "workshop"
        },
        {
          time: "5:00 PM – 5:15 PM IST",
          title: "Valedictory Function",
          speaker: "Dr. L. Venkata Subramaniam, IBM Quantum India Lead",
          type: "valedictory"
        }
      ]
    }
  ];

  const getSessionIcon = (type: string) => {
    switch (type) {
      case 'inaugural':
        return '🎯';
      case 'workshop':
        return '🔬';
      case 'talk':
        return '💡';
      case 'valedictory':
        return '🏆';
      default:
        return '📅';
    }
  };

  const getSessionColor = (type: string) => {
    switch (type) {
      case 'inaugural':
        return 'bg-yellow-100 border-yellow-300';
      case 'workshop':
        return 'bg-purple-100 border-purple-300';
      case 'talk':
        return 'bg-blue-100 border-blue-300';
      case 'valedictory':
        return 'bg-green-100 border-green-300';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Agenda</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three days of intensive quantum computing workshops, talks, and networking
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4 text-gray-500">
            <MapPin size={20} />
            <span>KL University • November 3-5, 2025</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {eventData.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
              className="relative"
            >
              {/* Day Header */}
              <div className="flex items-center mb-8">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                  {dayIndex + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Day {dayIndex + 1}</h3>
                  <p className="text-gray-600">{day.date}</p>
                </div>
              </div>

              {/* Sessions */}
              <div className="ml-16 space-y-6">
                {day.sessions.map((session, sessionIndex) => (
                  <motion.div
                    key={sessionIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sessionIndex * 0.1 }}
                    className={`border-l-4 border-purple-300 bg-white rounded-lg shadow-lg p-6 ${getSessionColor(session.type)}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{getSessionIcon(session.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Clock size={16} />
                            <span className="font-medium">{session.time}</span>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {session.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <User size={16} />
                          <span>{session.speaker}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Us?</h3>
            <p className="text-lg mb-6">
              Don't miss this opportunity to learn quantum computing from industry experts
            </p>
            <button 
              onClick={() => window.open('https://forms.google.com/your-form-link', '_blank')}
              className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Register Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;