import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Page from "./main_content/Page";

export default function App() {
  return (
    <Router>
      <Page />
    </Router>
  );
}
