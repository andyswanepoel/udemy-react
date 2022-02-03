import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NoQuotesFound } from "../components/quotes";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const Quotes = () => {
  const {
    sendRequest,
    status,
    data: quotes,
    error
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!quotes || quotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={quotes} />;
};

export default Quotes;
