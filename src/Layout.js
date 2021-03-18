import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";

export default function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Grid container>
        <Grid item lg={3}>
          <List>
            <Typography variant="h4">Social</Typography>
            <Divider />
            <ListItem>
              <GoMarkGithub />
              <ListItemText>
                <Link href="https://github.com/eduardopvm">Github</Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <FaLinkedin />
              <ListItemText>
                <Link href="https://www.linkedin.com/in/eduardo-pvm/">
                  LinkedIn
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <FaFacebookSquare />
              <ListItemText>
                <Link href="#">Facebook</Link>
              </ListItemText>
            </ListItem>
            <Divider />
          </List>
        </Grid>
        <Grid item lg={9}>
          <Typography variant="h4">Profile</Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eu ligula sed tellus euismod sollicitudin vitae quis elit. Mauris at
            ligula varius nibh maximus tincidunt. Ut lacinia erat eget felis
            sollicitudin, eu venenatis ex ultrices. Donec nec molestie leo, vel
            viverra eros. Pellentesque sagittis mollis tortor, nec pharetra leo
            pulvinar quis. Aliquam ut tellus varius, pretium ante eget, aliquam
            arcu. Nullam in dolor sit amet ligula fermentum viverra vel sed
            augue. Etiam consequat efficitur faucibus. Fusce egestas tincidunt
            euismod. Cras erat risus, efficitur id metus facilisis, faucibus
            egestas magna. Sed ornare gravida aliquet.
          </p>
          <Typography variant="h4">Work History</Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eu ligula sed tellus euismod sollicitudin vitae quis elit.
          </p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </Grid>
      </Grid>
    </React.Fragment>
    // <div className="App">
    //   <header className="cv-header">
    //     {/* <span className="cv-photo">Photo</span> */}
    //     <h1>Eduardo Palma Vieira de Moraes</h1>
    //     <h3>Full Stack Developer</h3>
    //     <div className="cv-basic-info">Basic Info Panel</div>
    //   </header>

    //   <div className="cv-container">
    //     <div className="cv-sidebar">
    //       <h4>Sidebar</h4>
    //       <div className="cv-social-media">
    //         <h5>Social Media</h5>
    //         <ul>
    //           <li>Github link</li>
    //           <li>Linkedin link</li>
    //         </ul>
    //         <h5>Skills</h5>
    //         <ul>
    //           <li>React</li>
    //           <li>Node.js</li>
    //           <li>Express</li>
    //           <li>MongoDB</li>
    //         </ul>
    //         <h5>Education</h5>
    //         ...
    //         <h5>Certificates</h5>
    //         ...
    //       </div>
    //     </div>
    //     <div className="cv-content">
    //       <h4>Content</h4>
    //     </div>
    //   </div>
    // </div>
  );
}
