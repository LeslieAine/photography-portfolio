import React from 'react'
import Link from 'next/link';

const Header = ({ firstName, lastName, setActiveSection }) => {
  return (
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
          <li><a onClick={() => setActiveSection('home')}>Home</a></li>
          <li><a onClick={() => setActiveSection('portfolio')}>Portfolio</a></li>
          <li><a onClick={() => setActiveSection('about')}>About</a></li>
          <li><a onClick={() => setActiveSection('contact')}>Contact</a></li>
          {/* <li><Link href='/'>Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li> */}
        </ul>
      </nav>
    </aside>
  );
};

export default Header;
