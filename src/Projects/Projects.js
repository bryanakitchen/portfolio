import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { projectsData } from './data.js';
import './Projects.scss';

export default function Projects() {
    const [index, setIndex] = useState(0);

    let changeSlide = (increment) => {
        const number = ((index + increment) + projectsData.length) % projectsData.length;
        setIndex(number);
    }  

    return (
        <div className="Projects-Body" name="projects">
            <div className="Projects">
                <h2>Selected Projects</h2>

                <div className="slideshow-container">
                    <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
                    <ReactPlayer 
                        url={projectsData[index].demo} 
                        controls="true"
                        width='100%'
                        height='100%' 
                    />
                    <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
                </div>

                <div className="desc">
                    <p>{projectsData[index].desc}</p>
                    <p className="links">
                        <a href={projectsData[index].repo} alt={projectsData[index].repo}>GitHub</a> | <a href={projectsData[index].site} alt={projectsData[index].site}>Website</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
