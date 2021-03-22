import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";

/* Icons */
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

export default function Sidebar(props) {
  return (
    <Grid item xs={3}>
      <List>
        <Typography variant="h5">Social</Typography>
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
        <Typography variant="h5">Education</Typography>
        <Divider variant="middle" />
        <Box>
          <Typography>Bacharelado em Ciência da Computação</Typography>
          <Typography color="textSecondary">
            Universidade de Sorocaba - 2005-2009
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography variant="h5">Technical Skills</Typography>
        <Divider variant="middle" />
        <List>
          <ListItem>
            <Typography>Node.js</Typography>
            <ListItemSecondaryAction>
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarOutlineIcon fontSize="small" />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <Typography>Express</Typography>
            <ListItemSecondaryAction>
              <StarIcon fontSize="small" />
              <StarHalfIcon fontSize="small" />
              <StarOutlineIcon fontSize="small" />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <Typography>React</Typography>
            <ListItemSecondaryAction>
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarOutlineIcon fontSize="small" />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h5">General Skills</Typography>
        <Divider variant="middle" />

        <List>
          <ListItem>Lollygagging</ListItem>
          <ListItem>Loitering</ListItem>
          <ListItem>Littering</ListItem>
          <ListItem>Lolling</ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h5">Languages</Typography>
        <Divider variant="middle" />
        <Typography>Português</Typography>
        <Typography>Inglês</Typography>
      </Box>

      <Box>
      <Typography variant="h5">Certificates</Typography>
        <Divider variant="middle" />
      </Box>
    </Grid>
  );
}
