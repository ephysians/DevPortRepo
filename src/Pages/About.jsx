import React, { useState } from "react";
import Button from "../Component/Button";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdOutlineWork, MdSchool } from "react-icons/md";
import Navbar from "../Navbar";
import DownloadResumeButton from "../Component/DownloadResumePdf";

const About = () => {

  const [showResume, setShowResume] = useState(false); // UseState to mage the current state


  const toggleSection = () => {  //TogglescetionFn to set which section show
    setShowResume(!showResume)
  }

  const spanx = {
    color: "white",
    fontSize: "larger",
  }

  const borderStlye = {  // Eternal styling for the About section
    display: 'grid',
    paddingLeft: '1rem',
    paddingTop: "2rem",
  }

  const openBlog = () => {  // View Blog button Fn to open Blog link
    const blogLink = 'https://emmanuelchuks.hashnode.dev/';
    window.open(blogLink)
  }
  
  return (
    <div style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(18,8,110,0.8715861344537815) 35%, rgba(0,212,255,1) 100%)", overflow: "hidden" }}>
      <section id="about" >
        <Navbar />
        <div style={borderStlye} >
          <h3 className="text-2xl mb-3 text-white tracking-wide" data-aos="fade-right" data-aos-delay="400">About Me</h3>
          <p className="mb-3 text-white tracking-wide" data-aos="fade-right" data-aos-delay="100">
            Emmanuel is a front-end developer with a passion for crafting user-centric web experiences using modern technologies. My 2+ years of experience have
            equipped me to<br /> seamlessly blend React JS, Next.js, Tailwind CSS, React Query, and Zustand to build lightning-fast, visually stunning, and highly
            engaging applications.
          </p>

          <p className="mb-3 text-white tracking-wide" data-aos="fade-right" data-aos-delay="400">
            My expertise lies in:<br />
            <span style={spanx}>*</span> Building dynamic React applications: Utilizing Next.js for optimal performance and SEO.<br />
            <span style={spanx}>*</span> Crafting beautiful and responsive UIs: Tailwind CSS ensures pixel perfect design across all devices.<br />
            <span style={spanx}>*</span> Managing state and data efficiently: React Query and Zustand empower seamless user interactions.<br />
            <span style={spanx}>*</span> Collaborating effectively in Agile teams: Jira, Azure DevOps, and GitHub facilitate smooth workflows.<br />
            <span style={spanx}>*</span> Integrating seamlessly with APIs: Dynamic content and functionalities are my forte.<br />
            <span style={spanx}>*</span> Working closely with DevOps: Ensuring smooth deployments and continuous improvement.<br />
          </p>

          <p className="pb-3 mb-3 text-white tracking-wide" data-aos="fade-right" data-aos-delay="600">
            Beyond technical skills, I bring a tech-enthusiastic spirit, always eager to learn and master new technologies. Furthermore, I have a problem-solving mindset that makes me<br /> thrive in tackling challenges and finding creative solutions.<br />
            I'm excited to discuss how my skills and passion can contribute to a team that values innovation and excellence in front-end development. Do reach out for a conversation!
          </p>

          <div className="space-x-5"  >
            <Button
              text="Visit Blog"
              onClick={openBlog}
            />
            <Button
              text={showResume ? "Certificate Gallery" : "View Resume"} // Control which text to display on button if showResumeFn runs
              onClick={toggleSection}
            />
          </div>
        </div>
      </section>

      {showResume ? (    // control which section to display resume or certificate
        <section id="resume" className="mt-6">
          <div className="flex flex-col justify-center py-4 mt-3 ">
            <h1 className="text-white text-2xl mb-2 pl-8 tracking-wide">RESUME</h1>
            <div style={{ backgroundColor: "#fff" }} className="justify-between p-4 border-none rounded border ml-8 mr-8 ">
              <h2 className="text-2xl font-semibold tracking-wide ">Emmanuel Chukwukere Obinna</h2>
              <div className="flex space-x-12 pt-5">
                <span className="flex space-x-2 items-center tracking-wide">
                  <FaLocationDot />
                  Lagos, Nigeria
                </span>
                <span className="flex space-x-2 items-center tracking-wide">
                  <FaEnvelope />
                  chuksobinna80@gmail.com
                </span>
                <span className="flex space-x-2 items-center tracking-wide">
                  <FaPhone />
                  +2349038104041
                </span>
              </div>

              <div className="mt-5">
                <h3 className="text-2xl tracking-wide font-semibold mb-1 mt-2">Summary</h3>
                <p className="tracking-wide">
                  A proficient software developer with 2+ years of experience using technologies to build interactive and user- centered website designs to scale such as <br /> Javascript, Typescript, React Js/Next Js.
                </p>
              </div>

              <div>
                <div className="flex space-x-4 items-center mt-5">
                  <MdOutlineWork className="h-5 w-5" />
                  <h3 className="text-2xl tracking-wide font-semibold mt-4 mb-3">Work Experience</h3>
                </div>
                <div className="flex space-x-5 mb-4">
                  <div className="bg-red-500 h-3 w-3 rounded-full position right-4"></div>
                  <div className="bg-red-500 pl-1 w-0.3 h-64" style={{ position: "absolute", left: "2em" }} ></div>

                  <div className="ml-8 
                  ">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <div className="font-semibold tracking-wide">HYDROGEN-PAY (Frontend Engineer)</div>
                      <div className="font-semibold relative pl-96 left-48 tracking-wide"  >Sept 2023 - Present</div>
                    </div>
                    <p className="mb-1  ">
                      - Writing, testing, and maintaining code for financial applications, ensuring they are secure and efficient. <br />
                    </p>
                    <p className="mb-1  ">
                      - Working with cross-functional teams like designers,product managers, and other engineers to develop and improve financial products.<br />
                    </p>
                    <p className="mb-1  ">
                      - Keeping abreast of the latest technologies, tools, and best practices in both software engineering and the fintech industry.<br />
                    </p>
                    <p className="mb-1  ">
                      - Contributing to sprint planning, daily stand-ups, and retrospectives as part of an agile development team..<br />
                    </p>
                    <p className="mb-1  ">
                      - Contributing to the design and evolution of the system architecture to meet scalability, reliability, and performance requirements.<br />
                    </p>
                  </div>
                </div>

                <div className="flex space-x-5 mb-4">
                  <div className="bg-red-500 h-3 w-3 rounded-full position right-4"></div>
                  <div className="bg-red-500 pl-1 w-0.3 h-96" style={{ position: "absolute", left: "2em" }} ></div>

                  <div className="ml-8 
                  ">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <div className="font-semibold tracking-wide">SAIL TECH-TALENT (Frontend-Engineer-Trainee )</div>
                      <div className="font-semibold relative pl-96 left-48 tracking-wide"  >Jan 2023 - Aug 2023</div>
                    </div>
                    <p className="mb-1">
                      - Collaborated closely with experienced developers and mentors to learn and apply full-stack development concepts and best practices.<br />
                    </p>
                    <p className="mb-1">
                      - Debugged and resolved software issues to enhancing the overall functionality and performance of web applications.<br />
                    </p>
                    <p className="mb-1">
                      - Developed RESTful APIs and integrated them into web applications to enable data exchange and communication between different<br />  <span className="pl-2.5">software components.</span><br />
                    </p>
                    <p className="mb-1">
                      - Utilized version control systems like Git to manage code repositories and collaborate effectively with team members.<br />
                    </p>
                    <p className="mb-1">
                      - Gained hands-on experience in both front-end and back-end development technologies, including HTML5, CSS3, JavaScript, Node.js,<br /> <span className="pl-2.5">Express.JS and React.js</span>.<br />
                    </p>
                    <p className="mb-1">
                      - Assisted in designing and implementing user interfaces, ensuring a seamless and user-friendly experience for clients and end-users.<br />
                    </p>

                  </div>
                </div>
                <div className="flex space-x-5 mb-4">
                  <div className="bg-red-500 h-3 w-3 rounded-full position right-4"></div>
                  <div className="bg-red-500 pl-1 w-0.3 h-38" style={{ position: "absolute", left: "2em" }} ></div>

                  <div className="ml-8 
                  ">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <div className="font-semibold tracking-wide">FINDWORKA (Frontend Engineer-Apprenticeship)</div>
                      <div className="font-semibold relative pl-96 left-48 tracking-wide"  >Jan 2022-Aug 2022</div>
                    </div>
                    <p className="mb-1 tracking-wide ">
                      - Collaborated with a team of experienced developers to enhance my skills and contribute to various projects.<br />
                    </p>
                    <p className="mb-1 tracking-wide ">
                      - Participated in daily stand-up meetings to discuss project goals and progress.<br />
                    </p>
                    <p className="mb-1 tracking-wide ">
                      - Gained hands-on experience in HTML5, CSS3, JavaScript, and various frontend frameworks and libraries.<br />
                    </p>
                    <p className="mb-1 tracking-wide ">
                      - Actively learned and applied best practices in web development,including code optimization and cross-browser compatibility.<br />
                    </p>

                  </div>
                </div>
              </div>

              <div className="flex space-x-4 items-center mt-5">
                <MdSchool className="h-5 w-5"/>
                <h3 className="text-2xl tracking-wide font-semibold mt-4 mb-3">Education</h3>
              </div>
              <div className="flex space-x-5 mb-12">
                <div className="bg-red-500 h-3 w-3 rounded-full position right-4"></div>
                <div className="bg-red-500 pl-1 w-0.3 h-20" style={{ position: "absolute", left: "2em" }} ></div>

                <div className="ml-8 
                ">
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="font-semibold tracking-wide">University Of Lagos (Unilag)</div>
                    <div className="font-semibold relative pl-96 left-48 tracking-wide"  >Jan 2010 - Feb 2015</div>
                  </div>

                  <p className="mb-1 tracking-wide ">
                    - Working with cross-functional teams like designers,product managers, and other engineers to develop and improve financial<br /><span className="pl-2.5">products</span><br />
                  </p>
                </div>
              </div>
            </div>
          </div>
              <DownloadResumeButton 
              text="Download Pdf"
              className="ml-8"
              />
        </section>
      ) : (
        <section id="certificate" className="mt-5">
          <div className="flex justify-center py-4 mt-3">
            <div style={{ backgroundColor: "#02172d" }} className="flex justify-between w-full px-12 py-3 
            border-none rounded text-white border ml-3 mr-3 ">
              <h2 className="cursor-pointer p-1 rounded active:bg-violet-700" style={{}}>SoftWare</h2>
              <h2 className="cursor-pointer p-1 rounded active:bg-violet-700" style={{}}>DevOps</h2>
              <h2 className="cursor-pointer p-1 rounded active:bg-violet-700" style={{}}>Network</h2>
              <h2 className="cursor-pointer p-1 rounded active:bg-violet-700" style={{}}>Others</h2>
            </div>








          </div>

        </section>
      )}

    </div>

  )
}

export default About
