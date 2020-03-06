import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
const Header = ()=>{
    return(
        <div className="header">
            <ul className="header__nav-link">
                <Link to ="/" className="header__router-Link"> <li> Welcome </li> </Link>
                <Link to ="/socialMedia" className="header__router-Link"> <li> Social Media Managers </li></Link>
                <Link to ="/developers" className ="header__router-Link"> <li> Developers </li> </Link>
            </ul>
        </div>
    )
}

export default Header;