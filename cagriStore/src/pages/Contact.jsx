import React from 'react'
import Header from '../layout/Header'
import Footer from '../components/Footer'
import ContactMeet from '../components/ContactMeet'
import ContactUs from '../components/ContactUs'
import ContactBar from '../components/ContactBar'
 

function Contact() {
    return (
        <div>
            <Header />
             
            <ContactUs />
            <ContactBar />
            <ContactMeet />
            
            <Footer />
        </div>
    )
}

export default Contact