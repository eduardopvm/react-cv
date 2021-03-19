import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

export default function Sidebar() {
  return (
    <Grid item xs={3}>
      <List>
        <Typography variant="h4">Social</Typography>
        <Divider component="li" variant="middle" />
        <ListItem>
          <GoMarkGithub style={{ fontSize: 30 }} />
          <ListItemText>
            <Link href="https://github.com/eduardopvm">Github</Link>
          </ListItemText>
        </ListItem>
        <Divider component="li" variant="middle" />
        <ListItem>
          <FaLinkedin style={{ fontSize: 30 }} />
          <ListItemText>
            <Link href="https://www.linkedin.com/in/eduardo-pvm/">
              LinkedIn
            </Link>
          </ListItemText>
        </ListItem>
        <Divider component="li" variant="middle" />
        <ListItem>
          <FaFacebookSquare style={{ fontSize: 30 }} />
          <ListItemText>
            <Link href="#">Facebook</Link>
          </ListItemText>
        </ListItem>
        <Divider component="li" variant="middle" />
      </List>

      <Box>
        <Typography variant="h4">Education</Typography>
        <Divider variant="middle" />
        <Box>
          <Typography>Bacharelado em Ciência da Computação</Typography>
          <Typography color="textSecondary">
            Universidade de Sorocaba - 2005-2009
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography variant="h4">Skills</Typography>
        <Divider variant="middle" />
      </Box>
    </Grid>
  );
}
