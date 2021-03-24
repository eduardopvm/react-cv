import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";

/* Icons */
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import WebAssetOutlinedIcon from "@material-ui/icons/WebAssetOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

export default function HeaderPanel(props) {
  return (
    <Grid container item xs={12}>
      <Grid item xs={6}>
        <CardContent>
          <PhoneAndroidOutlinedIcon display="inline" />
          <Typography display="inline">Phone</Typography>
          <Typography color="textSecondary">{props.contact.phone}</Typography>
        </CardContent>
      </Grid>

      <Grid item xs={6}>
        <CardContent>
          <EmailOutlinedIcon display="inline" />
          <Typography display="inline">Email</Typography>
          <Link href={`mailto:${props.contact.email}`} display="block">
            {props.contact.email}
          </Link>
        </CardContent>
      </Grid>

      <Grid item xs={6}>
        <CardContent>
          <WebAssetOutlinedIcon display="inline" />
          <Typography display="inline">Website</Typography>
          <Link href={props.contact.website} target="_blank" display="block">
            {props.contact.website}
          </Link>
        </CardContent>
      </Grid>

      <Grid item xs={6}>
        <CardContent>
          <LocationOnOutlinedIcon display="inline" />
          <Typography display="inline">Location</Typography>
          <Typography color="textSecondary">
            {props.contact.location}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
}
