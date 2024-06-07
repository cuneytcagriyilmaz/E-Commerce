import React from 'react'
import Header from '../layout/Header'
import Footer from '../components/generalComponents/Footer'
import PricingHeader from '../components/pricingPageComponents/PricingHeader'
import PricingHero from '../components/pricingPageComponents/PricingHero'
import BrandLogos from '../components/contactPageComponents/BrandLogos'
import FreeTrial from '../components/generalComponents/FreeTrial'
import FAQ from '../components/pricingPageComponents/FAQ'
function Pricing() {
    return (
        <div>
            <Header />
            <PricingHeader />
            <PricingHero />
            <h1 className='text-center text-xl text-textColorDarkGray bg-mainBackgroundWhite font-bold pt-16'>Trusted By Over 4000 Big Companies</h1>
            <BrandLogos />
            <FAQ />
            <FreeTrial showIcon={false} />
            <Footer />
        </div>
    )
}

export default Pricing