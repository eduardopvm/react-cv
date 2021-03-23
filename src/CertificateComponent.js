import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

import { GoLinkExternal } from "react-icons/go";

export default function CertificateComponent(props) {
  const certList = props.certificates.map((cert) => {
    return (
      <ListItem key={cert.name}>
        <ListItemText
          primary={cert.name}
          secondary={
            <Typography display="inline" color="textSecondary">
              Emissor: {cert.issuer}
            </Typography>
          }
        ></ListItemText>
        <ListItemSecondaryAction>
          <IconButton href={cert.url} target="_blank">
            <GoLinkExternal />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return <List>{certList}</List>;
}
