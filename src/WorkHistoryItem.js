import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";

const useStyles = makeStyles({
  icon: {
    top: 2,
    position: "relative",
    marginRight: "0.5rem",
  },
  listIcon: {
    minWidth: "1rem !important",
  },
});

export default function WorkHistoryItem(props) {
  const classes = useStyles();
  const highlights = props.history.highlights.map((text, index) => {
    return (
      <ListItem key={index}>
        <ListItemIcon className={classes.listIcon}>
          <Typography color="textPrimary">
            <FiberManualRecordIcon style={{ fontSize: 10 }} />
          </Typography>
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2">{text}</Typography>
        </ListItemText>
      </ListItem>
    );
  });

  return (
    <Box m={2}>
      <Typography variant="h6">{props.history.role}</Typography>
      <Typography variant="body1" component="div" style={{ fontStyle: "oblique" }}>
        {/* screen link */}
        <Box displayPrint="none">
          {props.history.website
            ? <Link href={props.history.website} target="_blank">
                {props.history.company}
              </Link>
            : <Typography component="div">{props.history.company}</Typography> 
          }
        </Box>
        {/* print link */}
        <Box display="none" displayPrint="block">
          <Typography component="div">{props.history.company} {props.history.website && " (" + props.history.website + ")"}</Typography>
        </Box>
      </Typography>
      <Typography variant="subtitle1">
        <CalendarTodayOutlinedIcon fontSize="small" className={classes.icon} />
        {props.history.job_start} - {props.history.job_end}
      </Typography>
      <Typography variant="subtitle1">
        <LocationOnOutlinedIcon fontSize="small" className={classes.icon} />
        {props.history.location}
      </Typography>
      <Typography variant="body2">{props.history.description}</Typography>

      <List>{highlights}</List>
    </Box>
  );
}
