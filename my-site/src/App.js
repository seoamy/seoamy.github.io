import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ReactRouterGlobalHistory } from "react-router-global-history";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import styled from "styled-components";
import "./App.css"

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
          <Route exact path="/experience">
            <Experience></Experience>
          </Route>
          <Route exact path="/projects">
            <Projects></Projects>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
