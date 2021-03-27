import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

/* Icons */
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import WebAssetOutlinedIcon from "@material-ui/icons/WebAssetOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const useStyles = makeStyles({
  root: {
    top: 5,
    position: "relative",
    marginRight: "0.25rem"
  },
});

export default function HeaderPanel(props) {
  const classes = useStyles();

  return (
    <Grid container item xs={12}>
      <Grid item xs={6}>
        <CardContent>
          <EmailOutlinedIcon display="inline" className={classes.root} />
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
        </CardContent>
      </Grid>

      <Grid item xs={6}>
        <CardContent>
          <WebAssetOutlinedIcon display="inline" className={classes.root} />
          <Typography display="inline">Website</Typography>
          {/* screen display */}
          <Box displayPrint="none">
            <Link href={props.contact.website} target="_blank" display="block">
              {props.contact.website}
            </Link>
          </Box>
          {/* print display */}
          <Box display="none" displayPrint="block">
            <Typography color="textSecondary">
              {props.contact.website}
            </Typography>
          </Box>
        </CardContent>
      </Grid>

      <Grid item xs={6}>
        <CardContent>
          <PhoneAndroidOutlinedIcon display="inline" className={classes.root} />
          <Typography display="inline">Phone</Typography>
          <Typography color="textSecondary">{props.contact.phone}</Typography>
        </CardContent>
      </Grid>

      <Grid item xs={6}>
        <CardContent>
          <LocationOnOutlinedIcon display="inline" className={classes.root} />
          <Typography display="inline">Location</Typography>
          <Typography color="textSecondary">
            {props.contact.location}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
}
