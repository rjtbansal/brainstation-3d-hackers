import React from 'react';
import Header from './components/Header/Header'
import './App.scss';
import  Helmet  from 'react-helmet';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Your App Title Here</title>
      </Helmet>
      <Header />
      <Main />
    </div>
  );
}

export default App;
