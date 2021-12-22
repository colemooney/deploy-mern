import "./quote.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuotePage from "./pages/QuotePage";
import SingleQuotePage from "./pages/SingleQuotePage"
// import Quote from "./component/quote";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <QuotePage />
          
        </Route>
        <Route path="/id:/get">
          <SingleQuotePage />
          
        </Route>
      </Router>
    </div>
  );
}

export default App;
