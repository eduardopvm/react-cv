import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";

import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

const useStyles = makeStyles({
  skillLabel: {
    display: "inline",
    fontWeight: 500,
  },
  starIcon: {
    color: "#ffb400",
  },
});

export default function RatedSkillList(props) {
  const [t, i18n] = useTranslation();
  const classes = useStyles();
  let skillsList = [];

  const generateStars = (level) => {
    const stars = [];

    if (level == 0) {
      return (
        <React.Fragment>
          <StarOutlineIcon className={classes.starIcon} />
          <StarOutlineIcon className={classes.starIcon} />
          <StarOutlineIcon className={classes.starIcon} />
        </React.Fragment>
      );
    } else {
      for (let i = 0; i < level; i++) {
        stars.push(<StarIcon key={stars.length} className={classes.starIcon} />);
      }
    }

    if (stars.length < 3) {
      while (stars.length < 3) {
        stars.push(<StarOutlineIcon key={stars.length} className={classes.starIcon} />);
      }
    }

    return stars;
  };

  skillsList = props.skills.map((skill) => {
    return (
      <React.Fragment key={skill.name}>
        <Box display="block" displayPrint="none">
          <ListItem>
            <ListItemText>{skill.name}</ListItemText>
            <ListItemSecondaryAction>
              <Tooltip title={t(`skill-${skill.level}`)} arrow>
                <div>{generateStars(skill.level)}</div>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        </Box>

        <Box display="none" displayPrint="block">
          <ListItem key={skill.name}>
            <ListItemText>
              <Typography className={classes.skillLabel}>{skill.name}: </Typography>
              <Typography component="span">{t(`skill-${skill.level}`)}</Typography>
            </ListItemText>
          </ListItem>
        </Box>
      </React.Fragment>
    );
  });

  return <List>{skillsList}</List>;
}
