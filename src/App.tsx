import './App.css';
import extensionEvent1 from './assets/images/extension-event-1.png';
import klUniversityLogo from './assets/images/logo.png';
import ibmLogo from './assets/images/ibm.png';

type Session = {
  time: string;
  title: string;
  speaker: string;
};

type AgendaDay = {
  date: string;
  sessions: Session[];
};

function App() {
  const agendaDays: AgendaDay[] = [
    {
      date: 'September 2, 2026',
      sessions: [
        { time: '10:00 AM – 11:00 AM IST', title: 'Quantum Machine Learning and Hybrid AI', speaker: 'Anupama Roy' },
        { time: '11:15 AM – 12:15 PM IST', title: 'QAOA and Quantum Optimization', speaker: 'Amith Singhee' },
        { time: '2:00 PM – 3:00 PM IST', title: 'Quantum Error Correction and Error Mitigation', speaker: 'Siddharth Golecha' }
      ]
    },
    {
      date: 'September 3, 2026',
      sessions: [
        { time: '10:00 AM – 11:00 AM IST', title: 'Quantum Generative AI', speaker: 'Bhanwar Gupta' },
        { time: '11:15 AM – 12:15 PM IST', title: 'Quantum Drug Discovery', speaker: 'Sonali Chawla' },
        { time: '2:00 PM – 3:00 PM IST', title: 'Quantum-Centric Supercomputing', speaker: 'Dr. Ritajit Majumdar' }
      ]
    },
    {
      date: 'September 4, 2026',
      sessions: [
        { time: '10:00 AM – 11:15 AM IST', title: 'Real IBM Quantum Hardware Programming with Qiskit', speaker: 'Mrs. Guncha Malik' },
        { time: '11:30 AM – 12:30 PM IST', title: 'Quantum Software Engineering', speaker: 'Anupama Roy' },
        { time: '2:00 PM – 3:00 PM IST', title: 'Quantum Cybersecurity and Post-Quantum Cryptography', speaker: 'Siddharth Golecha' },
        { time: '3:15 PM – 4:15 PM IST', title: 'Quantum Entrepreneurship and Startup Opportunities', speaker: 'Dr. Ritajit Majumdar' }
      ]
    },
    {
      date: 'September 5, 2026',
      sessions: [
        { time: '9:00 AM – 5:00 PM IST', title: 'Online Hackathon', speaker: 'Mentorship panel with all speakers' }
      ]
    }
  ];

  const featuredSpeakers = [
    'Anupama Roy',
    'Amith Singhee',
    'Siddharth Golecha',
    'Bhanwar Gupta',
    'Sonali Chawla',
    'Dr. Ritajit Majumdar',
    'Mrs. Guncha Malik'
  ];

  const organizingTeam = [
    'Dr. Kolla Bhanu Prakash',
    'Dr. T. Pavan Kumar',
    'Sri. Hari Kiran Vege'
  ];

  const studentCoordinators = [
    'VBSL Chanakya',
    'VSL Maanas Krishna',
    'G. Ruthvik',
    'K. Beshwanth Sai',
    'G. Sai Pradhun',
    'Chandu Sai Pavan Santosh',
    'G. Nagendra Vara Prasad'
  ];

  const contacts = [
    { name: 'K. Beshwanth Sai', phone: '+91 79935 19377' },
    { name: 'G. Ruthvik', phone: '+91 7842453961' }
  ];

  return (
    <div className="App">
      <div style={{ backgroundColor: '#1e40af', color: 'white', padding: '0.75rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600 }}>
        🌐 HYBRID EVENT • Attend in person at KL University or join online from anywhere • Event access links will be shared after registration
      </div>

      <header style={{ backgroundColor: '#fff', padding: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Qiskit Fall Fest 2026</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src={klUniversityLogo} alt="KL University Logo" style={{ height: '40px', width: 'auto' }} />
            <img src={ibmLogo} alt="IBM Logo" style={{ height: '32px' }} />
          </div>
        </div>
      </header>

      <main>
        <section style={{ background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)', padding: '4rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#666', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Extension Event
              </h2>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <div style={{ fontSize: '6rem', fontWeight: 'bold', color: 'rgba(168, 85, 247, 0.2)', userSelect: 'none' }}>
                    100
                  </div>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#374151', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500 }}>
                    Years of Quantum Mechanics
                  </div>
                </div>
              </div>
            </div>

            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111', marginBottom: '1.5rem' }}>Qiskit Fall Fest 2026</h1>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', color: '#666', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div>📍 KL University</div>
              <div>📅 September 2-5, 2026</div>
            </div>

            <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '3rem', maxWidth: '48rem', margin: '0 auto 3rem auto' }}>
              Join talks, workshops, and community sessions exploring quantum algorithms, optimization techniques, and the future of quantum computing.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                style={{ backgroundColor: '#7c3aed', color: 'white', fontWeight: 600, padding: '0.75rem 2rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#6d28d9')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#7c3aed')}
                onClick={() => window.open('https://forms.gle/hyFFHEGrUmhwtaoN9', '_blank')}
              >
                Register Now
              </button>
              <button
                style={{ backgroundColor: 'white', color: '#7c3aed', fontWeight: 600, padding: '0.75rem 2rem', borderRadius: '0.5rem', border: '2px solid #7c3aed', cursor: 'pointer', transition: 'background-color 0.3s' }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                onClick={() => document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Agenda
              </button>
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111', marginBottom: '1rem' }}>Extension Event</h2>
            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '4rem' }}>
              Celebrating 100 Years of Quantum Mechanics - IBM Qiskit Fall Fest 2026
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '500px' }}>
                <img src={extensionEvent1} alt="Qiskit Fall Fest 2026 Extension Event - 100 Years of Quantum Mechanics" style={{ width: '100%', height: 'auto', borderRadius: '0.5rem' }} />
                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>Extension Event Poster</h3>
                  <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.5 }}>
                    Official promotional material for the IBM Qiskit Fall Fest 2026<br />
                    <span style={{ fontWeight: 600, color: '#7c3aed' }}>Celebrating 100 Years of Quantum Mechanics</span>
                  </p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', marginTop: '3rem', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111', marginBottom: '1rem' }}>A Historic Milestone in Quantum Computing</h3>
              <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '2rem' }}>
                Join us in commemorating the centennial of quantum mechanics, from the foundational work of Heisenberg and Schrödinger to today's quantum computing revolution with IBM Qiskit.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#7c3aed' }}>1925</div>
                  <div style={{ fontSize: '0.875rem', color: '#666' }}>Quantum Mechanics Born</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0066cc' }}>2026</div>
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

        <section id="events-section" style={{ backgroundColor: 'white', padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111', marginBottom: '1rem' }}>Event Agenda</h2>
            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '4rem' }}>
              Three days of intensive quantum computing workshops, talks, and networking across September 2-5, 2026
            </p>

            <div style={{ display: 'grid', gap: '2rem', textAlign: 'left' }}>
              {agendaDays.map((day, dayIndex) => (
                <div key={day.date}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                    <div style={{ backgroundColor: '#7c3aed', color: 'white', borderRadius: '50%', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.125rem', marginRight: '1rem' }}>
                      {dayIndex + 1}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Day {dayIndex + 1}</h3>
                      <p style={{ color: '#666', margin: 0 }}>{day.date}</p>
                    </div>
                  </div>

                  <div style={{ marginLeft: '4rem' }}>
                    {day.sessions.map((session) => (
                      <div key={`${day.date}-${session.time}-${session.title}`} style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderLeft: '4px solid #7c3aed', borderRadius: '0.5rem', padding: '1.5rem', marginBottom: '1.5rem' }}>
                        <div style={{ marginBottom: '0.5rem', color: '#666', fontWeight: 500 }}>🕒 {session.time}</div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem' }}>{session.title}</h4>
                        <div style={{ color: '#555' }}>👤 {session.speaker}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)', padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111', marginBottom: '1rem' }}>Featured Speakers</h2>
            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '3rem' }}>
              The event brings together IBM and quantum industry speakers across the three-day program.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
              {featuredSpeakers.map((speaker) => (
                <div key={speaker} style={{ backgroundColor: 'white', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #e5e7eb', boxShadow: '0 6px 16px rgba(15, 23, 42, 0.06)' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#111' }}>{speaker}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: 'white', padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111', marginBottom: '1rem' }}>Organizing Team</h2>
            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '4rem' }}>Meet the dedicated team behind Qiskit Fall Fest 2026</p>

            <div style={{ display: 'grid', gap: '2rem', textAlign: 'left' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                  <div style={{ backgroundColor: '#7c3aed', color: 'white', borderRadius: '50%', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.125rem', marginRight: '1rem' }}>👨‍🏫</div>
                  <div><h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Conveners</h3></div>
                </div>
                <div style={{ marginLeft: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {organizingTeam.map((name) => (
                    <div key={name} style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderLeft: '4px solid #7c3aed', borderRadius: '0.5rem', padding: '1.5rem' }}>
                      <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111' }}>{name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                  <div style={{ backgroundColor: '#0066cc', color: 'white', borderRadius: '50%', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.125rem', marginRight: '1rem' }}>👨‍🎓</div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Student Coordinators</h3>
                    <p style={{ color: '#666', margin: 0 }}>Event Management Team</p>
                  </div>
                </div>
                <div style={{ marginLeft: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {studentCoordinators.map((name) => (
                    <div key={name} style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderLeft: '4px solid #0066cc', borderRadius: '0.5rem', padding: '1.5rem' }}>
                      <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111' }}>{name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)', padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem' }}>Contact Us</h2>
            <p style={{ fontSize: '1rem', color: '#666', marginBottom: '2.5rem' }}>Have questions? Reach out to our coordinators</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '650px', margin: '0 auto' }}>
              {contacts.map((contact) => (
                <div key={contact.name} style={{ backgroundColor: 'white', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📞</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem' }}>{contact.name}</h3>
                  <a href={`tel:${contact.phone}`} style={{ fontSize: '1rem', color: '#7c3aed', fontWeight: 600, textDecoration: 'none', display: 'block', marginBottom: '0.25rem' }}>
                    {contact.phone}
                  </a>
                  <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>Student Coordinator</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: '#111', color: 'white', padding: '3rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Qiskit Fall Fest 2026</h3>
          <p style={{ color: '#aaa', marginBottom: '2rem' }}>
            Promoting accessibility of quantum computing to students and researchers, hosted by KL University in partnership with IBM Quantum.
          </p>
          <button
            style={{ backgroundColor: '#7c3aed', color: 'white', fontWeight: 600, padding: '0.75rem 2rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', marginBottom: '2rem' }}
            onClick={() => window.open('https://forms.gle/hyFFHEGrUmhwtaoN9', '_blank')}
          >
            Register for Event
          </button>
          <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem', color: '#888' }}>
            <p>© 2026 KL University. Extension Event - 100 Years of Quantum Mechanics.</p>
            <p>Powered by IBM Quantum</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;