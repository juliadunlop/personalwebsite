import React from "react";

function Header() {
    return <nav>
    <h1><a href="/">JULIA DUNLOP</a></h1>
    <ul>
        <li><a href="/about" className="nav-link">About</a></li>
        <li><a href="/projects" className="nav-link">Work</a></li>
    </ul>
    <button className="burger-menu" id="burger-menu">
        <ion-icon className="bars" name="menu-outline"></ion-icon>
      </button>
</nav>
}

export default Header;