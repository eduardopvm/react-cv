import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTranslation } from "react-i18next";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

const useStyles = makeStyles({
  mobileLabel: {
    display: "inline",
    fontWeight: 500,
  },
  starIcon: {
    color: "#ffb400",
  }
});

export default function RatedSkillList(props) {
  const [t, i18n] = useTranslation();
  const theme = useTheme();
  const classes = useStyles();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  let skillsList = [];

  const generateStars = (level) => {
    const stars = [];
    let integer = Math.trunc(level);
    let remainder = level % 1;
  
    if (level == 0) {
      return (
        <React.Fragment>
          <StarOutlineIcon className={classes.starIcon} />
          <StarOutlineIcon className={classes.starIcon} />
          <StarOutlineIcon className={classes.starIcon} />
        </React.Fragment>
      );
    } else {
      for (let i = 0; i < integer; i++) {
        stars.push(<StarIcon key={stars.length} className={classes.starIcon} />);
      }
  
      if (remainder > 0 && stars.length < 3) {
        stars.push(<StarHalfIcon key={stars.length} className={classes.starIcon} />);
      }
    }
  
    if (stars.length < 3) {
      while (stars.length < 3) {
        stars.push(<StarOutlineIcon key={stars.length} className={classes.starIcon} />);
      }
    }
  
    return stars;
  };

  if (isLargeScreen) {
    skillsList = props.skills.map((skill) => {
      return (
        <ListItem key={skill.name}>
          <ListItemText>{skill.name}</ListItemText>
          <ListItemSecondaryAction>{generateStars(skill.level)}</ListItemSecondaryAction>
        </ListItem>
      );
    });
  } else {
    skillsList = props.skills.map((skill) => {
      return (
        <ListItem key={skill.name}>
          <ListItemText>
            <Typography className={classes.mobileLabel}>{skill.name}: </Typography>
            <Typography component="span">{t(`skill-${skill.level}`)}</Typography>
          </ListItemText>
        </ListItem>
      );
    });
  }

  return <List>{skillsList}</List>;
}
