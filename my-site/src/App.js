import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ReactRouterGlobalHistory } from "react-router-global-history";
import Landing from "./pages/Landing";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Music from "./pages/Music";
import Photography from "./pages/Photography";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <ReactRouterGlobalHistory />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing></Landing>
          </Route>
          <Route exact path="/resume">
            <Resume></Resume>
          </Route>
          <Route exact path="/projects">
            <Projects></Projects>
          </Route>
          <Route exact path="/music">
            <Music></Music>
          </Route>
          <Route exact path="/photography">
            <Photography></Photography>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
