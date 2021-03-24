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
        <ListItemText>{text}</ListItemText>
      </ListItem>
    );
  });

  return (
    <Typography color="textPrimary" component="div">
      <Box fontWeight="fontWeightMedium" fontSize="h6.fontSize">
        {props.history.role}
      </Box>
      <Box fontStyle="oblique">{props.history.company}</Box>
      <Box>
        <CalendarTodayOutlinedIcon fontSize="small" />
        {props.history.job_start} - {props.history.job_end}
      </Box>
      <Box>
        <LocationOnOutlinedIcon fontSize="small" />
        {props.history.location}
      </Box>
      <Box fontWeight="fontWeightLight">{props.history.description}</Box>

      <List>{highlights}</List>
    </Typography>
  );
}
