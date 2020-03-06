import React from 'react';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.scss';

import { Helmet } from 'react-helmet';

function App() {
  const HomePage = ()=>{
    return(
        <Main/>
    )
  }
  const SideBarPage = () => {
    return(
        <SideBar/>
    )
  }
  return (
    <div className="App">
      <BrowserRouter>
        {/* NOTE: Keep the helmet code below and change the app title.
            Add any meta tags you want, or any tag you want to go in the header. 
            You can modify everything else! */}
        <Helmet>
          <title>Your App Title Here</title>
        </Helmet>
        <Header/>
        <Switch>
          <Route exact path= "/" component={HomePage} />
          <Route path ="/sidebar" component ={SideBarPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
