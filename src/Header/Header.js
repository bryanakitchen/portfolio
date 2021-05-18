import React from 'react';
import './Header.scss'

export default function Header() {
    return (
        <div className='Header'>
            <div className="logo">
                <img src='./logo.png' alt='logo with b' />
            </div>

            <div className="nav">
                <a href='/'>Home</a>
                <a href='/'>Projects</a>
                <a href='/'>Mission</a>
                <a href='/'>Contact</a>
            </div>
        </div>
    )
}
