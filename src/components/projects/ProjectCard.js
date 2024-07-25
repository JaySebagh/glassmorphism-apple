import React from "react";
import '../../assets/styles/projectcard.css'

const ProjectCard = ({ data } ) => {
    return(
        <div className="project-card-container">
            <div className="upper-card">
                <div className="left-card">
                    <h1>{data.title}</h1>
                    <h2>{data.stack}</h2>
                    <div>
                        <a className="repo-button" href={`//${data.github}`} target="_blank" rel="noreferrer">
                            REPO
                        </a>
                        <a className="demo-button" href={`//${data.demo}`} target="_blank" rel="noreferrer">
                            DEMO
                        </a>
                    </div>
                </div>
                <img src={data.url} alt="project preview"/>
            </div>
            <p>{data.bio}</p>
        </div>
    )
};

export default ProjectCard;