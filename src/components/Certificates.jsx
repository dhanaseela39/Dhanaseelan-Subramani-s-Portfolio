import React from "react";

const Certificates = () => {
  const certificates = [
    {
      title: "API Testing Path",
      issuer: "Postman",
      issuedDate: "Nov 2024",
      credentialID: "gyhbitfkap6b",
      url: "https://verify.skilljar.com/c/gyhbitfkap6b",
      image: "https://media.licdn.com/dms/image/v2/D562DAQGN81wHhqUI7Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1732009717112?e=1733389200&v=beta&t=_plo-BYWy4TnYzxeKuNYxntpBhyjkNTpwpKdv-fp8XM",
    },
    {
      title: "Postman API Fundamentals Student Expert Certification",
      issuer: "Postman",
      issuedDate: "Oct 2024",
      credentialID: "FSWjkru9Sf2od2O6OWiMGA",
      url: "https://badgr.com/public/assertions/FSWjkru9Sf2od2O6OWiMGA?identity__email=dhanaseelan39@gmail.com",
      image: "https://media.licdn.com/dms/image/v2/D562DAQFZJRj1fW6lag/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1732777905587?e=1733385600&v=beta&t=tVBVi5-0UgXkAzRnBJYivWDowHnPbEEEWW4_nRMwkRM",
    },
    {
      title: "Python For Beginners Course In-Depth",
      issuer: "Udemy",
      issuedDate: "Jun 2024",
      credentialID: "UC-47ae280f-41be-4e13-8265-37754860eccc",
      url: "https://media.licdn.com/dms/image/v2/D562DAQF6n9WQYsNsNQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719373066872?e=1733392800&v=beta&t=es0Hk4iV5RcWl_2LRYc_ZYTq48mqAmUsu3ua7hcf-Ec",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-47ae280f-41be-4e13-8265-37754860eccc.jpg?v=1717852532000",
    },
    {
      title: "Learn Blockchain and Cryptocurrency from Beginning",
      issuer: "Udemy",
      issuedDate: "May 2024",
      credentialID: "UC-b49e1a07-ade8-4273-bb8d-986730935ac8",
      url: "https://www.udemy.com/certificate/UC-b49e1a07-ade8-4273-bb8d-986730935ac8/",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-b49e1a07-ade8-4273-bb8d-986730935ac8.jpg?v=1716730688000",
    },
    {
      title: "BLOCKCHAIN BASICS",
      issuer: "Coursera",
      issuedDate: "Mar 2024",
      credentialID: "CSGJS48SGMGQ",
      url: "https://www.coursera.org/account/accomplishments/verify/CSGJS48SGMGQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=courseQ",
      image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~CSGJS48SGMGQ/CERTIFICATE_LANDING_PAGE~CSGJS48SGMGQ.jpeg",
    },
  ];

  return (
    <section id="certificates" className="certificates container">
      <h2 className="text-center">Licenced Certifications</h2>
      <div className="certificates-wrapper">
        {certificates.map((item, index) => (
          <div key={index} className="certificate-card">
            <div
              className="certificate-image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="certificate-content">
              <h5>{item.title}</h5>
              <p>
                Issuer: {item.issuer} <br />
                Issued: {item.issuedDate} <br />
                Credential ID: {item.credentialID}
              </p>
              <button onClick={() => window.open(item.url, "_blank")}>
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
