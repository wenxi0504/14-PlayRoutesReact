import { Fragment } from "react";
import { useParams, Route } from "react-router";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Details </h1>
      <p>Wen xu</p>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
