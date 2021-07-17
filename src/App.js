import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div className="app">
	  	<Router>
		    <Navigation />
		    <Switch>
		    	<Route path='/' exact>
			      <Home />
		      </Route>
		    	<Route path='/projects' exact>
			      <Projects />
		      </Route>
		      <Redirect to='/' />
		    </Switch>
		    <Footer />
	  	</Router>
    </div>
  );
}

export default App;
