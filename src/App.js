import "./App.css";
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/home'
import Nav from "./components/nav";
import About from "./components/about";
import Projects from "./components/projects";

function App() {

  return (
    <div className="App">
      <Nav />
      {/* <Home /> */}
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={About} />
      </Switch>
    </div>
  );
}

export default App;
