import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

export default function GeneralSkillsList(props) {
  return (
    <List>
      {props.skills.map((skill, index) => (
        <Typography key={index}>
          <ListItem key={index}>{skill}</ListItem>
        </Typography>
      ))}
    </List>
  );
}
