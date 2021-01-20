import { Route, Switch } from "react-router-dom";

// Importando pages
import Home from "./pages/Home";
import Catalog from "./pages/Catalog/Catalog";
import Cart from "./pages/Cart/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/catalog" component={Catalog}></Route>
      <Route path="/cart" component={Cart}></Route>
    </Switch>
  );
};

export default Routes;
