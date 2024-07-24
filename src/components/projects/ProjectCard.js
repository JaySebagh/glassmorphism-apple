import React from "react";
// import '../styles/card.css';

const ProjectCard = ({ data } ) => {
    return(
        <div>
            <img src={data.url} alt="project preview"/>
            <h1>{data.title}</h1>
            <p>{data.bio}</p>
            <h2>{data.stack}</h2>
            <div>
                <a href={`//${data.github}`} target="_blank" rel="noreferrer">
                    <button>REPO</button>
                </a>
                <a href={`//${data.demo}`} target="_blank" rel="noreferrer">
                    <button>DEMO</button>
                </a>
            </div>
        </div>
    )
};

export default ProjectCard;