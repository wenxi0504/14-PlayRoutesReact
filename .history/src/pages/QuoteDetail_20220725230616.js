import { Fragment } from "react";
import { useParams } from "react-router";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail </h1>
    </Fragment>
  );
};

export default QuoteDetail;
