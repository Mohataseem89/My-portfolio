import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/dark.svg';
import checkMarkIconLight from '../../assets/light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { useState, useEffect } from 'react';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  const [activeCategory, setActiveCategory] = useState(0);
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

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "",
      description: "Building beautiful and responsive user interfaces",
      skills: [
        { name: "HTML5", level: 95, color: "#E34F26" },
        { name: "CSS3", level: 90, color: "#1572B6" },
        { name: "JavaScript", level: 88, color: "#F7DF1E" },
        { name: "React", level: 85, color: "#61DAFB" },
        { name: "Redux", level: 80, color: "#764ABC" },
        { name: "TypeScript", level: 75, color: "#3178C6" }
      ]
    },
    {
      title: "UI/UX & Frameworks",
      icon: "",
      description: "Creating seamless user experiences with modern tools",
      skills: [
        { name: "Bootstrap", level: 85, color: "#7952B3" },
        { name: "Chakra UI", level: 80, color: "#319795" },
        { name: "TailwindCSS", level: 88, color: "#06B6D4" },
        { name: "Figma", level: 75, color: "#F24E1E" },
        { name: "Material-UI", level: 70, color: "#0081CB" }
      ]
    },
    {
      title: "Backend & Database",
      icon: "",
      description: "Robust server-side solutions and data management",
      skills: [
        { name: "Node.js", level: 82, color: "#339933" },
        { name: "Express", level: 80, color: "#000000" },
        { name: "MongoDB", level: 78, color: "#47A248" },
        { name: "MySQL", level: 75, color: "#4479A1" },
        { name: "Firebase", level: 85, color: "#FFCA28" }
      ]
    },
    {
      title: "Tools & Deployment",
      icon: "",
      description: "Version control and cloud deployment platforms",
      skills: [
        { name: "Git", level: 88, color: "#F05032" },
        { name: "AWS", level: 70, color: "#FF9900" },
        { name: "Google Cloud", level: 65, color: "#4285F4" },
        { name: "Netlify", level: 80, color: "#00C7B7" },
        { name: "Vercel", level: 85, color: "#000000" }
      ]
    }
  ];

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
  };

  return (
    <section id="skills" className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.header}>
        <h1 className={styles.sectionTitle}>Skills & Expertise</h1>
        <p className={styles.sectionSubtitle}>
          Transforming ideas into digital reality with cutting-edge technologies
        </p>
      </div>

      <div className={styles.categoryTabs}>
        {skillCategories.map((category, index) => (
          <button
            key={index}
            className={`${styles.categoryTab} ${
              activeCategory === index ? styles.active : ''
            }`}
            onClick={() => handleCategoryChange(index)}
          >
            <span className={styles.categoryIcon}>{category.icon}</span>
            <span className={styles.categoryTitle}>{category.title}</span>
          </button>
        ))}
      </div>

      <div className={styles.skillsContent}>
        <div className={styles.categoryInfo}>
          <h2 className={styles.categoryName}>
            {skillCategories[activeCategory].title}
          </h2>
          <p className={styles.categoryDescription}>
            {skillCategories[activeCategory].description}
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className={styles.skillCard}
              style={{
                animationDelay: `${index * 0.1}s`,
                '--skill-color': skill.color
              }}
            >
              <div className={styles.skillHeader}>
                <img src={checkMarkIcon} alt="check" className={styles.checkIcon} />
                <h3 className={styles.skillName}>{skill.name}</h3>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <div className={styles.skillProgress}>
                <div
                  className={styles.skillProgressBar}
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      <div className={styles.quickSkills}>
        <h3>Quick Skills Overview</h3>
        <div className={styles.quickSkillsList}>
          {['React', 'Node.js', 'MongoDB', 'JavaScript', 'TailwindCSS', 'AWS', 'Git', 'Figma'].map((skill, index) => (
            <span key={skill} className={styles.quickSkillTag} style={{animationDelay: `${index * 0.1}s`}}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
