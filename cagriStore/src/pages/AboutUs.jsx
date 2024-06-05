import React from 'react'
import Header from '../layout/Header'
import Footer from '../components/generalComponents/Footer'
import AboutUsHeader from '../components/aboutPageComponents/AboutUsHeader'
import AboutUsContent from '../components/aboutPageComponents/AboutUsContent'
import AboutUsStat from '../components/aboutPageComponents/AboutUsStat'
import AboutUsCompanies from '../components/aboutPageComponents/AboutUsCompanies'

function AboutUs() {
    return (
        <div>
            <Header />
            <AboutUsHeader />
            <AboutUsContent />
            <AboutUsStat />
            {/* buraya video gelcek */}
            <AboutUsCompanies />
            {/* buraya video gelcek */}


            <Footer />
        </div>
    )
}

export default AboutUs