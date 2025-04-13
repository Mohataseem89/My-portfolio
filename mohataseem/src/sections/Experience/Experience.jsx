

import styles from './ExperienceStyles.module.css';

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceList}>
        <div className={styles.experienceItem}>
          <h2>Web Development Intern</h2>
          <h4>Prodigy Infotech</h4>
          <p>Jan 2025 – Feb 2025</p>
          <ul>
            <li>Built interactive web applications using HTML, CSS, and JavaScript.</li>
            <li>Developed a Tic-Tac-Toe game and a personal portfolio website as key projects.</li>
            <li>Improved front-end skills and UI/UX understanding through hands-on tasks.</li>
          </ul>
        </div>

        <div className={styles.experienceItem}>
          <h2>FullStack Intern</h2>
          <h4>Zidio Development Pvt. Ltd.</h4>
          <p>Mar 2025 – Present</p>
          <ul>
            <li>Built interactive web applications using HTML, CSS, and JavaScript and MERN.</li>
            <li>Successfully completed my internship task by developing Zidio Task Management, a collaborative platform with Kanban boards and real-time updates to boost productivity and streamline workflows.</li>
            <li>Collaborated with team members to integrate front-end and back-end components.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;

