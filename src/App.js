import logo from "./logo.svg";
import "./App.css";
import Home from './Pages/HomeScreen/Home'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./component/navbar.component";
import WelcomePage from './Pages/welcome/welcome.page'
import { AboutPage } from "./Pages/about/about.page";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>

        <Switch>
          <Route exact path="/">
            <WelcomePage/>
          </Route>

          <Route path="/about">
            <AboutPage/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
