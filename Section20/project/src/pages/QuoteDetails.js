import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

import { quotesData } from "../quotesData";

const QuoteDetails = () => {
  const { id } = useParams();

  const selectedQuote = quotesData.find((quote) => quote.id === +id);

  console.log(selectedQuote);
  return (
    <>
      {selectedQuote !== undefined ? (
        <HighlightedQuote
          text={selectedQuote.text}
          author={selectedQuote.author}
        />
      ) : (
        <NoQuotesFound />
      )}

      <Route path="/quotes/:id/comments">
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
