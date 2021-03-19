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

export default function HeaderPanel() {
  return (
    <Box>
      <Divider variant="middle" component="div" />
      <Grid container>
        <CardContent>
          <PhoneAndroidOutlinedIcon display="inline" />
          <Typography display="inline">Phone</Typography>
          <Typography color="textSecondary">+55 (15)99700-3443</Typography>
        </CardContent>

        <CardContent>
          <EmailOutlinedIcon display="inline" />
          <Typography display="inline">Email</Typography>
          <Typography color="textSecondary">
            eduardo.palma403@gmail.com
          </Typography>
        </CardContent>
      </Grid>

      <Grid container>
        <CardContent>
          <WebAssetOutlinedIcon display="inline" />
          <Typography display="inline">Website</Typography>
          <Typography color="textSecondary">www.google.com</Typography>
        </CardContent>

        <CardContent>
          <LocationOnOutlinedIcon display="inline" />
          <Typography display="inline">Location</Typography>
          <Typography color="textSecondary">
            Itapetininga, SP - Brazil
          </Typography>
        </CardContent>
      </Grid>
      <Divider variant="middle" />
    </Box>
  );
}
