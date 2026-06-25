import React from "react";
import styles from "./ExperienceStyles.module.css";
import prodigy from "../../assets/prodigy.pdf";
import zidio from "../../assets/zidio.pdf";

function Experience() {
const experiences = [
{
company: "Zidio Development Pvt. Ltd.",
role: "Full Stack Development Intern",
period: "Mar 2025 – Jun 2025",
description: [
"Developed Zidio Task Management, a MERN-based collaborative task management platform.",
"Implemented role-based access control, task assignment workflows, and Kanban boards.",
"Worked across both frontend and backend systems using React, Node.js, Express, and MongoDB."
],
technologies: ["React", "Node.js", "Express.js", "MongoDB", "MERN"],
offerLetter: zidio
},
{
company: "Prodigy Infotech",
role: "Web Development Intern",
period: "Jan 2025 – Feb 2025",
description: [
"Built responsive web applications using HTML, CSS, and JavaScript.",
"Developed projects including a personal portfolio and Tic-Tac-Toe application.",
"Strengthened frontend development and UI/UX fundamentals."
],
technologies: ["HTML", "CSS", "JavaScript", "Git"],
offerLetter: prodigy
}
];

return ( <section id="experience" className={styles.container}> <div className={styles.header}> <h2>Experience</h2> <p>Internships and professional experiences that shaped my development journey.</p> </div>

```
  <div className={styles.timeline}>
    {experiences.map((exp, index) => (
      <div className={styles.card} key={index}>
        <div className={styles.cardHeader}>
          <div>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
          </div>

          <span className={styles.period}>
            {exp.period}
          </span>
        </div>

        <ul className={styles.description}>
          {exp.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <div className={styles.techStack}>
          {exp.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <a
          href={exp.offerLetter}
          download
          className={styles.offerLink}
        >
          View Offer Letter
        </a>
      </div>
    ))}
  </div>
</section>
```

);
}

export default Experience;
