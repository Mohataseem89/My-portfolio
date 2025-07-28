import React, { useState, useEffect } from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/dark.svg';
import checkMarkIconLight from '../../assets/light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

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
      color: "#ff6b9d",
      skills: [
        { name: "HTML5", level: 95, color: "", },
        { name: "CSS3", level: 90, color: "#1572B6", icon: "" },
        { name: "JavaScript", level: 88, color: "#F7DF1E", icon: "" },
        { name: "React", level: 85, color: "#61DAFB", icon: "" },
        { name: "Redux", level: 80, color: "#764ABC", icon: "" },
        { name: "TypeScript", level: 75, color: "#3178C6", icon: "" }
      ]
    },
    {
      title: "UI/UX & Frameworks",
      icon: "",
      description: "Creating seamless user experiences with modern tools",
      color: "#c471ed",
      skills: [
        { name: "Bootstrap", level: 85, color: "#7952B3", icon: "" },
        { name: "Chakra UI", level: 80, color: "#319795", icon: "" },
        { name: "TailwindCSS", level: 88, color: "#06B6D4", icon: "" },
        { name: "Figma", level: 75, color: "#F24E1E", icon: "" },
        { name: "Material-UI", level: 70, color: "#0081CB", icon: "" }
      ]
    },
    {
      title: "Backend & Database",
      icon: "",
      description: "Robust server-side solutions and data management",
      color: "#12c2e9",
      skills: [
        { name: "Node.js", level: 82, color: "#339933", icon: "" },
        { name: "Express", level: 80, color: "#000000", icon: "" },
        { name: "MongoDB", level: 78, color: "#47A248", icon: "" },
        { name: "MySQL", level: 75, color: "#4479A1", icon: "" },
        { name: "Firebase", level: 85, color: "#FFCA28", icon: "" }
      ]
    },
    {
      title: "Tools & Deployment",
      icon: "",
      description: "Version control and cloud deployment platforms",
      color: "#ff6b9d",
      skills: [
        { name: "Git", level: 88, color: "#F05032", icon: "" },
        { name: "AWS", level: 70, color: "#FF9900", icon: "" },
        { name: "Google Cloud", level: 65, color: "#4285F4", icon: "" },
        { name: "Netlify", level: 80, color: "#00C7B7", icon: "" },
        { name: "Vercel", level: 85, color: "#000000", icon: "" }
      ]
    }
  ];

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
  };

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  const averageLevel = Math.round(
    skillCategories.reduce((acc, cat) => 
      acc + cat.skills.reduce((sum, skill) => sum + skill.level, 0), 0
    ) / totalSkills
  );

  return (
    <section id="skills" className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      {/* Enhanced Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
        <div className={styles.particleField}>
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`${styles.particle} ${styles[`particle${i + 1}`]}`} />
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.sectionTitle}>Skills & Expertise</h1>
          <p className={styles.sectionSubtitle}>
            Transforming ideas into digital reality with cutting-edge technologies
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🚀</div>
            <div className={styles.statNumber}>{totalSkills}+</div>
            <div className={styles.statLabel}>Technologies</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>⭐</div>
            <div className={styles.statNumber}>{averageLevel}%</div>
            <div className={styles.statLabel}>Average Proficiency</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>💼</div>
            <div className={styles.statNumber}>4</div>
            <div className={styles.statLabel}>Categories</div>
          </div>
        </div>

        <div className={styles.categoryTabs}>
          {skillCategories.map((category, index) => (
            <button
              key={index}
              className={`${styles.categoryTab} ${
                activeCategory === index ? styles.active : ''
              }`}
              onClick={() => handleCategoryChange(index)}
              style={{ '--category-color': category.color }}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryTitle}>{category.title}</span>
              <div className={styles.tabGlow}></div>
            </button>
          ))}
        </div>

        <div className={styles.skillsContent}>
          <div className={styles.categoryInfo}>
            <h2 
              className={styles.categoryName}
              style={{ '--category-color': skillCategories[activeCategory].color }}
            >
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
                className={`${styles.skillCard} ${hoveredSkill === skill.name ? styles.hovered : ''}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  '--skill-color': skill.color,
                  '--category-color': skillCategories[activeCategory].color
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={styles.skillHeader}>
                  <div className={styles.skillIconContainer}>
                    <span className={styles.skillEmoji}>{skill.icon}</span>
                    <img src={checkMarkIcon} alt="check" className={styles.checkIcon} />
                  </div>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                  <span className={styles.skillLevel}>{skill.level}%</span>
                </div>
                <div className={styles.skillProgress}>
                  <div
                    className={styles.skillProgressBar}
                    style={{
                      '--progress-width': `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                  <div className={styles.progressGlow}></div>
                </div>
                <div className={styles.skillDetails}>
                  <div className={styles.proficiencyLabel}>
                    {skill.level >= 90 ? 'Expert' : 
                     skill.level >= 80 ? 'Advanced' : 
                     skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.quickSkills}>
          <h3>Quick Skills Overview</h3>
          <div className={styles.quickSkillsList}>
            {['React', 'Node.js', 'MongoDB', 'JavaScript', 'TailwindCSS', 'AWS', 'Git', 'Figma'].map((skill, index) => (
              <span 
                key={skill} 
                className={styles.quickSkillTag} 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={styles.quickSkillIcon}>
                  {skill === 'React' ? '⚛️' : 
                   skill === 'Node.js' ? '🟢' : 
                   skill === 'MongoDB' ? '🍃' : 
                   skill === 'JavaScript' ? '⚡' : 
                   skill === 'TailwindCSS' ? '🌊' : 
                   skill === 'AWS' ? '☁️' : 
                   skill === 'Git' ? '📚' : '🎨'}
                </span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
