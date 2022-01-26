import { Link } from "react-router-dom";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
      <Link to="/quotes" className="btn">
        Back to quotes
      </Link>
    </figure>
  );
};

export default HighlightedQuote;
