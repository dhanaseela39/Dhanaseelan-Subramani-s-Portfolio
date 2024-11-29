// import React, { useEffect, useState } from 'react'

// const Experiences = () => {
//     const [experiences, setExperiences] = useState();

//     const fetchExperiences = async () => {
//         const url = 'https://admin.codewithharsh.ca/api/experiences';
//         const response = await fetch(url);
//         const data = await response.json();

//         setExperiences(data);
//         console.log('fetchExperiences ', data);
//     };

//     useEffect(() => {
//         fetchExperiences();
//     }, []);

//     return (
//         <section id='experiences' class='className="section gray-bg" id="resume"'>
//             <div class="container">
//                 <div class="section-title">
//                     <h2 class="text-center">Experience</h2>
//                 </div>
//                 <div class="row">
//                     <div class="col-12 m-15px-tb">
//                         <div class="resume-box border border-dark">
//                             <ul>
//                                 {experiences && experiences.map((item, index) => {
//                                     return (
//                                         <li key={index}>
//                                             <div class="icon border border-dark">
//                                                 <i class="fas fa-briefcase "></i>
//                                             </div>
//                                             <span class="time">{new Date(item?.start_date).getFullYear()} - {new Date(item?.end_date).getFullYear()}</span>
//                                             <h5>{item?.job_title} - {item?.company_name}</h5>
//                                             <p>{item?.description}</p>
//                                         </li>
//                                     )
//                                 })}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Experiences

import React from 'react';

const Experiences = () => {
  const experiences = [
    {
      company_name: "Evolve Robotics Lab",
      job_title: "Intern",
      start_date: "2022-08-10", // Approximate date
      end_date: "2022-11-31", // Approximate date
      description: "Worked on robotic designs, automation solutions, and programming tasks to assist in innovative projects."
    },
    {
      company_name: "Chakraborty and Lakhar Innovations Private Limited",
      job_title: "Junior HR",
      start_date: "2023-09-01",
      end_date: "2024-01-31",
      description: "Managed recruitment processes, coordinated onboarding activities, and handled employee relations to ensure smooth HR operations."
    },
    {
      company_name: "Mr. Cooper",
      job_title: "Graduate Intern",
      start_date: "2024-07-01",
      end_date: "2024-08-31",
      description: "Worked on Engineering branch of Cooper in Chennai. Here I learnt Full stack development under the tech stack of Java Springboot along with corporate culture."
    },
    {
      company_name: "SVCT Blockchain Club",
      job_title: "Founder and President",
      start_date: "2023-08-01",
      end_date: "Present",
      description: "Established and led the Blockchain Club, organizing events, webinars, and workshops to educate students on blockchain technology."
    },
  ];

  return (
    <section id="experiences" className="section gray-bg" id1="resume">
      <div className="container">
        <div className="section-title">
          <h2 className="text-center">Experience</h2>
        </div>
        <div className="row">
          <div className="col-12 m-15px-tb">
            <div className="resume-box border border-dark">
              <ul>
                {experiences.map((item, index) => (
                  <li key={index}>
                    <div className="icon border border-dark">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <span className="time">
                      {new Date(item.start_date).getFullYear()} -{" "}
                      {item.end_date === "Present"
                        ? "Present"
                        : new Date(item.end_date).getFullYear()}
                    </span>
                    <h5>
                      {item.job_title} - {item.company_name}
                    </h5>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
