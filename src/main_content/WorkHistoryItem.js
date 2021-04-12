import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from 'react-i18next';

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
  summary: {
    position: "relative",
    marginTop: "0.5rem"
  },
  label: {
    position: "relative",
    marginTop: "0.5rem",
    fontStyle: "oblique"
  }
});

export default function WorkHistoryItem(props) {
  const classes = useStyles();
  const [t, i18n] = useTranslation();

  const highlights = props.history.activities.map((text, index) => {
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

  const technologies = props.history.technologies.map((text, index) => {
    return index < props.history.technologies.length - 1 ? text + ", " : text;
  });

  return (
    <Box m={2}>
      {/* Job Role */}
      <Typography variant="h6">{props.history.role}</Typography>
      
      {/* Job Company */}
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

      {/* Job date */}
      <Typography component="div">
        <CalendarTodayOutlinedIcon fontSize="small" className={classes.icon} />
        <Typography variant="body2" color="textSecondary" display="inline">
          {props.history.job_start} &ndash; {props.history.job_end}
        </Typography>
      </Typography>

      {/* Job Location */}
      <Typography component="div">
        <LocationOnOutlinedIcon fontSize="small" className={classes.icon} />
        <Typography variant="body2" color="textSecondary" display="inline">
          {props.history.location}
        </Typography>
      </Typography>

      {/* Job Highlights */}
      <Typography variant="body1" className={classes.label} display="block">{t('workHighlights')}:</Typography>
      <Typography variant="body1" className={classes.summary}>{props.history.description}</Typography>
      <Typography variant="body1" className={classes.label} display="block">{t('workSummary')}:</Typography>

      {/* Other Activities */}
      <List dense>{highlights}</List>
      
      {/* Main Technologies */}
      <Typography variant="body1" className={classes.label} display="block">{t('workTechnologies')}:</Typography>
      <Typography variant="body2" color="textSecondary">{technologies}</Typography>
    </Box>
  );
}
