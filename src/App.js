import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import './App.scss';
import logo from './images/logo-2.png'

import Products from './components/products/Products';
import HowToOrder from './components/howToOrder/HowToOrder';
import Manufactures from './components/manufactures/Manufactures';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Culc from './components/culc/Culc';
import Callback from './components/callback/Callback';
import Measuring from './components/measuring/Measuring';

import Gates from './components/gates/Gates';
import Garage from '././components/gates/gateKinds/garage/Garage';
import Industrial from './components/gates/gateKinds/industrial/Industrial';
import DoubleLeaf from './components/gates/gateKinds/doubleLeaf/DoubleLeaf';
import Sliding from './components/gates/gateKinds/sliding/Sliding';
import Panoramic from './components/gates/gateKinds/panoramic/Panoramic';
import Fast from './components/gates/gateKinds/fast/Fast';
import Wicket from './components/gates/gateKinds/wicket/Wicket';
import FasadeWicket from './components/gates/gateKinds/fasadeWicket/FasadeWicket';

import Automation from './components/automation/Automation';
import AutoDoor from './components/automaticDoor/AutoDoor';

import Rollets from './components/rollets/Rollets';
import StandartRollets from './components/rollets/standartRollets/StandartRollets';
import RolletsGrid from './components/rollets/rolletsGrid/RolletsGrid';
import RolletsGates from './components/rollets/rolletsGates/RolletsGates';
import TransparentRollet from './components/rollets/transparentRollet/TransparentRollet';

import PlasticConstructions from './components/plasticConstuctions/PlasticConstructions';
import PlasticWindow from './components/plasticConstuctions/plasticWindow/PlasticWindow';
import PlasticWall from './components/plasticConstuctions/plasticWall/PlasticWall';
import PlasticDoor from './components/plasticConstuctions/plasticDoor/PlasticDoor';



function App() {
  return (
    <div className="App">
    <Router>
     <div>
      <section className="titlePanel">
        <div className="container">
          <div className="logoButtons">
            <img src={logo} alt="лого"/>

            <div className="mainButtons">
              <NavLink to="/culc">калькулятор</NavLink>
              <NavLink to="/measuring">заказать бесплатный замер</NavLink>
              <NavLink to="/callback">заказать обратный звонок</NavLink> 
            </div>

          </div>
        </div>
      </section>

      <section className="navMenu">
        <div className="container">
        
          <nav>
                  <NavLink className="nav-link" to="/products">Продукция</NavLink>
                  <NavLink className="nav-link" to="/howToOrder">Как заказать</NavLink>
                  <NavLink className="nav-link" to="/manufactures">Производители</NavLink>
                  <NavLink className="nav-link" to="/projects">Наши обьекты</NavLink>
                  <NavLink className="nav-link" to="/contact">Контакты</NavLink>    
          </nav>
        </div>
      </section>
      
      
      {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/howToOrder">
              <HowToOrder />
            </Route>
            <Route path="/manufactures">
              <Manufactures />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/culc">
              <Culc />
            </Route>
            <Route path="/callback">
              <Callback />
            </Route>
            <Route path="/measuring">
              <Measuring />
            </Route>
            <Route path="/gates">
              <Gates />
            </Route>
            <Route path="/garage">
              <Garage />
            </Route>
            <Route path="/industrial">
              <Industrial />
            </Route>
            <Route path="/doubleLeaf">
              <DoubleLeaf />
            </Route>
            <Route path="/sliding">
              <Sliding />
            </Route>
            <Route path="/panoramic">
              <Panoramic />
            </Route>
            <Route path="/fast">
              <Fast />
            </Route>
            <Route path="/wicket">
              <Wicket />
            </Route>
            <Route path="/fasadeWicket">
              <FasadeWicket />
            </Route>
            <Route path="/automation">
              <Automation />
            </Route>
            <Route path="/rollets">
              <Rollets />
            </Route>
            <Route path="/standartRollets">
              <StandartRollets />
            </Route>
            <Route path="/rolletsGrid">
              <RolletsGrid />
            </Route>
            <Route path="/rolletsGates">
              <RolletsGates />
            </Route>
            <Route path="/transparentRollet">
              <TransparentRollet />
            </Route>
            <Route path="/plasticConstructions">
              <PlasticConstructions />
            </Route>
            <Route path="/plasticWindow">
              <PlasticWindow />
            </Route>
            <Route path="/plasticWall">
              <PlasticWall />
            </Route>
            <Route path="/plasticDoor">
              <PlasticDoor />
            </Route>
            <Route path="/automaticDoor">
              <AutoDoor />
            </Route>
            <Route path="/">
              <Products />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
