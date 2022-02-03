import { Fragment, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.author > quoteB.author ? 1 : -1;
    } else {
      return quoteA.author < quoteB.author ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscended = queryParams.get("sort") === "asc";

  const sortingHandler = () => {
    history.push({
      pathname: location.pathname,
      hash: "this",
      search: `sort=${isSortingAscended ? "desc" : "asc"}`
    });
  };

  const sortedQuotes = useMemo(() => {
    return sortQuotes(props.quotes, isSortingAscended);
  }, [props.quotes, isSortingAscended]);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>
          Sort {isSortingAscended ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
