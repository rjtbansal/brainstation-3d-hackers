import React from 'react';
import './Developers.scss';
import developersImage from '../../assets/images/PNG/developers-dashboard.png'
const Developers = () =>{
    return (
        <div className="developers">
            {/* <iframe className="developers__iframe" src="https://public.tableau.com/shared/9SYCPN5YB?:display_count=n&:origin=viz_share_link?:showVizHome=n:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link"></iframe> */}
            <img className="developers__image" src={developersImage} alt="developers-image" />
        </div>
    )
}

export default Developers;