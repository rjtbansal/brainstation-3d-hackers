import React from 'react';
import './Welcome.scss';
import canadaFlag from '../../assets/images/PNG/canada-flag.png';
import arGlasses from '../../assets/images/PNG/ar-glasses.png';
import cube from '../../assets/images/PNG/cube.png';

const Main = () => {
    return(
        <div className="welcome">
            {/* <h1>Home</h1> */}
            <img className="welcome__image" src={canadaFlag} alt="canada flag image" />
            <div className="welcome__title-div">
                <h2 className="welcome__title">BUSINESS TECH TRENDS</h2>
            </div>
            <section className="welcome__section">
                <div>
                    <img src={arGlasses} alt="ar glasses image" />
                    <p className="welcome__text">Were you always wondering, 
                        “jeeze, I wish I knew which province had the greatest job opportunities for social media managers”?
                    </p>
                </div>
                <div>
                    <h3 className="welcome__text2">Welcome</h3>
                </div>
                <div>
                    <img src = {cube} alt="cube-icon" />
                    <p className="welcome__text">
                    Well, you came to the right place. This website allows you to see digital tech trends in various industries across all of Canada!
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Main;