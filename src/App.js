import './App.css';
import About from './components/about'

import Projects from './components/projects'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
 
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={About}/>
      </Switch>

    </div>
  );
}

export default App;
