import React from "react";
import Fitness from "./Fitness";
import Structural from "./Structural";
import Coding from "./Coding";

function About() {
    return <div className="box">
        <div class="row">
            <div class="column">
                <img src="toby.jpg" width="200" alt="Toby"></img>
            </div>
            <div class="column left">
                <h1>Julia Dunlop</h1>
                <h3>Design/Technology/Movement</h3>
                <br></br>
                <p>By combining my passion for design and technology 
                I create experiences that are solutions to people's challenges.</p>
                <p>I draw my inspiration and passion to help from my various roles and experiences in 
                dancing, teaching, and all the madness of daily life. </p>
            </div>
        </div>
        <div class="rowheader"><h1>CV Highlights</h1></div>
        <div class="row">
            <div class="column">
            <h2>Design</h2>
                <h4><a href="https://www.ubc.ca">University of British Columbia</a></h4>
                <p>Bachelors of Applied Science in Civil Engineering</p>
                <br></br>
                <h4><a href="https://www.bhbengineers.com">BHB Engineers</a></h4>
                <p>Project Engineer</p>
                <br></br>
                <h4><a href="https://www.eclipse-engineering.com/">Eclipse Engineering</a></h4>
                <p>Project Engineer, Project Manager, CLT Team Lead</p>
                    
            </div>
            <div class="column left">
                
                <h2>Technology</h2>
                <h4><a href="/projects">Current Projects</a></h4>
                <br></br>
                <h2>Movement</h2>
                <h4>Ballet Idaho</h4>
                <p>Yes, I got paid to dance around and destroy my feet</p>
                <br></br>
                <h4>Echo School of Dance</h4>
                <p>Teach, Inspire, Support</p>    
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h1>Blah</h1>
            </div>
            <div class="column left">
                <ul>
                    <li>I eat an absurd amount of fruit (think like ~10)</li>
                    <li>I'm training for my first marathon</li>
                    <li>I grew up on a dairy farm</li>
                    <li></li>
                </ul>
            </div>
        </div>
        </div>
        

}

export default About;