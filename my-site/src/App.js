import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
        <div className="footer">Made with ♡ by Amy</div>
      </div>
    </Router>
  );
}

export default App;
