import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default function GeneralSkillsList(props) {
  return (
    <List>
      {props.skills.map((skill, index) => (
        <ListItem key={index}>{skill}</ListItem>
      ))}
    </List>
  );
}
