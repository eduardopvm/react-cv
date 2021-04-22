import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  footer: {
    margin: "1rem"
  },
  contentContainer: {
    paddingTop: "1rem",
    height: "100%"
  }
}));

export default function Footer(props) {
  const [t, i18n] = useTranslation();
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      className={classes.footer}
      component="footer">
      <Box>
        <Typography
          variant="caption"
          color="textSecondary"
          align="center"
          component="div">
          {t("footerDescription")}
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          align="center"
          component="div">
          {t("footerSource")}
          <Link href={props.githubUrl} target="_blank">
            GitHub
          </Link>
        </Typography>
      </Box>
    </Grid>
  );
}
