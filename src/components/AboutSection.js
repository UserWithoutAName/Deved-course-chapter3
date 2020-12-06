import home1 from '../img/home1.png'
import styled from 'styled-components'
import {About, Description, Image, Hide} from '../styles'

const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>I work to make </h2>
                    </Hide>
                    <Hide>
                        <h2>me <span>better</span> to </h2>
                    </Hide>
                    <Hide>
                        <h2>React </h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera"/>
            </Image>
        </About>
    )
}



export default AboutSection;