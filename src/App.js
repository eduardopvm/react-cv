import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Homepage from "./main_content/Homepage";

export default function App() {
  return (
    <Router>
      <Homepage />
    </Router>
  );
}
