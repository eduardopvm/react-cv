import React from "react";

import ProfissionalProfile from "./ProfissionalProfile";
import WorkHistory from "./WorkHistory";

export default function MainContent(props) {
  return (
    <React.Fragment>
      <ProfissionalProfile profileText={props.data.profile} />
      <WorkHistory history={props.data.history} />
    </React.Fragment>
  );
}
