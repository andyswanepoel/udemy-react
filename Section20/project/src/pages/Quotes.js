import QuoteList from "../components/quotes/QuoteList";
import { quotesData } from "../quotesData";

const Quotes = () => {
  return <QuoteList quotes={quotesData} />;
};

export default Quotes;
