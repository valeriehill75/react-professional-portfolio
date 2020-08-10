import React, { Component } from "react";
import { Link } from "react-router-dom";

function Content(props) {
    return (
        <div className="container cards">
            {props.projects.map(project => (
                <li class="card project-card col-lg-4 col-md-6 col-sm-12 m-4">
                    <div className="card-body" key={project.id}>
                        <h2> { project.title } </h2>
                        <img className="project-image" src={project.image}></img>
                        <div className="row project btn">
                            <button className="btn"><a className="project-link" target="_blank" href={project.repo}>View Repository</a></button>
                            <button className="btn"><a className="project-link" target="_blank" href={project.app}>View the App</a></button>
                        </div>
                    </div>
                </li>
            ))}
        </div>
    );
}
export default Content;