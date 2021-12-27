import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className='contact-container' id='Contact'>
            <h1>Contact Me</h1>
            <div className="border-top"></div>
            <p>Currently available for work</p>
            <button ><a href = "mailto: fhuangasuna@gmail.com"><i class="fas fa-envelope-square"></i> Send Email</a></button>


        </div>
    )
}

export default Contact
