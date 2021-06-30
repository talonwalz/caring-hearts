import React from 'react'
import './Pool.scss'
import poolImg from '../../images/caregiverFour.jpeg'

const Pool = () => {
    return (
        
        <main className="pool-container">
            <h1>Services Offered</h1>
            <img src={poolImg} alt="pool"/>
            <section className="aquatic-therapy">
                <p className="paragraph" > We provide exceptional and affordable in-home care. Our caregivers are reliable, fully screened, and experienced in providing the best care to your loved ones.</p>              
                <div className="pool-benefits">
                <details>
                    <summary>Live-in Caregivers</summary>
                    <p>Live-in caregivers are assigned to live with an older adult for a period of time and provide care directly in their own home.</p>
                </details>
                <details>
                    <summary>Dementia Care</summary>
                    <p>Dementia care is specialist support from a carer experienced in the specific challenges the condition presents.</p>
                </details>
                <details>
                    <summary>Grocery Shopping & Errands</summary>
                    <p>Our caregivers will support and aid in grocery shopping and other errands.</p>
                </details>
                <details>
                    <summary>Grooming Assistance</summary>
                    <p>Our caregivers are trained and experienced in assisting in all areas of personal hygiene assistance as required by the situation</p>
                </details>
                <details>
                    <summary>Dressing Assistance</summary>
                    <p>Our caregivers are trained and experienced in helping choose appropriate clothing and assisting with dressing as required by the situation.</p>
                </details>
                <details>
                    <summary>Escort on Outings</summary>
                    <p>Our caregivers are trained and experienced in escorting on outings as required by the situation.</p>
                </details>
                <details>
                    <summary>Personal Care</summary>
                    <p>Our caregivers are trained and experienced in assisting in all areas of personal care as required by the situation.</p>
                </details>
                <details>
                    <summary>Meal Preparation</summary>
                    <p>Our caregivers are trained and experienced in all areas of feeding assistance as well as meal preparation as required by the person’s physical or cognitive situation.</p>
                </details>
                <details>
                    <summary>Light Housekeeping</summary>
                    <p>A clean home, clothes, and fresh sheets are essential in maintaining the health, cleanliness, and the emotional well-being of the client and their family.</p>
                </details>
                <details>
                    <summary>Medication Reminders</summary>
                    <p>Our caregivers remind your loved one to take their medications at the correct time and record this on a Weekly Medication Schedule that the correct dose has been taken on time.</p>
                </details>
                <details>
                    <summary>Post-Surgery Care</summary>
                    <p>Our caregivers are trained and experienced in post-surgical care as required by the person’s physical or cognitive situation.</p>
                </details>
                </div>
            </section>
            
        </main>
        
    )
}

export default Pool