import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    // // push new page,will allow to go back
    // history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
  // push new page,will allow to go back
};

export default NewQuote;
