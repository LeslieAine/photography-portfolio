import React, { useState } from 'react';
import Link from 'next/link';
import HomePage from '../components/Home';
import PortfolioPage from '../components/Portfolio';
import AboutPage from '../components/About';
import ContactPage from '../components/Contact';

const Layout = ({ firstName, lastName, email, imageURL1, imageURL2, imageURL3 }) => {
    const [activeSection, setActiveSection] = useState('home');
    // const router = useRouter();

    const handleNavClick = (section) => (event) => {
        event.preventDefault(); // Prevent the default link behavior
        setActiveSection(section);
    };


    return (
        <>
            <aside id="main-sidebar">
                <Link href="/" className="brand">
                    <span className="name"> {firstName} {lastName} </span>
                    <span className="title hidden-xs">Photography</span>
                </Link>
                <div className="responsive-nav">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li><a href="#" onClick={handleNavClick('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
                        <li><a href="#" onClick={handleNavClick('portfolio')} className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</a></li>
                        <li><a href="#" onClick={handleNavClick('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
                        <li><a href="#" onClick={handleNavClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
                        {/* <li><Link href="/" className={`nav-link ${activeLink === item.id ? 'active' : ''}`}>Home</Link></li>
                        <li><Link href="#portfolio">Portfolio</Link></li>
                        <li><Link href="about">About</Link></li>
                        <li><Link href="#contact">Contact</Link></li> */}
                    </ul>
                </nav>
            </aside>
            <div id="wrapper" className="container-fluid sidebar">
                {/* <div id="wrapper" className="container-fluid sidebar"> */}
                    <div className={`section ${activeSection === 'home' ? 'visible' : 'hidden'}`}>
                        <HomePage firstName={firstName} lastName={lastName} email={email} imageURL1={imageURL1} imageURL2={imageURL2} imageURL3={imageURL3} />
                    </div>
                    <div className={`section ${activeSection === 'portfolio' ? 'visible' : 'hidden'}`}>
                        <PortfolioPage firstName={firstName} lastName={lastName} email={email} imageURL1={imageURL1} imageURL2={imageURL2} imageURL3={imageURL3} />
                    </div>
                    <div className={`section ${activeSection === 'about' ? 'visible' : 'hidden'}`}>
                        <AboutPage imageURL1={imageURL1} />
                    </div>
                    <div className={`section ${activeSection === 'contact' ? 'visible' : 'hidden'}`}>
                        <ContactPage imageURL2={imageURL2} />
                    </div>
                {/* </div> */}
            </div>
        </>
    );
};

export default Layout;
