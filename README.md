# IBM Qiskit Fall Fest 2025 - KL University

A modern React website for the IBM Qiskit Fall Fest 2025 event hosted by KL University, celebrating 100 years of quantum mechanics.

## 🎯 Event Details

- **Event**: IBM Qiskit Fall Fest 2025 - Extension Event
- **Dates**: November 3-5, 2025
- **Format**: Online Meeting (Virtual Event)
- **Organizer**: KL University in partnership with IBM Quantum
- **Theme**: Celebrating 100 Years of Quantum Mechanics

## 🚀 Features

- **Interactive Quantum Demo**: Hadamard coin flip simulation
- **Event Schedule**: Complete 3-day workshop and talk schedule
- **Countdown Timer**: Real-time countdown to event start
- **Mobile Responsive**: Works perfectly on all devices
- **Modern UI**: Clean, professional design with animations
- **Online Meeting Ready**: Optimized for virtual event experience

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1 + TypeScript
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13 + Custom CSS
- **Animations**: Framer Motion 12.23.13
- **Icons**: Lucide React 0.544.0
- **Code Quality**: ESLint + TypeScript strict mode

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/gourishetti-ruthvik/ibm_event_klu.git
cd ibm_event_klu
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to \`http://localhost:5173\`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── EventsSection.tsx
│   ├── ExtensionEventSection.tsx
│   ├── QuantumDemo.tsx
│   └── Footer.tsx
├── assets/             # Images and static assets
│   └── images/
├── config/             # Configuration constants
├── utils/              # Utility functions
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
\`\`\`

## 🎨 Customization

### Update Registration URL
Edit \`src/config/index.ts\` to update the registration form URL:

\`\`\`typescript
export const CONFIG = {
  registrationUrl: 'YOUR_GOOGLE_FORM_URL_HERE',
  // ... other config
};
\`\`\`

### Modify Event Details
Update event information in the same config file.

## 🧑‍💻 Development

### Code Quality
- ESLint for code linting
- TypeScript for type safety
- Strict mode enabled

### Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build
- \`npm run lint\` - Run ESLint

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is created for the IBM Qiskit Fall Fest 2025 event at KL University.

## 🙏 Acknowledgments

- **IBM Quantum Team** for Qiskit and quantum computing education
- **KL University** for hosting and organizing the event
- **React & Vite Teams** for excellent development tools
- **Tailwind CSS** for rapid UI development

---

**Event Contact**: quantum@kluniversity.in  
**Website**: [KL University](https://kluniversity.in)  
**Qiskit**: [qiskit.org](https://qiskit.org/)
