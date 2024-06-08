import React from 'react'
import Header from '../layout/Header'
import TeamHeaderComponents from '../components/teamPageComponents/TeamHeaderComponents'
import TeamPageHero from '../components/teamPageComponents/TeamPageHero'
import MeetOutTeamList from '../components/teamPageComponents/MeetOutTeamList'
import Footer from '../components/generalComponents/Footer'
import FreeTrial from '../components/generalComponents/FreeTrial'

/**
 * 
 * 
 * shop'U AYARLA
 * SLIDER'I AYARLA IKINCI FITIYU BUL.
 * SIGN UP ICIN BOŞ BIRSEY AYARLA
 */
function Team() {
  return (
    <div>
      <Header />
      <TeamHeaderComponents />
      <TeamPageHero />
      <MeetOutTeamList />
      <FreeTrial />

      <Footer />
    </div>
  )
}

export default Team