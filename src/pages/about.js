import React from "react";
import Layout from "../components/layout";
import aboutStyle from "../styles/about.css";


const About = (props) => {
    return (
        <Layout>
            <h2>My name is Joseph, nice to meet you!</h2>

            <div className={aboutStyle.main}>
                <div className={aboutStyle.izquierda}>
                    <div className={aboutStyle.imagen}>

                    </div>
                    <div className={aboutStyle.texto}>
                        <div className={aboutStyle.iconos}>
                            <i className="fas fa-map-marker-alt fa-sm"/>
                            <p>Kisumu, Kenya</p>
                        </div>
                        <div className={aboutStyle.iconos}>
                            <i className="fas fa-graduation-cap fa-sm"/>
                            <p>Self-Learner</p>
                        </div>
                        <div className={aboutStyle.iconos}>
                            <i className="fas fa-code fa-sm"/>
                            <p>Vuejs, Ruby, php, python, laravel, Rails</p>
                        </div>
                        <div className={aboutStyle.iconos}>
                            <i className="fas fa-language fa-sm"/>
                            <p>English, Kiswahili and Luo</p>
                        </div>
                    </div>
                </div>
                <div className={aboutStyle.derecha}>
                    <p>I am a self-taught developer in Development.</p>
                    <p>Currently I create websites as a
                        freelancer whenever I have the opportunity.</p>
                    <p>I am active member of the #DEVcommunity online, and I write weekly blog posts about topics I am
                        learning or experiences I had.</p>
                    <p>When I am not coding, you can find me reading or watching Nat Geo Wild.</p>

                    <div className={aboutStyle.socialContainer}>
                        <h3>Let's connect!</h3>
                        <a className={aboutStyle.social} href="https://github.com/JoseOgam" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-github"/>
                        </a>
                        <a className={aboutStyle.social} href="https://www.instagram.com/joseogam/" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                        <a className={aboutStyle.social} href="https://twitter.com/joseogam" target="_blank"
                           rel="noopener noreferrer">
                            <i class="fab fa-twitter"/>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;