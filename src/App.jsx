import './App.css'
import PhotoSec from './sections/photosec/photosec'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Experience from './sections/Experience/Experience'
import Footer from './sections/Footer/Footer'

const projects = [
  {
    title: 'CyberSentinel',
    period: 'Nov 2025 – Apr 2026',
    role: 'Phishing Detection & Web Threat Analysis Tool',
    description:
      'A full-stack cybersecurity tool that classifies websites as phishing, suspicious, or benign using an ML model, VirusTotal intelligence, and live DOM analysis.',
    stack: ['Python', 'Flask', 'Random Forest', 'scikit-learn', 'React', 'Chrome Extension API'],
    highlights: [
      'Trained on 640,000 URL records using URL-based features.',
      'Built real-time page scanning through a Chrome extension.',
      'Combined ML, API signals, and DOM checks into one risk score.',
    ],
    link: 'https://github.com/Mohataseem89',
  },
  {
    title: 'Yummigo',
    period: 'May 2025 – Jun 2025',
    role: 'Food Ordering Web App',
    description:
      'A responsive food ordering app for browsing restaurants, searching dishes, managing cart items, and placing orders.',
    stack: ['React.js', 'Redux', 'Tailwind CSS', 'HTML', 'Swiggy API'],
    highlights: [
      'Added efficient state management with Redux.',
      'Implemented live search and clean responsive UI.',
      'Focused on performance and cross-device compatibility.',
    ],
    link: 'https://github.com/Mohataseem89',
  },
  {
    title: 'CineMax',
    period: 'Mar 2025 – Apr 2025',
    role: 'Movie Explorer Web App',
    description:
      'A movie browsing app with trending content, routing, search, and watchlist features built for a smooth user experience.',
    stack: ['JavaScript', 'React', 'Tailwind CSS', 'React Router'],
    highlights: [
      'Built with component-based architecture.',
      'Used dynamic routing and search features.',
      'Kept the interface clean and responsive.',
    ],
    link: 'https://github.com/Mohataseem89',
  },
  {
    title: 'Crime-Classifier',
    period: 'Aug 2024 – Sep 2024',
    role: 'NLP Classification Project',
    description:
      'A machine learning project that classifies crime-report narratives into categories using NLTK and scikit-learn.',
    stack: ['HTML', 'CSS', 'JavaScript', 'NLTK', 'scikit-learn'],
    highlights: [
      'Applied text preprocessing and feature extraction.',
      'Built a responsive frontend for desktop and mobile.',
      'Used NLP for practical classification tasks.',
    ],
    link: 'https://github.com/Mohataseem89',
  },
]

const skills = {
  frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'Flask', 'Python', 'SQL'],
  data: ['MongoDB', 'PostgreSQL', 'scikit-learn', 'NLTK'],
  devops: ['Git', 'GitHub', 'Docker', 'AWS Basics', 'Vercel', 'Netlify'],
}

const experience = [
  {
    title: 'B.E. Computer Engineering',
    meta: 'Rizvi College of Engineering, Mumbai University',
    period: '2022 – 2026',
    description: 'CGPA: 8.20',
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    meta: 'Abdullah Patel Junior College, Maharashtra State Board',
    period: '2022',
    description: '70.41%',
  },
  {
    title: 'Secondary School Certificate (SSC)',
    meta: 'St. Mary Convent High School, Maharashtra State Board',
    period: '2020',
    description: '85.60%',
  },
]

export default function App() {
  return (
    <div className="appShell">
      <PhotoSec />
      <main className="mainContent">
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Experience items={experience} />
      </main>
      <Footer />
    </div>
  )
}