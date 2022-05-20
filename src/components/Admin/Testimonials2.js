import React, { useState, useEffect } from 'react'
import './Testimonials.scss'

const Testimonials2 = (props) => {
    const [ post, setPost ] = useState('')
    const [updatePost, setUpdatePost ] = useState('')
    const [ testimonials, setTestimonials ] = useState([])
    const [edit, setEdit ] = useState(false)


    function addTestimonial() {
        axios.post('/api/testimonials', {post})
        .then(res => {
            console.log(res.data)
            props.updateSuccessStories(res.data)
            setTestimonials(res.data)
            setPost('')
            
        })
        .catch(err => console.log(err))
    }

    function deleteTestimonial(id) {
        axios.delete(`/api/testimonials/${id}`)
        .then(res => {
            setTestimonials(res.data)
        })
        .catch(err => console.log(err))
    }

    function editTestimonial(id) {
        axios.put(`/api/testimonials/${id}`, {updatePost})
        .then(res => {
            setTestimonials(res.data)
            setPost('')
            setEdit(!edit)
        })
        .catch(err => console.log(err))
    }

    const mappedTestimonials = testimonials.map(t => {
        return (
            <article className="post" key={t.post_id}>
                { edit ? (<textarea type="text" onChange={e=>setUpdatePost(e.target.value)}></textarea>) : null }
                <p>{t.post}</p>
                <div>
                {edit ? <button className="altBtn" onClick={()=> editTestimonial(t.post_id)}>Update</button> :<button className="altBtn" onClick={()=> deleteTestimonial(t.post_id)}>Delete</button> }
                <button className="altBtn" onClick={()=> setEdit(!edit)}>Edit</button>
                </div>
            </article>
        )
    })

    return (
        <section className="testimonial-container">
            <h1>Testimonials</h1>
            <textarea type="text" value={post} placeholder="Add testimonial" onChange={e=>setPost(e.target.value)}/>
            <div className="btn-div">
            <button className="altBtn" onClick={addTestimonial}>Submit</button>
            </div>
            {mappedTestimonials}     
        </section>
    )
}

export default Testimonials2