import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ReactRouterGlobalHistory } from "react-router-global-history";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <ReactRouterGlobalHistory />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
      <div className="footer">Made with ♡ by Amy</div>
    </div>


  );
}

export default App;
