import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export function NavBar() {
    let navIcon = <img src="imgs/obsidian500d.png" alt="Navigation Icon" width="30" height="24" className="d-inline-block align-text-top" />

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" aria-current="page" href="/">
                    {navIcon}
                    Computer Companion
                </a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav" id="navigation-links">
                    <li className="nav-item">
                            <a className="nav-link" href="comparison">Comparison Tool</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="deals">Deals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="yourBuild">Your Build</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )  
}

export function Home() {
    let pcImg = <img class='pc-image' src='imgs/computer_cross-section.jpg' alt='a computer cross section' />
    return (
        <div>
            <header id="homeopener">
            <div id="welcoming" className="container-fluid">
                <h1 className="display-3">Hello! I'm your Computer Companion.</h1>
                <h3 className="display-7">It's Nice To Meet You</h3>
                <Link to='deals' ><Button color='light' outline='true' >Get Started</Button></Link>
            </div>
            </header>
             <div className="page-description container">
                <p className="lead">
                    We know the process of building your own PC can be confusing. We are here to help.
                </p>
                <figure>
                    <blockquote className="blockquote">
                    <p>"Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination."</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                    Albert Einstein
                    </figcaption>
                </figure>
                <p>
                    A good PC is essential in doing everything from doing daily work to nighly gaming. Depending on what you need, Computer Companion is here to help you pick out the best (and most cost efficient)
                     build for you. Start by logging some deals you find online and keep track of your build. You're going to need a lot of ingredients so be ready.
                </p>
                <p className='display-6'>Your Journey Starts Now!</p>
                {pcImg}
            </div>    
        </div>
    )
}

export function Footer() {
    
    return (
        <footer>
            <div className="row">
                <div className="col-4">
                    <small>&copy; Copyright 2022, INFO 340 Winter Quarter Group A3</small>
                </div>
                <div className="col-4">
                    <p>Favicon by user "icon lauk" via <a
                            href="https://www.iconfinder.com/icons/3884950/app_cpu_desktop_pc_technology_icon">iconfinder.com</a>
                    </p>
                    <p>
                        Computer Cross-section by Carnegie Cyber Academy via <a
                            href="http://www.carnegiecyberacademy.com/facultyPages/computer/computers.html">carnegiecyberacademy.com</a>
                    </p>
                    <p>
                        Home Header via <a href="https://www.pexels.com/photo/two-computer-flat-screen-monitors-turned-on-777001/">pexels.com</a>
                    </p>
                    <p>
                        Deals Header via <a href="https://www.pexels.com/photo/close-up-photo-of-gaming-keyboard-2115257/">pexels.com</a>
                    </p>
                </div>
                <div className="col-4">
                    <p>Contact us here: </p>
                    <ul>
                        <li>
                            <address>Joon: <a href="mailto:jychung9@uw.edu">jychung9@uw.edu</a></address>
                        </li>
                        <li>
                            <address>Ray: <a href="mailto:rxu2@uw.edu">rxu2@uw.edu</a></address>
                        </li>
                    </ul>
                </div>
            </div>
    </footer>
    )
}