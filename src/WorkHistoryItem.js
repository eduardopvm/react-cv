import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";

export default function WorkHistoryItem(props) {
  const highlights = [];
  props.history.highlights.map((text, index) => {
    highlights.push(
      <ListItem key={index}>
        <ListItemIcon>
          <FiberManualRecordIcon style={{ fontSize: 10 }} />
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
      <Typography variant="body1" style={{ fontStyle: "oblique" }}>
        {props.history.company}
      </Typography>
      <Typography variant="subtitle1">
        <CalendarTodayOutlinedIcon fontSize="small" />
        {props.history.job_start} - {props.history.job_end}
      </Typography>
      <Typography variant="subtitle1">
        <LocationOnOutlinedIcon fontSize="small" />
        {props.history.location}
      </Typography>
      <Typography variant="body2">{props.history.description}</Typography>

      <List>{highlights}</List>
    </Box>
  );
}
