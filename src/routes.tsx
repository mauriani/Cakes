import { Route, Switch } from "react-router-dom";

// Importando pages
import Home from "./pages/Home";
import Catalog from "./pages/Catalog/Catalog";
import Cart from "./pages/Cart/Cart";
import Ourstory from "./pages/Ourstory";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/catalog" component={Catalog}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route path="/story" component={Ourstory}></Route>
    </Switch>
  );
};

export default Routes;
