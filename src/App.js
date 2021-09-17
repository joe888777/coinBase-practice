import logo from './logo.svg';
import { useEffect } from 'react';
import Home from './page/Home';
import Product from './components/ProductDetail';
import Nav from './components/Nav';
import { Route,Switch } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Favorite from './page/Favorite';
function App() {
  return (
    <div>
      <GlobalStyle/>
      <Nav/>
      <Switch >
      <Route path='/favorite'>
        <Favorite/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
