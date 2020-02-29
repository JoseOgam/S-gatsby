import React from "react"
import {Link} from "gatsby";
import Header from "../components/header"
import "../styles/index.css"
import Layout from "../components/layout";

const Index = () =>{
    return (
        <Layout>
            <h1 className="opener">Portfolio</h1>
            <p className="subtitle">Here are a few of my projects. For more projects and repositories,
                check my <a href="https://github.com/JoseOgam">GitHub</a></p>
        </Layout>
    )
};
export default Index