import { Fragment } from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const changeSortingHanding = () => {};
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHanding}>Sort Ascending </button>
        <ul className={classes.list}>
          {props.quotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default QuoteList;
