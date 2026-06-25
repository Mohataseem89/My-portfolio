import styles from './ExperienceStyles.module.css';
import prodigy from '../../assets/prodigy.pdf';
import zidio from '../../assets/zidio.pdf';

const experiences = [
  {
    role: "Full Stack Intern",
    company: "Zidio Development Pvt. Ltd.",
    location: "Remote",
    period: "Mar 2025 – Jun 2025",
    bullets: [
      "Built a MERN-based collaborative task management platform with Kanban boards and real-time updates via Socket.io",
      "Developed RESTful APIs and scalable React components across the full stack",
      "Achieved 40% improvement in task completion tracking efficiency",
    ],
    tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    offerLetter: zidio,
    offerFile: "Zidio_Offer.pdf",
  },
  {
    role: "Front-End Web Development Intern",
    company: "Prodigy Infotech",
    location: "Remote",
    period: "Jan 2025 – Mar 2025",
    bullets: [
      "Built and deployed a personal portfolio using React.js with responsive, mobile-first design",
      "Developed Weather Vista, a real-time weather app consuming a public REST API",
      "Created multiple mini web apps strengthening JS framework and component architecture skills",
    ],
    tags: ["React", "JavaScript", "HTML", "CSS", "REST APIs", "Git"],
    offerLetter: prodigy,
    offerFile: "Prodigy_Offer.pdf",
  },
];

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <p className={styles.label}>Experience</p>

      {experiences.map((exp, i) => (
        <div key={i} className={styles.entry}>
          <div className={styles.entryHeader}>
            <span className={styles.role}>{exp.role}</span>
            <span className={styles.period}>{exp.period}</span>
          </div>
          <p className={styles.company}>{exp.company} · {exp.location}</p>
          <ul className={styles.bullets}>
            {exp.bullets.map((b, j) => (
              <li key={j} className={styles.bullet}>{b}</li>
            ))}
          </ul>
          <div className={styles.bottom}>
            <div className={styles.tags}>
              {exp.tags.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <a href={exp.offerLetter} download={exp.offerFile} className={styles.offerLink}>
              Offer letter ↓
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
