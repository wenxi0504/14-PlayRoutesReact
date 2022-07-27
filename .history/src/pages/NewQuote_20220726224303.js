import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  // push new page,will allow to go back
  history.push("/quotes");

  return <QuoteForm onAddQuote={addQuoteHandler} />;
  // push new page,will allow to go back
};

export default NewQuote;
