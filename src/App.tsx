import './App.css';
import extensionEvent1 from './assets/images/extension-event-1.png';
import klUniversityLogo from './assets/images/logo.png';

function App() {
  return (
    <div className="App">
      {/* Online Meeting Banner */}
      <div style={{
        backgroundColor: '#1e40af',
        color: 'white',
        padding: '0.75rem',
        textAlign: 'center' as const,
        fontSize: '0.875rem',
        fontWeight: '600'
      }}>
        🌐 VIRTUAL EVENT • Join via video call from anywhere • Event access links sent after registration
      </div>
      
      <header style={{ 
        backgroundColor: '#fff', 
        padding: '1rem', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
            Qiskit Fall Fest 2025
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img 
              src={klUniversityLogo} 
              alt="KL University Logo" 
              style={{ height: '40px', width: 'auto' }}
            />
            <span style={{ color: '#0066cc', fontWeight: 'bold', fontSize: '1.5rem' }}>IBM</span>
          </div>
        </div>
      </header>

      <main>
        <section style={{ 
          background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
          padding: '4rem 1rem',
          textAlign: 'center' as const
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#666', 
                textTransform: 'uppercase' as const,
                marginBottom: '0.5rem' 
              }}>
                Extension Event
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <div style={{ 
                    fontSize: '6rem', 
                    fontWeight: 'bold', 
                    color: 'rgba(168, 85, 247, 0.2)',
                    userSelect: 'none' as const
                  }}>
                    100
                  </div>
                  <div style={{ 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#374151',
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    Years of Quantum Mechanics
                  </div>
                </div>
              </div>
            </div>

            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: '#111', 
              marginBottom: '1.5rem' 
            }}>
              Qiskit Fall Fest 2025
            </h1>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem', 
              color: '#666', 
              marginBottom: '2rem',
              flexWrap: 'wrap' as const
            }}>
              <div>📍 KL University</div>
              <div>📅 November 3-5, 2025</div>
            </div>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#555', 
              marginBottom: '3rem', 
              maxWidth: '48rem', 
              margin: '0 auto 3rem auto' 
            }}>
              Join talks, workshops, and community sessions exploring quantum algorithms, 
              optimization techniques, and the future of quantum computing.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
              <button style={{
                backgroundColor: '#7c3aed',
                color: 'white',
                fontWeight: '600',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d28d9'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#7c3aed'}
              onClick={() => window.open('https://forms.gle/hyFFHEGrUmhwtaoN9', '_blank')}
              >
                Register Now
              </button>
              <button style={{
                backgroundColor: 'white',
                color: '#7c3aed',
                fontWeight: '600',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: '2px solid #7c3aed',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
              onClick={() => {
                const eventsSection = document.getElementById('events-section');
                if (eventsSection) {
                  eventsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              >
                View Agenda
              </button>
            </div>
          </div>
        </section>

        {/* Extension Event Images Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          padding: '4rem 1rem' 
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' as const }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#111', 
              marginBottom: '1rem' 
            }}>
              Extension Event
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#666', 
              marginBottom: '4rem' 
            }}>
              Celebrating 100 Years of Quantum Mechanics - IBM Qiskit Fall Fest 2025
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              {/* Extension Event Image */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '500px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
              }}
              >
                <img 
                  src={extensionEvent1} 
                  alt="Qiskit Fall Fest 2025 Extension Event - 100 Years of Quantum Mechanics" 
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '0.5rem'
                  }}
                />
                <div style={{ marginTop: '1.5rem', textAlign: 'center' as const }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#374151', 
                    marginBottom: '0.5rem' 
                  }}>
                    Extension Event Poster
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: '1.5' }}>
                    Official promotional material for the IBM Qiskit Fall Fest 2025<br/>
                    <span style={{ fontWeight: '600', color: '#7c3aed' }}>
                      Celebrating 100 Years of Quantum Mechanics
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Event Information */}
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '1rem', 
              padding: '2rem', 
              marginTop: '3rem', 
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              maxWidth: '800px',
              margin: '3rem auto 0 auto'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#111', 
                marginBottom: '1rem' 
              }}>
                A Historic Milestone in Quantum Computing
              </h3>
              <p style={{ 
                color: '#555', 
                lineHeight: '1.6', 
                marginBottom: '2rem' 
              }}>
                Join us in commemorating the centennial of quantum mechanics, from the foundational 
                work of Heisenberg and Schrödinger to today's quantum computing revolution with IBM Qiskit.
              </p>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                gap: '2rem', 
                textAlign: 'center' as const 
              }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#7c3aed' }}>1925</div>
                  <div style={{ fontSize: '0.875rem', color: '#666' }}>Quantum Mechanics Born</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0066cc' }}>2025</div>
                  <div style={{ fontSize: '0.875rem', color: '#666' }}>Centennial Celebration</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#059669' }}>∞</div>
                  <div style={{ fontSize: '0.875rem', color: '#666' }}>Future Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="events-section" style={{ 
          backgroundColor: 'white', 
          padding: '4rem 1rem' 
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' as const }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#111', 
              marginBottom: '1rem' 
            }}>
              Event Agenda
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#666', 
              marginBottom: '4rem' 
            }}>
              Three days of intensive quantum computing workshops, talks, and networking
            </p>
            
            <div style={{ 
              display: 'grid', 
              gap: '2rem', 
              textAlign: 'left' as const 
            }}>
              {[
                {
                  date: "November 3, 2025",
                  sessions: [
                    { time: "10:00 AM IST", title: "Inaugural Address", speaker: "Dr. L. Venkata Subramaniam, IBM Quantum India Lead" },
                    { time: "10:15 AM – 1:00 PM IST", title: "Shor's Algorithm", speaker: "Dr. Jayakumar Vaithiyashankar, CEO of Anuthantra" },
                    { time: "2:00 PM – 5:00 PM IST", title: "Grover's Algorithm", speaker: "IBM Guest Speaker" }
                  ]
                },
                {
                  date: "November 4, 2025",
                  sessions: [
                    { time: "10:00 AM – 1:00 PM IST", title: "Deutsch–Jozsa Algorithm", speaker: "Karthiganesh Durai, Founder & CEO of KwantumG Research Labs Pvt Ltd" },
                    { time: "2:00 PM – 5:00 PM IST", title: "Bernstein–Vazirani Algorithm", speaker: "IBM Guest Speaker" }
                  ]
                },
                {
                  date: "November 5, 2025",
                  sessions: [
                    { time: "10:00 AM – 1:00 PM IST", title: "QAOA (Quantum Approximate Optimization Algorithm)", speaker: "IBM Guest Speaker" },
                    { time: "2:00 PM – 5:00 PM IST", title: "VQE (Variational Quantum Eigensolver)", speaker: "Dr. Raghavendra V, SRM University" },
                    { time: "5:00 PM – 5:15 PM IST", title: "Valedictory Function", speaker: "Dr. L. Venkata Subramaniam, IBM Quantum India Lead" }
                  ]
                }
              ].map((day, dayIndex) => (
                <div key={dayIndex}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '2rem' 
                  }}>
                    <div style={{
                      backgroundColor: '#7c3aed',
                      color: 'white',
                      borderRadius: '50%',
                      width: '3rem',
                      height: '3rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '1.125rem',
                      marginRight: '1rem'
                    }}>
                      {dayIndex + 1}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
                        Day {dayIndex + 1}
                      </h3>
                      <p style={{ color: '#666', margin: 0 }}>{day.date}</p>
                    </div>
                  </div>
                  
                  <div style={{ marginLeft: '4rem' }}>
                    {day.sessions.map((session, sessionIndex) => (
                      <div key={sessionIndex} style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderLeft: '4px solid #7c3aed',
                        borderRadius: '0.5rem',
                        padding: '1.5rem',
                        marginBottom: '1.5rem'
                      }}>
                        <div style={{ marginBottom: '0.5rem', color: '#666', fontWeight: '500' }}>
                          🕒 {session.time}
                        </div>
                        <h4 style={{ 
                          fontSize: '1.25rem', 
                          fontWeight: 'bold', 
                          color: '#111', 
                          marginBottom: '0.5rem' 
                        }}>
                          {session.title}
                        </h4>
                        <div style={{ color: '#555' }}>
                          👤 {session.speaker}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer style={{ 
        backgroundColor: '#111', 
        color: 'white', 
        padding: '3rem 1rem',
        textAlign: 'center' as const
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Qiskit Fall Fest 2025
          </h3>
          <p style={{ color: '#aaa', marginBottom: '2rem' }}>
            Promoting accessibility of quantum computing to students and researchers, 
            hosted by KL University in partnership with IBM.
          </p>
          <button
            style={{
              backgroundColor: '#7c3aed',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              marginBottom: '2rem'
            }}
            onClick={() => window.open('https://forms.gle/hyFFHEGrUmhwtaoN9', '_blank')}
          >
            Register for Event
          </button>
          <div style={{ 
            borderTop: '1px solid #374151', 
            paddingTop: '2rem', 
            color: '#888' 
          }}>
            <p>© 2025 KL University. Extension Event - 100 Years of Quantum Mechanics.</p>
            <p>Powered by IBM Quantum & Qiskit</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
