import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
const Header = ()=>{
    return(
        <div className="header">
            <ul className="header__nav-link">
                <Link to ="/" className="header__router-Link"> <li> PlaceHolder </li> </Link>
                <Link to ="/sidebar" className="header__router-Link"> <li> PlaceHolder </li></Link>
                <li> PlaceHolder </li>
                <li> PlaceHolder </li>
            </ul>
        </div>
    )
}

export default Header;