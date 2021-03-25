import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

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
          <Link href="https://github.com/eduardopvm" target="_blank">
            Github
          </Link>
        </ListItemText>
      </ListItem>
      <Divider variant="middle" />
      <ListItem>
        <FaLinkedin style={{ fontSize: 30 }} className={classes.root} />
        <ListItemText>
          <Link href="https://www.linkedin.com/in/eduardo-pvm/" target="_blank">
            LinkedIn
          </Link>
        </ListItemText>
      </ListItem>
      <Divider variant="middle" />
      <ListItem>
        <FaFacebookSquare style={{ fontSize: 30 }} className={classes.root} />
        <ListItemText>
          <Link href="#" target="_blank">
            Facebook
          </Link>
        </ListItemText>
      </ListItem>
      <Divider variant="middle" />
    </List>
  );
}
