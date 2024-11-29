import React from 'react';

const Skill = () => {
  const categorizedSkills = {
    "Programming Languages": ["Python", "Basic Java", "React.js", "Spring Boot"],
    "Web Development": ["Full-Stack Development", "REST APIs", "API Testing", "Manual Testing"],
    "Tools": ["Postman", "Gradle", "Selenium", "GitHub"],
    "Electronics": ["IoT", "Communication Systems", "Sensors", "Microcontrollers"],
    "Soft Skills": ["Leadership", "Problem Solving", "Situation Handling", "Tutoring"],
    "Other Tools": ["Adobe Photoshop", "Adobe Illustrator", "Adobe Lightroom", "Microsoft Office"]
  };

  return (
    <section id="skills" className="skills-container">
      <h2 className="text-center">Skills</h2>
      <div className="skills-grid">
        {Object.entries(categorizedSkills).map(([category, skills], index) => (
          <div key={index} className="skills-category">
            <h3>{category}</h3>
            <div className="skills-items">
              {skills.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
