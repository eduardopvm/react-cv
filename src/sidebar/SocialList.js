import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    marginRight: 5,
  },
});

export default function SocialList(props) {
  const classes = useStyles();
  return (
    <List>
      <ListItem>
        <GoMarkGithub style={{ fontSize: 30 }} className={classes.root} />
        <ListItemText>
          <Box displayPrint="none">
            <Link href="https://github.com/eduardopvm" target="_blank">
              Github
            </Link>
          </Box>
          <Box display="none" displayPrint="block">
            <Typography>
              www.github.com/eduardopvm
            </Typography>
          </Box>
        </ListItemText>
      </ListItem>
      
      <ListItem>
        <FaLinkedin style={{ fontSize: 30 }} className={classes.root} />
        <ListItemText>
          <Box displayPrint="none">
            <Link href="https://www.linkedin.com/in/eduardo-pvm/" target="_blank">
              LinkedIn
            </Link>
          </Box>
          <Box display="none" displayPrint="block">
            <Typography>
              www.linkedin.com/in/eduardo-pvm
            </Typography>
          </Box>
        </ListItemText>
      </ListItem>
    </List>
  );
}
