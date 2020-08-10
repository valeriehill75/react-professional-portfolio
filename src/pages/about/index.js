import React, { Component } from "react";
import ValPhoto from ".jpg"
import resume from ".pdf"
import ".style.css";

class About extends Component {
    handleClick(event) {
        event.preventDefault();
        window.open(Resume)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="body">
                        <img src={ValPhoto} alt="ValPic" className=""></img>
                        <section className="section-body">
                            <p className="description">
                                <br></br>

                                My name is Valerie Hill. I am currently enrolled in the Univeristy of Kansas
                                Coding Bootcamp, a full-stack program that provides instruction on HTML5, CSS3,
                                JavaScript, jQuery, Java, Bootstrap, Express.js, React.js, Node.js, Database
                                Theory, MongoDB, MySQL, Command Line, and Git.

                                It is my hope upon graduation to obtain full-time employment in Lawrence, Kansas,
                                utilizing the skills I have learned in the program. I feel my education and
                                experience with graphic design and my background as an artist, provides me the
                                unique ability to write and work on code that is not only functional, but clean
                                and aestetically pleasing.

                                <button className="btn" id="resume-btn" onClick={this.handleClick}>See My Full Resume Here</button>

                            </p>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;