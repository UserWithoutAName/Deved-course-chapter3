import home1 from '../img/home1.png'

const AboutSection = () => {
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>I work to make </h2>
                    </div>
                    <div className="hide">
                        <h2>me <span>better</span> to </h2>
                    </div>
                    <div className="hide">
                        <h2>React </h2>
                    </div>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="guy with a camera"/>
            </div>
        </div>
    )
}

export default AboutSection;