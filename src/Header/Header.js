import React from 'react';
import { Link } from 'react-scroll';
import './Header.scss'

export default function Header() {
    return (
        <div className='Header' id='Header'>
            <div className='logo'>
                <a href='/'>
                    <img src='./logo.png' alt='logo with b' />
                </a>
            </div>

            <div className='nav'>
                <Link activeClass="active" to="home" className="nav-link">Home</Link>
                <Link activeClass="active" to="about" className="nav-link">About</Link>
                <Link activeClass="active" to="projects" className="nav-link">Projects</Link>
                <Link activeClass="active" to="contact" className="nav-link">Contact</Link>
            </div>
        </div>
    )
}
