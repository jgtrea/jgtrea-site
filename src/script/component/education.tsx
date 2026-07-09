import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Schools from "./education/schools";
import Certifs from "./education/certifs";
import Badges from "./education/badges";
import Associations from "./education/associations";

const eduSections = [
  { id: "edu-education", label: "Education", Body: Schools },
  { id: "edu-associations", label: "Associations", Body: Associations },
  { id: "edu-certificates", label: "Certificates", Body: Certifs },
  { id: "edu-badges", label: "Badges", Body: Badges },
];

const Education = () => {
  const [activeId, setActiveId] = useState(eduSections[0].id);
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const el = document.getElementById("edu-tabs-sentinel");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setDocked(!entry.isIntersecting && entry.boundingClientRect.top < 60),
      { rootMargin: "-60px 0px 0px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    eduSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 130;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <div id="edu-tabs-sentinel" className="edu-tabs-sentinel" />

      <div className={`edu-header-row${docked ? " docked" : ""}`}>
        <span className="section-pill">Background</span>
        <div className="edu-tabs">
          {eduSections.map((s) => (
            <motion.button
              key={s.id}
              layout
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className={`edu-chip${activeId === s.id ? " active" : ""}`}
              onClick={() => scrollTo(s.id)}
            >
              <span className="edu-chip-label">{s.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="edu-sections" id="edu-sections-wrap">
        {eduSections.map((s) => (
          <section key={s.id} id={s.id} className="edu-section">
            <div className="edu-section-title">
              <h2>{s.label}</h2>
            </div>
            <div className="education-content">
              <s.Body />
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Education;
