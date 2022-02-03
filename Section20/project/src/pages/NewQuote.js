import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";

import { addQuote } from "../lib/api";

import { QuoteForm } from "../components/quotes";
import { useEffect } from "react";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === "pending"} />
  );
};

export default NewQuote;
