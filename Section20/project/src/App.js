import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Quotes from "./pages/Quotes";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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
      </Suspense>
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
