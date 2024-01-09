import Button from './Button';
import Navbar from '../Navbar';
import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { TfiWorld } from "react-icons/tfi";
import { SiHashnode } from 'react-icons/si';
import { CiTwitter, CiLinkedin } from 'react-icons/ci';
import { PiEnvelopeSimpleLight } from 'react-icons/pi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === 'name') {
            setNameError(!/^[A-Za-z\s]+$/.test(value));
        }

        if (name === 'email') {
            setEmailError(!/^\S+@\S+\.\S+$/.test(value));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nameError && !emailError) {
            // Handle form submission here
            console.log('Form submitted:', formData);
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } else {
            alert('Please fill in the form correctly!');
        }
    };

    return (
        <section style={{ background: "linear-gradient(9deg, rgba(65,9,121,0.7)50%, rgba(0,212,255,0.7)100%)", height: "39.95rem" }}>
            <Navbar />
            <div className="flex justify-center items-center pt-8">
                <form
                    className="bg-gray-200 p-4 rounded-lg"
                    style={{ top: '1rem', width: '40%', position: 'relative' }}
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl mb-4 flex justify-center items-center ">Leave a message</h2>
                    <div className="flex flex-col gap-4">
                        <div className="mb-3">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full border rounded-md p-2 outline-none ${nameError ? 'border-red-500' : ''
                                    }`}
                                style={{ width: '100%' }}
                                required
                                title="Please enter only alphabetic characters"
                            />
                            {nameError && (
                                <span className="text-red-500 text-sm">Please enter only alphabetic characters</span>
                            )}
                        </div>

                        <div className="mb-3">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full border rounded-md p-2 outline-none ${emailError ? 'border-red-500' : ''
                                    }`}
                                style={{ width: '100%' }}
                                required
                                title="Please enter a valid email address"
                            />
                            {emailError && (
                                <span className="text-red-500 text-sm">Please enter a valid email address</span>
                            )}
                        </div>

                        <div className="mb-3">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                className="w-full border rounded-md p-2 outline-none"
                                rows="4"
                                style={{ width: '100%' }}
                                required
                            />
                        </div>
                        <Button text="Send"
                        

                        />
                    </div>
                </form>
                <div className="ml-4" style={{marginTop:"2rem"}} >
                    <div data-aos="fade-up-right" data-aos-easing="linear">
                        <div className="flex flex-col items-center pt-4 rounded" style={{ position:"relative", left:"22rem"}}>
                            <div className="mb-5  border-#02172d rounded-full animated pulse">
                                <a href="https://twitter.com/lifted_veron" className="">
                                    <CiTwitter className="w-5 h-5 m-1" style={{ color: '#ffffff' }} />
                                </a>
                            </div>

                            <div className="mb-5  border-#02172d rounded-full">
                                <a href="https://www.linkedin.com/in/emmanuel-chuks/">
                                    <CiLinkedin className="w-5 h-5 m-1 " style={{ color: '#ffffff' }} />
                                </a>
                            </div>

                            <div className="mb-5  border-#02172d rounded-full">
                                <a href="https://emmanuelchuks.hashnode.dev/">
                                    <SiHashnode className="w-5 h-5 m-1" style={{ color: '#ffffff' }} />
                                </a>
                            </div>

                            <div className="mb-5  border-#02172d rounded-full">
                                <a href="https://iridescent-arithmetic-6737be.netlify.app/">
                                    <TfiWorld className="w-5 h-5 m-1" style={{ color: '#ffffff' }} />
                                </a>
                            </div>

                            <div className="mb-5  border-#02172d rounded-full">
                                <a href="+2349038104041">
                                    <FaPhoneAlt className="w-5 h-5 m-1" style={{ color: '#ffffff' }} />
                                </a>
                            </div>
                            <div className="mb-5  border-#02172d rounded-full">
                                <a href="https://wa.me/+234938104041">
                                    <FaWhatsapp className="w-5 h-5 m-1" style={{ color: '#ffffff' }} />
                                </a>
                            </div>

                            <div className="mb-5  border-#02172d rounded-full">
                                <a href="mailto:your-chuksobinna80@gmail.com">
                                    <PiEnvelopeSimpleLight className="w-5 h-5 m-1" style={{ color: '#ffffff' }} />
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;
