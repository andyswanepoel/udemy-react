import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome" component={Welcome} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={ProductDetail} />
        </Switch>
      </main>
    </>
  );
}

export default App;
