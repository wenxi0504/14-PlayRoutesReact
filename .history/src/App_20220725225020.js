import { Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Switch>
      <Route path="/quotes" ex>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <NewQuote />
      </Route>
      <Route path="/new-quote">
        <QuoteDetail />
      </Route>
    </Switch>
  );
}

export default App;
