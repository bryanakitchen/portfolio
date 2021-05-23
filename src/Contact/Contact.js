import React from 'react';
import './Contact.scss';

export default function Contact() {
    return (
        <div className="Contact">
            <div className="inner">
                <p>Let's connect</p>
                <p>
                    <a href="mailto: bryanakitchen@gmail.com">
                        <img src="./email-dark.png" alt="email envelope" />
                        bryanakitchen@gmail.com
                    </a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/bryanakitchen">
                        <img src="./linkedin-dark.png" alt="email envelope" />
                        /in/bryanakitchen
                    </a>
                </p>

                <p>
                    <a href="https://github.com/bryanakitchen">
                        <img src="./github-dark.png" alt="email envelope" />
                        /bryanakitchen
                    </a>
                </p>
                <p>
                    <a href="./resume.pdf">
                        <img src="./cv-light.png" alt="email envelope" />
                        Resume
                    </a>
                </p>
            </div>
        </div>
    )
}
