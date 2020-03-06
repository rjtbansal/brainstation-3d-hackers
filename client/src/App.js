import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Welcome/Welcome';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.scss';
import  Helmet  from 'react-helmet';
import Social from './components/Social/Social';
import Developers from './components/Developers/Developers';

function App() {
  const HomePage = ()=>{
    return(
        <Main/>
    )
  }
 
  const SocialPage = () =>{
    return(
      <Social/>
    )
  }
  const DevelopersPage = () =>{
    return(
      <Developers/>
    )
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Helmet>
          <title>Your App Title Here</title>
        </Helmet>
        <Header/>
        <Switch>
          <Route exact path= "/" component={HomePage} />
          <Route path ="/socialMedia" component ={SocialPage} />
          <Route path ="/developers" component ={DevelopersPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
