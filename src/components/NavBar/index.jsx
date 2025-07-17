import React, { useState } from "react";
import { FaBars, FaDev } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll';
import './styles.scss';

const data = [
    { label: 'HOME', to: 'home' },
    { label: 'ABOUT', to: 'about' },
    { label: 'SKILLS', to: 'skills' },
    { label: 'RESUME', to: 'resume' },
    { label: 'PORTFOLIO', to: 'portfolio' },
    { label: 'CONTACT', to: 'contact' },
];

const NavBar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(prev => !prev);
    };

    const handleLinkClick = () => {
        setToggleIcon(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar_container">
                <ScrollLink to="home" smooth={true} duration={500} className="navbar_container_logo">
                    <FaDev size={40} />
                </ScrollLink>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </div>
            <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
                {data.map((item, key) => (
                    <li key={key} className="navbar_container_menu_item">
                        <ScrollLink
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="navbar_container_menu_item_links"
                            onClick={handleLinkClick}
                        >
                            {item.label}
                        </ScrollLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
