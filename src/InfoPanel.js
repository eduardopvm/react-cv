import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

/* Icons */
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import WebAssetOutlinedIcon from "@material-ui/icons/WebAssetOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

export default function HeaderPanel(props) {
  return (
    <Box>
      <Divider variant="middle" />
      <Grid container>
        <CardContent>
          <PhoneAndroidOutlinedIcon display="inline" />
          <Typography display="inline">Phone</Typography>
          <Typography color="textSecondary">{props.contact.phone}</Typography>
        </CardContent>

        <CardContent>
          <EmailOutlinedIcon display="inline" />
          <Typography display="inline">Email</Typography>
          <Typography color="textSecondary">{props.contact.email}</Typography>
        </CardContent>
      </Grid>

      <Grid container>
        <CardContent>
          <WebAssetOutlinedIcon display="inline" />
          <Typography display="inline">Website</Typography>
          <Typography color="textSecondary">{props.contact.website}</Typography>
        </CardContent>

        <CardContent>
          <LocationOnOutlinedIcon display="inline" />
          <Typography display="inline">Location</Typography>
          <Typography color="textSecondary">{props.contact.location}</Typography>
        </CardContent>
      </Grid>
      <Divider variant="middle" />
    </Box>
  );
}
