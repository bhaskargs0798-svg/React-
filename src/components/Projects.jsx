
function Projects() {
  const projects = [
    {
      title: "Person Identification and Tracking",
      description:
        "Developed a computer vision-based system for person identification and tracking using multiple camera streams.",
      technology: "Python, OpenCV, TensorFlow, Flask"
    },
    {
      title: "Food Delivery Application",
      description:
        "A food delivery website concept for browsing food items and ordering online.",
      technology: "HTML, CSS, JavaScript, React"
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio to showcase my skills, projects and resume.",
      technology: "React.js, HTML, CSS, JavaScript"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong></p>
            <p>{project.technology}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
