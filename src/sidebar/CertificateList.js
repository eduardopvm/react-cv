import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { useTranslation } from "react-i18next";

import { GoLinkExternal } from "react-icons/go";

// TODO: refactor this whole shebang to have a print and screen versions
export default function CertificateList(props) {
  const [t, i18n] = useTranslation();
  const certList = props.certificates.map((cert) => {
    return (
      <Grid container key={cert.name}>
        <ListItem key={cert.name}>
          <Grid item xs={10}>
            <ListItemText>
              <Box>
                <Typography>{cert.name}</Typography>
                <Typography color="textSecondary">{t("issuer")}: {cert.issuer}</Typography>
                <Box display="none" displayPrint="block">
                  {cert.url != null &&
                    <Typography color="textSecondary">{`URL: ${cert.url}`}</Typography>
                  }
                </Box>
              </Box>
            </ListItemText>
          </Grid>

          {/* List Button */}
          <Grid item xs={2}>
            <ListItemSecondaryAction>
              <Box displayPrint="none">
                {cert.url
                  ? <IconButton href={cert.url} target="_blank">
                      <GoLinkExternal />
                    </IconButton>
                  : <IconButton disabled>
                      <GoLinkExternal />
                    </IconButton>
                }
              </Box>
            </ListItemSecondaryAction>
          </Grid>
        </ListItem>
      </Grid>
    );
  });

  return <List>{certList}</List>;
}
