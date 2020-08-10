import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header class="">
            <h1 class="name-header">Valerie Hill</h1>
            <nav class="navbar navbar-info">
                <form class="form-inline">
                    <button className="navbtn btn btn-outline-dark" type="button" component= { Link } to="/about"> <Link to="/">About Me</Link></button>
                    <button className="navbtn btn btn-outline-dark" type="button"> <Link to="/portfolio">Portfolio</Link></button>
                    <button className="navbtn btn btn-outline-dark" type="button"><Link to="/contact">Contact Me</Link></button>
                </form>
            </nav>
        </header>
    );
}
export default Header;