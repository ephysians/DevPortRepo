import Button from '../Component/Button';
import { FaGithub } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import { CiTwitter, CiLinkedin } from 'react-icons/ci';
import { PiEnvelopeSimpleLight } from 'react-icons/pi';
import react from "../Asset/svg/react.svg";
import next1 from "../Asset/svg/next1.svg";
import js from "../Asset/svg/js.svg";
import typescript from "../Asset/svg/typescript.svg";
import cicd from "../Asset/svg/cicd.svg";
import azure from "../Asset/svg/azure.svg";
import mongo from "../Asset/svg/mongo.svg";
import node from "../Asset/svg/node.svg";
import redux from "../Asset/svg/redux.svg";
import Layout from '../Component/Layout';
import { Link } from 'react-router-dom';
import person from "../Asset/images/person.png"



const Home = () => {
    return (
        <Layout>
            <section
                className="flex relative"
                style={{
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundImage: `url(${person})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',}}>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" style={{ zIndex: "10" }}>
                    <div className="flex-1"  style={{paddingLeft:"3rem", paddingTop:"6rem" }} >
                        <h1 className="text-4xl font-bold mb-7 text-customBlue" data-aos="zoom-in-down"><span>W</span>elcome</h1>
                        <h3 className="text-3xl font-bold mb-7 text-customBlue" data-aos="zoom-in-left">
                            <span className="text-white">I'm</span> Emmanuel Chuks.
                        </h3>
                        <div className="mb-10">
                            <p style={{color:"white",fontSize:"larger", fontFamily:"sans-serif" }} data-aso="zoom-in-right">A software developer and budding DevOps Engineer.</p>
                            <p style={{color:"white",fontSize:"larger", fontFamily:"sans-serif"}} data-aso="zoom-in-up ">I sculpt digital dreams into tangible realities.</p>
                        </div>
                        <div data-aos="fade-up">
                            <div className="flex mt-4 md:space-x-4 mb-6" >
                                <Link to="/projects">
                                    <Button 
                                    text="MY PROJECTS" />
                                </Link>

                                <Link to="/about">
                                    <Button 
                                    text="ABOUT ME" />
                                </Link>
                            </div>
                        </div>
                        <div data-aos="fade-up-right"
                            data-aos-easing="linear">
                            <div className="flex md:space-x-4 mt-4 pl-8 ">
                                <div className=" border border-white rounded-full ">
                                <a href="https://twitter.com/lifted_veron" className=" ">
                                    <CiTwitter className="w-7 h-7 m-1" style={{color: '#0c5fb5'}} />
                                </a>
                                </div>

                                <div className=" border border-white rounded-full ">
                                <a href="https://www.linkedin.com/in/emmanuel-chuks/">
                                    <CiLinkedin className="w-7 h-7 m-1 " style={{color: '#0c5fb5'}} />
                                </a>
                                </div>

                                <div className=" border border-white rounded-full ">
                                <a href="https://github.com/ephysians">
                                    <FaGithub className="w-7 h-7 m-1" style={{color: '#0c5fb5'}} />
                                </a>
                                </div>
                                <div className=" border border-white rounded-full ">
                                <a href="https://emmanuelchuks.hashnode.dev/">
                                    <SiHashnode className="w-7 h-7 m-1" style={{color: '#0c5fb5'}} />
                                </a>
                                </div>

                                <div className=" border border-white rounded-full ">
                                <a href="mailto:your-chuksobinna80@gmail.com">
                                    <PiEnvelopeSimpleLight className="w-7 h-7 m-1" style={{color: '#0c5fb5'}} />
                                </a>
                                </div>
                            </div>

                        </div>
                    </div>
                 </div>

                        {/* ##################################################### */}

                 <div className="flex-1 pt-5" style={{ zIndex: "10" }} >
                    <div className="" style={{ marginTop: "11.5rem" }} >
                        {/* <div data-aos="fade-up-left"> */}
                        <div className=" boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)' rounded p-1 text-white mb-3 mr-1 "  style={{ marginLeft: "24rem", background: "#02172d", boxShadow: "0px 4px 6px rgba(0, 0, 0, 1)", }} data-aos="fade-right" data-aos-delay="750">
                            <h1 className="text-3xl font-semibold">Proven Skills</h1>
                        </div>
                        {/* </div> */}
                        {/* <div data-aos="zoom-in"> */}
                        <div className=" boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)' flex p-1 justify-end rounded text-white items-center mb-3 mr-1"  style={{ marginLeft: "39.8rem", background: "#02172d", boxShadow: "0px 4px 6px rgba(0, 0, 0, 1)", }} data-aos="fade-right" data-aos-delay="900">
                            <img src={react} alt="..." className="h-8 w-8 pr-3" />
                            <img src={next1} alt="..." className="h-8 w-8 pr-3" />
                            <h3 className="text-sm font-bold pr-1">React/Next JS</h3>
                        </div>
                        {/* </div> */}
                        {/* <div data-aos="zoom-in-up"> */}
                        <div className=" boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)' flex p-1 justify-end rounded text-white items-center mb-3 mr-1"  style={{ marginLeft: "37rem", background: "#02172d", boxShadow: "0px 4px 6px rgba(0, 0, 0, 1)", }} data-aos="fade-right" data-aos-delay="700">
                            <img src={js} alt="..." className="h-8 w-8 pr-3" />
                            <img src={typescript} alt="..." className="h-8 w-8 pr-3" />
                            <h3 className="text-sm font-bold pr-1">JavaScript/TypeScript</h3>
                        </div>
                        {/* </div> */}
                        {/* <div data-aos="zoom-in-down"> */}
                        <div className=" boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)' flex p-1 justify-end rounded text-white items-center mb-3 mr-1"  style={{ marginLeft: "39rem", background: "#02172d", boxShadow: "0px 4px 6px rgba(0, 0, 0, 1)", }} data-aos="fade-right" data-aos-delay="900" >
                            <img src={node} alt="..." className="h-8 w-8 pr-3" />
                            <img src={mongo} alt="..." className="h-8 w-8 pr-3" />
                            <h3 className="text-sm font-bold pr-1">NodeJS/MongDB</h3>
                            {/* </div> */}
                        </div>
                        {/* <div data-aos="zoom-in-left"> */}
                        <div className=" boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)' flex p-1 justify-end rounded text-white items-center mb-3 mr-1"  style={{ marginLeft: "37rem", background: "#02172d", boxShadow: "0px 4px 6px rgba(0, 0, 0, 1)", }} data-aos="fade-right" data-aos-delay="1100" >
                            <img src={azure} alt="..." className="h-8 w-8 pr-3" />
                            <img src={cicd} alt="..." className="h-8 w-8 pr-3" />
                            <h3 className="text-sm font-bold pr-1">AzureDevOps - CI/CD</h3>
                            {/* </div> */}
                        </div>
                        <div className=" boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)' flex p-1 justify-end rounded text-white items-center mb-1 mr-1"  style={{ marginLeft: "45.5rem", background: "#02172d", boxShadow: "0px 4px 6px rgba(0, 0, 0, 1)", }}>
                            <img src={redux} alt="..." className="h-8 w-8 pr-3" />
                            <h3 className="text-sm font-bold pr-1">Redux</h3>
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default Home;
