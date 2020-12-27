import react from "react";
import "./App.css";
import Home from './components/Home';
import Todos from './components/Todos';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App" >
    <Router >
    <Nav />
    <hr/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/todos' exact component={Todos}/>
      </Switch>
    </Router>
  <hr/>

    <Footer />
    </div>
  );
}

export default App;
