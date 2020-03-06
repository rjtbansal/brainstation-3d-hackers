import React from 'react';
import './Social.scss';
import socialMediaDashboard from '../../assets/images/PNG/social-media-dashboard.png';
const Social = () =>{
    return (
        <div>
                    {/* <iframe className="main-page__iframe" src="https://public.tableau.com/shared/JHZW4HP3S?:display_count=n&:origin=viz_share_link?:display_count=n&:origin=viz_share_link?:showVizHome=n:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link"></iframe> */}
             <img className="social-media-image" src={socialMediaDashboard} alt="social media dashboard" />
        </div>
    )
}

export default Social;
