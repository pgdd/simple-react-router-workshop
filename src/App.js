import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './components/Home'
import Html from './components/Html'
import Css from './components/Css'
import Js from './components/Js'

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/html' component={Html} />
          <Route path='/css' component={Css} />
          <Route path='/js' component={Js} />
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
