import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  console.log(location);
  const queryParams = new URLSearchParams(location.search);
  // key is sort
  const isSortingAscending = queryParams.get("sort");

  const changeSortingHanding = () => {
    history.push("/quotes?sort=asc");
  };
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
