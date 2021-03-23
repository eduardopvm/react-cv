import Grid from "@material-ui/core/Grid";

import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { Avatar } from "@material-ui/core";

export default function Layout(props) {
  console.log("Props: ", props);
  return (
    <Grid container>
      <Grid item xs="4">
        <Avatar></Avatar>
        <Sidebar data={props.data} />
      </Grid>
      <Grid item xs="8">
        <Header data={props.data.contact} />
        <MainContent data={props.data} />
      </Grid>
    </Grid>
  );
}
