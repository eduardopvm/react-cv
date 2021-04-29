import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

export default function LanguageSkillList(props) {
  const [t, i18n] = useTranslation();

  const skillsList = props.skills.map((skill) => {
    return (
      <ListItem key={skill.name}>
        <ListItemText>
          <Typography style={{ fontWeight: 500 }} component="span">{t(skill.name)}: </Typography>
          <Typography component="span">{t(`lang-skill-${skill.level}`)}</Typography>
        </ListItemText>
      </ListItem>
    );
  });

  return <List>{skillsList}</List>;
}
