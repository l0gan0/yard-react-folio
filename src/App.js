import React from 'react';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Switch, Route, useLocation } from 'react-router-dom';
import './App.scss';
import './design-tokens/scss-variables.scss'; 

import Home from './components/pages/Home';
import Work from './components/pages/Work';
import WorkDetail from './components/pages/WorkDetail';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import Footer from './components/Footer';

function App() {

  const location = useLocation();

  return (
    <> 
        <React.StrictMode>
        <Navbar />
    
         
            <Switch location={location} key={location.key}>
              <Route path='/' exact component={Home} />
              <Route path='/work' exact component={Work} />
              <Route path='/work/infusion-brewing' exact component={WorkDetail} />
              <Route path='/services' exact component={Services} />
              <Route path='/about' exact component={About} />
              <Route path='/contact' exact component={Contact} />
            </Switch>

          <Footer /> 
    
          </React.StrictMode>
    </>
    
  );
}

export default App;
