import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
