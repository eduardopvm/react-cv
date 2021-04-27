import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { useTranslation } from "react-i18next";

import WorkHistoryItem from "./WorkHistoryItem";

export default function WorkHistory(props) {
  const [t, i18n] = useTranslation();

  const workHistory = [];
  props.history.map((list, index) => {
    workHistory.push(<WorkHistoryItem history={list} key={index} index={index} />);
  });

  return (
    <Grid item xs={12}>
      <Box id="work-history">
        <Typography variant="h4" style={{ marginLeft: "1rem" }}>
          {t("workHistory")}
        </Typography>
        <Divider variant="middle" component="div" />
        <Box>{workHistory}</Box>
      </Box>
    </Grid>
  );
}
