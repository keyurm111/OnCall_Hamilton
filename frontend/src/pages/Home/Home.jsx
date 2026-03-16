import React from 'react'
import Hero from '../../components/Hero/Hero'
import Welcome from '../../components/Welcome/Welcome'

import StickyCols from '../../components/StickyCols/StickyCols'
import Gallery from '../../components/Gallery/Gallery'
import WhyChoose from '../../components/WhyChoose/WhyChoose'
import MarqueeText from '../../components/Marquee/MarqueeText'
import MarqueeSticky from '../../components/Layouts/MarqueeSticky'
import MapLink from '../../components/MapLink/MapLink'
import Activities from '../../components/Activities/Activities'
import Showcase from '../../components/Showcase/Showcase'
import Feedback from '../../components/Feedback/Feedback'
import HomeBlog from '../../components/HomeBlog/HomeBlog'
import FooterBanner from '../../components/FooterBanner/FooterBanner'

const Home = () => {
    return (
        <div>
            <Hero />
            <Welcome />

            <Gallery />
            <WhyChoose />
            {/* <MapLink /> */}
            <MarqueeSticky />
            <StickyCols />
            {/* <Activities />
            <Showcase /> */}
            <Feedback />
            <HomeBlog />
        </div >
    )
}

export default Home