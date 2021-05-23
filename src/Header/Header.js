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
                <Link activeClass="active" to="home" >Home</Link>
                <Link activeClass="active" to="about" >About</Link>
                <Link activeClass="active" to="projects" >Projects</Link>
                <Link activeClass="active" to="contact" >Contact</Link>
            </div>
        </div>
    )
}
