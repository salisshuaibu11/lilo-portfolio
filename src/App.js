import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Contact from "./pages/Contact";
import Catalogue from "./pages/Catalogue";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/Project-Detail";
import About from "./pages/About";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/catalogue'>
            <Catalogue />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/project/:projectId'>
            <ProjectDetails />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Redirect to='/' />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
