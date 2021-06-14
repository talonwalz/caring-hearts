import React from 'react'
import './Pool.scss'
import poolImg from '../../images/caregiverFour.jpeg'

const Pool = () => {
    return (
        // <section>
            
        //     <br/>
        //     <h3>Benefits</h3>
        // </section>
        <main className="pool-container">
            <h1>Services Offered</h1>
            <img src={poolImg} alt="pool"/>
            <section className="aquatic-therapy">
                <p>Aquatic Therapy is provided by our physical therapy staff in our multi-depth, therapeutic pool at Northern Arizona Rehabilitation & Fitness. It is offered as a modality in conjunction with land based therapy or by itself as the primary therapy if appropriate. Individuals can access the pool either by stairs or a hydraulic lift that uses a chair or stretcher. Depths range from 4 to 6 feet.</p>              
                <div className="pool-benefits">
                <details>
                    <summary>Live-in Caregivers</summary>
                    <p>Buoyancy offers a tremendous advantage because it reduces the effects of gravity allowing for increased joint range of motion. </p>
                </details>
                <details>
                    <summary>Dementia Care</summary>
                    <p>Water is 600-700 times more resistive than air which allows for strengthening of weakened muscles.</p>
                </details>
                <details>
                    <summary>Grocery Shopping & Errands</summary>
                    <p>Immersion in warm water increases an individual’s comfort, by increasing blood supply to sore muscles and promoting relaxation. Weight relief to weakened body structures also creates additional comfort.</p>
                </details>
                <details>
                    <summary>Grooming Assistance</summary>
                    <p>Water temperatures above 92 degrees in conjunction with hands on techniques are effective in creating neutral warmth that reduces increased tone due to a neurological injury.</p>
                </details>
                <details>
                    <summary>Dressing Assistance</summary>
                    <p>The uniform pressure of the water along with buoyancy provides support to your body which allows you increased time to react without the fear of falling or getting hurt.</p>
                </details>
                <details>
                    <summary>Escort on Outings</summary>
                    <p>The uniform pressure of the water along with buoyancy provides support to your body which allows you increased time to react without the fear of falling or getting hurt.</p>
                </details>
                <details>
                    <summary>Personal Care</summary>
                    <p>The uniform pressure of the water along with buoyancy provides support to your body which allows you increased time to react without the fear of falling or getting hurt.</p>
                </details>
                <details>
                    <summary>Meal Preparation</summary>
                    <p>The uniform pressure of the water along with buoyancy provides support to your body which allows you increased time to react without the fear of falling or getting hurt.</p>
                </details>
                <details>
                    <summary>Light Housekeeping</summary>
                    <p>The uniform pressure of the water along with buoyancy provides support to your body which allows you increased time to react without the fear of falling or getting hurt.</p>
                </details>
                <details>
                    <summary>Medication Reminders</summary>
                    <p>The uniform pressure of the water along with buoyancy provides support to your body which allows you increased time to react without the fear of falling or getting hurt.</p>
                </details>
                <details>
                    <summary>Respite Care</summary>
                    <p>The uniform pressure of the water along with buoyancy provides support to your body which allows you increased time to react without the fear of falling or getting hurt.</p>
                </details>
                <details>
                    <summary>Post-Surgery Care</summary>
                    <p>The uniform pressure of the water along with buoyancy provides support to your body which allows you increased time to react without the fear of falling or getting hurt.</p>
                </details>
                </div>
            </section>
            
        </main>
        
    )
}

export default Pool