import Rating from "@material-ui/lab/Rating";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { useTranslation } from 'react-i18next';

// TODO: try to solve the ref warning

export default function RatedSkillList(props) {
  const [t, i18n] = useTranslation();

  const skillsList = props.skills.map((skill) => {
    return (
      <ListItem key={skill.name}>
        <ListItemText>{skill.name}</ListItemText>
        <Tooltip title={t(`skill-${skill.level}`)}>
          <ListItemSecondaryAction>
            <Rating max={3} value={skill.level} precision={0.5} readOnly className="skillStars" />
          </ListItemSecondaryAction>
        </Tooltip>
      </ListItem>
    );
  });

  return <List>{skillsList}</List>;
}
