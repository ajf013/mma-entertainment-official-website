import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('section_1');
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const { theme, toggleTheme } = useTheme();

    const sections = [
        { id: 'section_1', label: 'Home' },
        { id: 'section_2', label: 'About' },
        { id: 'section_3', label: 'Team' },
        { id: 'section_4', label: 'Work' },
        { id: 'section_7', label: 'Contact' },
    ];

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const closeNav = () => setIsNavCollapsed(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Offset

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavCollapse}
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a href="index.html" className="navbar-brand mx-auto mx-lg-0">
                    <span className="brand-text">MMA <br /> Entertainment</span>
                </a>

                <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        {sections.map((section) => (
                            <li className="nav-item" key={section.id}>
                                <a
                                    className={`nav-link click-scroll ${activeSection === section.id ? 'active' : 'inactive'}`}
                                    href={`#${section.id}`}
                                    onClick={closeNav}
                                >
                                    {section.label}
                                </a>
                            </li>
                        ))}
                        <li className="nav-item ms-3">
                            <button
                                onClick={toggleTheme}
                                className="btn btn-link nav-link"
                                style={{
                                    fontSize: '1.2rem',
                                    padding: '0 10px',
                                    border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer'
                                }}
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun size={24} color="#ffffff" /> : <Moon size={24} color="#ffffff" />}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
