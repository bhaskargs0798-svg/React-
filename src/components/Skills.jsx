
function Skills() {
  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "React.js",
    "MySQL",
    "SQLite",
    "MongoDB",
    "Machine Learning",
    "Computer Vision",
    "OpenCV",
    "TensorFlow",
    "Flask",
    "NumPy",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills" className="section">
      <h2>Technical Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <span className="skill" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
