import { Redirect, Route, Switch } from "react-router-dom";
import { Quotes, QuoteDetails, NewQuote, NotFound } from "./pages";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes">
          <Quotes />
        </Route>
        <Route path="/quotes/:id">
          <QuoteDetails />
        </Route>
        <Route path="/add-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

// <div>
//   {/*
//     - All quotes
//     - quote detail for single quote
//     - Adding new quote
//   */}
// </div>
