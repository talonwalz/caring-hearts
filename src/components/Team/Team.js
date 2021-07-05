import React from 'react'
// import dan2 from '../../images/dan2.jpg'
import './Team.scss'

const Team = () => {
    return (
        <main className="team-container">
            <h1>Our Team</h1>
            <section className="person">
            {/* <img src={dan2} alt="Dave Roberts"/> */}
            <article>
                <h2>Dave Roberts</h2><h3> Administrator</h3>
                <br/>
                <p>David Roberts has been involved in the Health Care and Disability industry since 2007. He has worked with some of the largest Health Care Organizations and Disability Law Firms in the country specializing in Medicare and Medicaid coverage. After years of working in the Disability world David met with Jared Tolman and would later assist him in providing In Home Care Services with Caring Hearts throughout the entire state of Utah.
                </p>
            </article>    
            </section>
            <section className="person">
            {/* <img src={dan2} alt="Dave Roberts"/> */}
            <article>
                <h2>Jared Tolman</h2><h3> Owner & Operations</h3>
                <br/>
                <p>Jared Tolman was the owner and operator of 2 highly successful Assisted Living Centers in Idaho. After years of running these centers Jared was inspired to create a company that's sole focus was to provide the highest standard of one on one care. This idea turned into Caring Hearts, a company that would provide the means for people to live their best lives while in the comfort of their own homes. 21 years later Caring Hearts continues to provide the highest quality of care and comfort with an incredible staff of Caregivers. 
                </p>
            </article>    
            </section>
        </main>
    )
}

export default Team