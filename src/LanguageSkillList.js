import Rating from '@material-ui/lab/Rating';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { useTranslation } from 'react-i18next';

export default function RatedSkillList(props) {
  const [t, i18n] = useTranslation();

  const skillsList = props.skills.map((skill) => {
    return (
      <ListItem key={skill.name}>
        <ListItemText>{t(skill.name)}</ListItemText>
        <ListItemSecondaryAction>
          <Rating name="read-only" value={skill.level} precision={0.5} readOnly className="skillStars" />
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return <List>{skillsList}</List>;
}
