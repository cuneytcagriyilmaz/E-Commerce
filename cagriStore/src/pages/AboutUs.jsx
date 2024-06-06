import React from 'react'
import Header from '../layout/Header'
import Footer from '../components/generalComponents/Footer'
import AboutUsHeader from '../components/aboutPageComponents/AboutUsHeader'
import AboutUsContent from '../components/aboutPageComponents/AboutUsContent'
import AboutUsStat from '../components/aboutPageComponents/AboutUsStat'
import AboutUsCompanies from '../components/aboutPageComponents/AboutUsCompanies'
import AboutUsVideo from '../components/aboutPageComponents/AboutUsVideo'
import AboutUsMeetOurTeam from '../components/aboutPageComponents/AboutUsMeetOurTeam'
import AboutUsLastHeader from '../components/aboutPageComponents/AboutUsLastHeader'

function AboutUs() {
    return (
        <div>
            <Header />
            <AboutUsHeader />
            <AboutUsContent />
            <AboutUsStat />
            <AboutUsVideo />
            <AboutUsMeetOurTeam />
            <AboutUsCompanies />
            <AboutUsLastHeader />
        



            <Footer />
        </div>
    )
}

export default AboutUs