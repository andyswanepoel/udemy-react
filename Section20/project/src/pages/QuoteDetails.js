import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import { Comments } from "../components/comments/";
import { HighlightedQuote, NoQuotesFound } from "../components/quotes";

import { quotesData } from "../quotesData";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetails = () => {
  const match = useRouteMatch();
  const { id } = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (status === "completed" && !loadedQuote.text) {
    <p className="centered">No quote found.</p>;
  }
  return (
    <>
      {loadedQuote !== undefined ? (
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      ) : (
        <NoQuotesFound />
      )}
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments...
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
