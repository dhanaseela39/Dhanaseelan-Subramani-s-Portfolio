import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Disaster Zone Navigating Robot (non-autonomous)",
      content: "A robot designed to remotely navigate hazardous environments, equipped with sensors and cameras for real-time feedback. Ideal for search, rescue, and data collection missions.",
      image: "https://media.licdn.com/dms/image/v2/D562DAQHjkilQvX-doQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1732767466420?e=1733374800&v=beta&t=PHXBQWJIhRL0ZwKovbX8MaH0_H-koy5mvVCA94R7apw",
      url: "https://docs.google.com/presentation/d/1004FZ6FLMy8W6qL5BBB_bA0vMyLYt7aATjx9k7Ob-TQ/edit?usp=sharing",
    },
    {
      title: "Helping Hands",
      content: "A web app connecting sponsors and orphanages with an admin approval system to ensure user credibility.",
      image: "https://media.licdn.com/dms/image/v2/D562DAQGpmvSINycdEQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1732767668429?e=1733374800&v=beta&t=RHZifl-Hn7S-6QT9-nyACkQ238lAavm7iDXlsxZg6k4",
      url: "https://www.figma.com/proto/aymlP5O8V5pqm1ZHAkGo4M/Team%3A6?node-id=440-110&t=cm5XTOTxVREIBv5t-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    },
    {
      title: "Piezoelectric Energy Conversion",
      content: "A circuit converting sound energy pressure into electrical energy, showcasing research and hardware development skills.",
      image: "https://media.licdn.com/dms/image/v2/D562DAQENouY2ROdXTw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1732767900539?e=1733374800&v=beta&t=LJ_IYevL2_U7y9q-u3otENfdggrdXzklXcOIZOqGyX0",
      url: "https://ijsrem.com/download/circuit-for-converting-sound-energys-pressure-into-electrical-energy/",
    },
    {
      title: "Wi-Fi Controlled Rover",
      content: "A Wi-Fi-controlled rover using NodeMCU for wireless commands, designed for navigation tasks.",
      image: "https://media.licdn.com/dms/image/v2/D562DAQGewJyaeDQbRg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1732769249272?e=1733374800&v=beta&t=57Vl1RBwSQmhJl70GM-KcL2CWEghrn4KOdbOhcAHqO4",
      url: "https://drive.google.com/file/d/1_RaRmtdv_QUTbV1E_CXKDzSekEzG9_-x/view?usp=sharing",
    },
  ];

  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((item, index) => (
          <div key={index} className="project-card">
            <img src={item.image} alt={item.title} className="project-img" />
            <h3 className="project-title">{item.title}</h3>
            <p className="project-content">{item.content}</p>
            <button onClick={() => window.open(item.url, "_blank")} className="project-button">
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
