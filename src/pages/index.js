import React from "react"
import "./index.styles.scss"
import Layout from "../components/layout";
import myportfolio from "../components/myportfolio";

function showPortfolio() {
    return  myportfolio.map(({title, sinopsis, idx, desc, repo, live,img}) => {
        console.log(title);
        return (


            <div key={'div' + idx} className="tab">
                <input key={'index' + idx}  type="checkbox" id={idx + title}/>
                <label key={'label' + idx}  className="tab-label" form={idx + title}>
                    <span key={'pTit' + idx} className='folio-title'>{title} </span>
                    <span key={'dot' + idx} className='folio-title'>· </span>
                    <span  key={'pSinop' + idx} className='folio-sinopsis'>{sinopsis}</span></label>
                    <div key={'tab' + idx} class="tab-content">
                    <img alt="nicasia" src={img}/>
                    {desc}
                    <span className="repolinks" key={'repo' + idx}><a key={'repoLink' + idx} href={repo} >Check it Live!
                    </a></span>


                </div>
            </div>


        )
    })
}

const Index = () =>{
    return (
        <Layout>
            <h1 className="opener">Portfolio</h1>
            <p className="subtitle">Here are a few of my projects. For more projects and repositories,
                check my <a href="https://github.com/JoseOgam">GitHub</a></p>
            {showPortfolio()}
        </Layout>
    )
};
export default Index