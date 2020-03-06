import React from 'react';
import './Footer.scss';
import influz from '../../assets/influz.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twit.png';

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer__div footer__influenzas">
                <img className="logo" src ={influz}/>
                <h4>INFLUENZAS</h4>
                <p>&copy; 2020 INFLUENZA LABS</p>

            </div>
            <div className="footer__div footer__platform">
                <h4>PLATFORM</h4>
                <p>Influencers</p>
                <p>Brands</p>
            </div>
            <div className="footer__div footer__company">
                <h4>COMPANY</h4>
                <p>About</p>
                <p>Careers</p>

            </div>
            <div className="footer__div footer__contact">
                <h4>CONTACT</h4>
                <p>Have a question? Reach us at:</p>
                <a href ="http://support@influenzas.com">support@influencers.com</a>

            </div>
            <div className="footer__div footer_social">
                <a href="https://www.facebook.com/"><img src={facebook}/></a>
                <a href="https://www.twitter.com/"><img src={twitter}/></a>
                
            </div>

        </div>
    )
}

export default Footer;