import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export default function WorkHistoryItem(props) {
  const highlights = [];
  props.history.highlights.map((text, index) => {
    highlights.push(
      <ListItem key={index.toString()}>
        <ListItemIcon>
          <FiberManualRecordIcon style={{ fontSize: 10 }} />
        </ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItem>
    );
  });

  return (
    <Box>
      <Typography>{props.history.role}</Typography>
      <Typography>{props.history.company}</Typography>
      <Typography>
        {props.history.job_start} - {props.history.job_end}
      </Typography>
      <Typography>{props.history.location}</Typography>
      <Typography>{props.history.description}</Typography>

      <List>{highlights}</List>
    </Box>
  );
}
