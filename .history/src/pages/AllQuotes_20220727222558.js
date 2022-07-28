import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const AllQuotes = () => {
  // data:loadedQuotes is alias
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

useEffect(() => { }, []
sendRequest();)

export default AllQuotes;
