import React from 'react';
import './Header.scss'

export default function Header() {
    return (
        <div className='Header'>
            <div className="logo">
                <a href='/'>
                    <img src='./logo.png' alt='logo with b' />
                </a>
            </div>

            <div className="nav">
                <a href='/'>Home</a>
                <a href='#projects'>Projects</a>
                <a href='#mission'>Mission</a>
                <a href='#contact'>Contact</a>
            </div>
        </div>
    )
}
