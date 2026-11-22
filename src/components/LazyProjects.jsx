import { useEffect, useRef, useState, lazy, Suspense } from "react";

const Projects = lazy(() => import("./Projects"));

function LazyProjects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="projects" ref={sectionRef}>
      {visible ? (
        <Suspense fallback={<p>Loading projects...</p>}>
          <Projects />
        </Suspense>
      ) : (
        <p>Loading projects section...</p>
      )}
    </div>
  );
}

export default LazyProjects;