import React, { useState } from "react";
import projectsDATA from '../../assets/data/projectsData.json';
import ProjectCard from '../projects/ProjectCard';
import '../../assets/styles/projects.css';

const Projects = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="projects-tab-container">
            <input
                className="projects-search-bar"
                type='text'
                placeholder='search...'
                value={ search }
                onChange={(e) => setSearch(e.target.value)}
            />
            <div>
                {projectsDATA.filter((item) =>
                    item.title.toLowerCase().includes(search.toLowerCase())
                ).map((data, index) => (
                    <ProjectCard key={index} data={data}/>
                ))}
            </div>
        </div>
    );
}

export default Projects;