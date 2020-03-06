import React from 'react';
import './Main.scss';


const Main = () => {
    return(
        // <h1>This is Main page </h1>
        <div className="main-page">
            <iframe className="main-page__iframe" src="https://public.tableau.com/shared/9SYCPN5YB?:display_count=n&:origin=viz_share_link?:showVizHome=n:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link"></iframe>
        </div>
    )
}

export default Main;