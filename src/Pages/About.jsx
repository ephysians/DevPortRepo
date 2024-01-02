import React from "react";
import Button from "../Component/Button";
import Navbar from "../Navbar";

const About = () => {
  const spanx = {
    color:"white",
    fontSize:"larger",
  }

  const borderStlye = {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "8px",
    paddingTop:"2rem",
  }

const openBlog = () => {
  const blogLink = 'https://emmanuelchuks.hashnode.dev/';
  window.open(blogLink)
}


const openResume = () => {
  const resumeLink = 'https://drive.google.com/file/d/1IGpC_bbauC1_2hVhs0DUs0pAtzSzrTpR/view?usp=drive_link';
  window.open(resumeLink)

}

  return (
    <div  style={{background:"linear-gradient(9deg, rgba(65,9,121,0.7)50%, rgba(0,212,255,0.7)100%)", height:"39.95rem"}}>
      <Navbar />
      <div style={borderStlye} >
        <h3 className="text-2xl mb-3 text-white" data-aos="fade-right" data-aos-delay="400">About Me</h3>
        <p className="mb-3 text-white" data-aos="fade-right" data-aos-delay="100">
         Emmanuel is a front-end developer with a passion for crafting user-centric web experiences using modern technologies. My 2+ years of experience have <br />
          equipped me to seamlessly blend React JS, Next.js, Tailwind CSS, React Query, and Zustand to build lightning-fast, visually stunning, and highly<br />
          engaging applications.
        </p>

        <p className="mb-3 text-white" data-aos="fade-right" data-aos-delay="400">
          My expertise lies in:<br />
          <span style={spanx}>*</span> Building dynamic React applications: Utilizing Next.js for optimal performance and SEO.<br />
          <span style={spanx}>*</span> Crafting beautiful and responsive UIs: Tailwind CSS ensures pixel perfect design across all devices.<br />
          <span style={spanx}>*</span> Managing state and data efficiently: React Query and Zustand empower seamless user interactions.<br />
          <span style={spanx}>*</span> Collaborating effectively in Agile teams: Jira, Azure DevOps, and GitHub facilitate smooth workflows.<br />
          <span style={spanx}>*</span> Integrating seamlessly with APIs: Dynamic content and functionalities are my forte.<br />
          <span style={spanx}>*</span> Working closely with DevOps: Ensuring smooth deployments and continuous improvement.<br />
        </p>

        <p className="pb-3 text-white" data-aos="fade-right" data-aos-delay="600">
          Beyond technical skills, I bring a tech-enthusiastic spirit, always eager to learn and master new technologies. Furthermore, I have a problem-solving<br /> mindset that makes me thrive in tackling challenges and finding creative solutions.<br />
          I'm excited to discuss how my skills and passion can contribute to a team that values innovation and excellence in front-end development. Feel
          <br /> free to reach out for a conversation!
        </p>

        <div className="space-x-5"  >
     
        <Button 
          text="Visit Blog"
          onClick={openBlog}
          
        />

        <Button 
         text='View resume'
         onClick={openResume}
        />

      </div>
      </div>
    </div>

  )
}

export default About
