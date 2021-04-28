import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

/* Icons */
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import WebAssetOutlinedIcon from "@material-ui/icons/WebAssetOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const useStyles = makeStyles({
  icon: {
    top: 5,
    position: "relative",
    marginRight: "0.25rem",
  },
  panel: {
    margin: "1rem",
  },
});

export default function HeaderPanel(props) {
  const classes = useStyles();
  const [t, i18n] = useTranslation();

  const locationQueryString = encodeURI(props.contact.address + " " + props.contact.location);

  return (
    <Grid container item xs={12} className={classes.panel}>
      <Grid item xs={12} sm={6}>
        <Box>
          <EmailOutlinedIcon display="inline" className={classes.icon} />
          <Typography display="inline">Email</Typography>

          {/* screen display */}
          <Box displayPrint="none">
            <Link href={`mailto:${props.contact.email}`} display="block">
              {props.contact.email}
            </Link>
          </Box>

          {/* print display */}
          <Box display="none" displayPrint="block">
            <Typography color="textSecondary">{props.contact.email}</Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box>
          <WebAssetOutlinedIcon display="inline" className={classes.icon} />
          <Typography display="inline">Website</Typography>

          {/* screen display */}
          <Box displayPrint="none">
            <Link href={props.contact.website} target="_blank">
              {props.contact.website}
            </Link>
          </Box>

          {/* print display */}
          <Box display="none" displayPrint="block">
            <Typography color="textSecondary">{props.contact.website}</Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box>
          <PhoneAndroidOutlinedIcon display="inline" className={classes.icon} />
          <Typography display="inline">{t("phone")}</Typography>
          
          {/* screen display */}
          <Box displayPrint="none">
            <Link href={`tel:${props.contact.phoneNumber}`}>{props.contact.phoneDisplay}</Link>
          </Box>

          {/* print display */}
          <Box display="none" displayPrint="block">
            <Typography color="textSecondary">{props.contact.phoneDisplay}</Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box>
          <LocationOnOutlinedIcon display="inline" className={classes.icon} />
          <Typography display="inline">{t("location")}</Typography>

          {/* screen display */}
          <Box displayPrint="none">
            <Link href={"https://www.google.com/maps/search/?api=1&query=" + locationQueryString} target="_blank">
              {props.contact.location}
            </Link>
          </Box>

          {/* print display */}
          <Box display="none" displayPrint="block">
            <Typography color="textSecondary">{props.contact.location}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
