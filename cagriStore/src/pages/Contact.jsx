import React from 'react'
import Header from '../layout/Header'
import Footer from '../components/generalComponents/Footer'
import ContactMeet from '../components/contactPageComponents/ContactMeet'
import ContactUs from '../components/contactPageComponents/ContactUs'
import ContactBar from '../components/contactPageComponents/ContactBar'
 

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