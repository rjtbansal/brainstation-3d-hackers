import React from 'react';
import Header from './components/Header/Header'
import './App.scss';

import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>Your App Title Here</title>
      </Helmet>
      <Header/>
    </div>
  );
}

export default App;
