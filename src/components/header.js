import React from "react"
import {Link} from "gatsby";
import "../styles/header.css"

const Header = () =>{
    return(
        <div>
            <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                  integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                  crossOrigin="anonymous"/>

            <div className="header-main">
                <div className="dev">
                    <h1>Jose</h1>
                    <span className="dot">•</span>
                    <span className="attr">Front-End Developer</span>
                    <span className="dot">•</span></div>
                <div className="icons">
                    <a href='https://github.com/pachicodes' target="_blank" rel="noopener noreferrer"><i
                        className="fab fa-github"/></a>
                    <a href='https://twitter.com/pachicodes' target="_blank" rel="noopener noreferrer"><i
                        className="fab fa-twitter"/></a>
                    <a href='https://dev.to/pachicodes' target="_blank" rel="noopener noreferrer"><i
                        className="fab fa-dev"/></a>
                    <a href='https://www.linkedin.com/in/pachicodes/' target="_blank" rel="noopener noreferrer"><i
                        className="fab fa-linkedin"/></a>
                </div>

                <span className="pages-link">
                <Link to="/">Portfolio</Link>
                        |
                <Link to="/blog">Blog</Link>
                        |
                <Link to="/about">About</Link>
            </span>


                <hr/>
            </div>
        </div>
    )
};
export default Header
