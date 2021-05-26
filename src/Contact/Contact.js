import React from 'react';
import './Contact.scss';

export default function Contact() {
    return (
        <div className="Contact" name="contact">
            <div className="inner">
                <div className="content">

                <p>Let's connect</p>

                <p>
                    <a href="mailto: bryanakitchen@gmail.com">
                        <img src="./email-dark.png" alt="icon link to Bryana's email" />
                        bryanakitchen@gmail.com
                    </a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/bryanakitchen">
                        <img src="./linkedin-dark.png" alt="icon link to Bryana's linkedin" />
                        /in/bryanakitchen
                    </a>
                </p>

                <p>
                    <a href="https://github.com/bryanakitchen">
                        <img src="./github-dark.png" alt="icon link to Bryana's github" />
                        /bryanakitchen
                    </a>
                </p>
                <p className="tooltip">
                    <a href="./Bryana-Kitchen-Resume.pdf">
                        <img src="./cv-light.png" alt="icon link to Bryana's resume" />
                        Resume
                    </a>
                    <span className="tooltip-text">Yes, I am willing to relocate!</span>
                </p>
                </div>

            </div>
        </div>
    )
}
