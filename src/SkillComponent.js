import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

/* Icons */
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

export default function SkillComponent(props) {
  const generateStars = (level) => {
    const stars = [];
    let integer = Math.trunc(level);
    let remainder = level % 1;

    if (level == 0) {
      return (
        <React.Fragment>
          <StarOutlineIcon fontSize="small" />
          <StarOutlineIcon fontSize="small" />
          <StarOutlineIcon fontSize="small" />
        </React.Fragment>
      );
    } else {
      for (let i = 0; i < integer; i++) {
        stars.push(<StarIcon fontSize="small" />);
      }

      if (remainder >= 0 && stars.length < 3) {
        stars.push(<StarHalfIcon fontSize="small" />);
      }
    }

    if (stars.length < 3) {
      stars.push(<StarOutlineIcon fontSize="small" />);
    }

    return stars;
  };

  const skillsList = props.skills.map((skill) => {
    return (
      <ListItem key={skill.name}>
        <ListItemText>{skill.name}</ListItemText>
        <ListItemSecondaryAction>
          {generateStars(skill.level)}
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return <List>{skillsList}</List>;
}
