import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { useTranslation } from "react-i18next";

export default function ProfissionalProfile(props) {
  const [t, i18n] = useTranslation();

  return (
    <Box>
      <Typography variant="h4">{t("profile")}</Typography>
      <Divider component="div" />
      <Typography variant="body1" component="div">
        <Box m={2}>{props.profileText}</Box>
      </Typography>
    </Box>
  );
}
