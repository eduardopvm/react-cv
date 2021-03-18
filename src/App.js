import React from "react";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Layout from "./Layout";

export default function App() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Card>
          <CardContent>
            <Layout/>
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}
