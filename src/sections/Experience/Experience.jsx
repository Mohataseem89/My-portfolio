import React, { useState, useEffect } from 'react';
import styles from './ExperienceStyles.module.css';
import prodigy from '../../assets/prodigy.pdf';
import zidio from '../../assets/zidio.pdf';

function Experience() {
  const [activeItem, setActiveItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const experiences = [
    {
      id: 1,
      period: "Jan 2025 – Feb 2025",
      role: "Web Development Intern",
      company: "Prodigy Infotech",
      location: "Remote",
      type: "Internship",
      logo: "🚀",
      color: "#FF6B6B",
      skills: ["HTML5", "CSS3", "JavaScript", "UI/UX", "Git"],
      achievements: [
        "Built interactive web applications using HTML, CSS, and JavaScript",
        "Developed a Tic-Tac-Toe game and a personal portfolio website as key projects",
        "Improved front-end skills and UI/UX understanding through hands-on tasks",
        "Collaborated with senior developers to optimize code performance"
      ],
      projects: [
        { name: "Tic-Tac-Toe Game", tech: "JavaScript", link: "#" },
        { name: "Portfolio Website", tech: "HTML/CSS", link: "#" }
      ]
    },
    {
      id: 2,
      period: "Mar 2025 – June 2025",
      role: "FullStack Intern",
      company: "Zidio Development Pvt. Ltd.",
      location: "Remote",
      type: "Internship",
      logo: "⚡",
      color: "#4ECDC4",
      skills: ["React", "Node.js", "MongoDB", "Express", "MERN Stack"],
      achievements: [
        "Developed Zidio Task Management – a MERN-based collaborative platform",
        "Implemented real-time updates and Kanban boards to streamline productivity",
        "Collaborated with teammates to integrate scalable frontend & backend systems",
        "Achieved 40% improvement in task completion tracking efficiency"
      ],
      projects: [
        { name: "Task Management System", tech: "MERN Stack", link: "#" },
        { name: "Real-time Dashboard", tech: "React + Socket.io", link: "#" }
      ]
    }
  ];

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <section id="experience" className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.header}>
        <h1 className={styles.sectionTitle}>Professional Experience</h1>
        <p className={styles.sectionSubtitle}>
          My journey through technology and continuous learning
        </p>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineTrack}></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`${styles.experienceItem} ${activeItem === index ? styles.active : ''}`}
            onClick={() => handleItemClick(index)}
            style={{
              '--experience-color': exp.color,
              animationDelay: `${index * 0.2}s`
            }}
          >
            <div className={styles.timelineMarker}>
              <span className={styles.experienceLogo}>{exp.logo}</span>
            </div>

            <div className={styles.experienceContent}>
              <div className={styles.experienceHeader}>
                <div className={styles.badgeContainer}>
                  <div className={styles.badge}>{exp.period}</div>
                  <div className={styles.typeTag}>{exp.type}</div>
                </div>
                <div className={styles.locationTag}>📍 {exp.location}</div>
              </div>

              <h2 className={styles.roleTitle}>{exp.role}</h2>
              <h4 className={styles.companyName}>{exp.company}</h4>

              <div className={styles.skillsContainer}>
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className={styles.achievementsList}>
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className={styles.achievementItem}>
                    <span className={styles.achievementIcon}>✓</span>
                    <span className={styles.achievementText}>{achievement}</span>
                  </div>
                ))}
              </div>

              {activeItem === index && (
                <>
                  <div className={styles.projectsSection}>
                    <h5>Key Projects:</h5>
                    <div className={styles.projectsList}>
                      {exp.projects.map((project, idx) => (
                        <div key={idx} className={styles.projectItem}>
                          <span className={styles.projectName}>{project.name}</span>
                          <span className={styles.projectTech}>{project.tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Offer Letter Button */}
                  {exp.company === "Prodigy Infotech" && (
                    <a
                      href={prodigy}
                      download="Prodigy.pdf"
                      className={styles.offerDownload}
                    >
                      📄 Download Offer Letter
                    </a>
                  )}

                  {exp.company === "Zidio Development Pvt. Ltd." && (
                    <a
                      href={zidio}
                      download="zidio.pdf"
                      className={styles.offerDownload}
                    >
                      📄 Download Offer Letter
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.skillsOverview}>
        <h3>Technologies I've Worked With</h3>
        <div className={styles.allSkills}>
          {[...new Set(experiences.flatMap(exp => exp.skills))].map((skill, index) => (
            <span
              key={skill}
              className={styles.overviewSkill}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
