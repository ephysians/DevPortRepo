// import { Link } from 'react-router-dom';
// import logo from './Asset/logo/logo.png';
// import { RiMenu4Fill } from "react-icons/ri";
// import { useState } from 'react';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleMenuToggle = () => {
//         setIsOpen(!isOpen);
//     };

//     const menuStyles = {
//         transition: 'opacity 0.5s ease-in-out', // Adjust the duration and easing as needed
//         opacity: isOpen ? 1 : 0, // Initial opacity when menu is open or closed
//         pointerEvents: isOpen ? 'auto' : 'none', // Enable pointer events only when menu is open
//         visibility: isOpen ? 'visible' : 'hidden' // Show/hide the menu content
//     };

//     return (
//         <section>
//             <nav className="flex justify-between items-center pl-10 pr-10 pt-5">
//                 {/* Your logo */}
//                 <div className="relative w-20 h-20 rounded-full" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)', zIndex: "10" }}>
//                     <Link to="/">
//                         <img
//                             src={logo}
//                             alt="..."
//                             style={{ cursor: "pointer", width: "5rem", height: "5rem", borderRadius: "100%", padding: "5px", background: "#0c5fb5" }}
//                             className="portfolio-logo"
//                         />
//                     </Link>
//                 </div>

//                 {/* Menu items */}
//                 <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0" style={menuStyles}>
//                     <li className="z-10 text-white hover:text-customBlue" style={{ fontSize: "medium" }}><Link to="/">Home</Link></li>
//                     <li className="z-10 text-white hover:text-customBlue" style={{ fontSize: "medium" }}><Link to="/projects">Projects</Link></li>
//                     <li className="z-10 text-white hover:text-customBlue" style={{ fontSize: "medium" }}><Link to="/credentials">Certificate-Gallery/Resume</Link></li>
//                     <li className="z-10 text-white hover:text-customBlue" style={{ fontSize: "medium" }}><Link to="/contact">Let's Talk</Link></li>
//                 </ul>

//                 {/* Menu icon */}
//                 <RiMenu4Fill
//                     style={{
//                         height: "2rem",
//                         width: "2rem",
//                         color: "white",
//                         zIndex: "10",
//                         cursor: "pointer",
//                     }}
//                     onClick={handleMenuToggle}
//                 />
//             </nav>
//         </section>
//     );
// };

// export default Navbar;



import { Link } from 'react-router-dom';
import logo from './Asset/logo/logo.png';
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const menuStyles = {
        transition: 'opacity 0.5s ease-in-out', // Adjust the duration and easing as needed
        opacity: isOpen ? 1 : 0, // Initial opacity when menu is open or closed
        pointerEvents: isOpen ? 'auto' : 'none', // Enable pointer events only when menu is open
        visibility: isOpen ? 'visible' : 'hidden' // Show/hide the menu content
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <section>
            <nav className="flex justify-between items-center pl-10 pr-10 pt-5">
                {/* Your logo */}
                <div className="relative w-20 h-20 rounded-full" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)', zIndex: "10" }}>
                    <Link to="/">
                        <img
                            src={logo}
                            alt="..."
                            style={{ cursor: "pointer", width: "5rem", height: "5rem", borderRadius: "100%", padding: "5px", background: "#0c5fb5" }}
                            className="portfolio-logo"
                        />
                    </Link>
                </div>

                {/* Menu items */}
                <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0" style={menuStyles}>
                    <li className="z-10 text-white hover:text-customBlue" style={{ fontSize: "medium" }}>
                        <Link to="/" onClick={isOpen ? closeMenu : undefined}>Home</Link>
                    </li>
                    <li className="z-10 text-white hover:text-customBlue" style={{ fontSize: "medium" }}>
                        <Link to="/projects" onClick={isOpen ? closeMenu : undefined}>Projects</Link>
                    </li>
                    <li className="z-10 text-white hover:text-customBlue" style={{ fontSize: "medium" }}>
                        <Link to="/credentials" onClick={isOpen ? closeMenu : undefined}>Certificate-Gallery/Resume</Link>
                    </li>
                    <li className="z-10 text-white hover:text-customBlue" style={{ fontSize: "medium" }}>
                        <Link to="/contact" onClick={isOpen ? closeMenu : undefined}>Let's Talk</Link>
                    </li>
                </ul>

                {/* Menu icon */}
                <RiMenu4Fill
                    style={{
                        height: "2rem",
                        width: "2rem",
                        color: "white",
                        zIndex: "10",
                        cursor: "pointer",
                    }}
                    onClick={handleMenuToggle}
                />
            </nav>
        </section>
    );
};

export default Navbar;


