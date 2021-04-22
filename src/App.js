import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Page from "./main_content/Page";

export default function App() {
  return (
    // <Router>
    //     <Switch>
    //       <Route path="/" component={Page} />
    //     </Switch>
    // </Router>
    <Page />
  );
}
