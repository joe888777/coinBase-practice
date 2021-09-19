import Home from "./page/Home";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Favorite from "./page/Favorite";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
