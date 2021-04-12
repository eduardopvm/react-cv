import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { useTranslation } from 'react-i18next';

import WorkHistoryItem from "./WorkHistoryItem";

export default function WorkHistory(props) {
  const [t, i18n] = useTranslation();

  const workHistory = [];
  props.history.map((list, index) => {
    workHistory.push(
      <WorkHistoryItem history={list} key={index} />
    );
  });

  return (
    <Box>
      <Typography variant="h4">{t('workHistory')}</Typography>
      <Divider />
      <Box>{workHistory}</Box>
    </Box>
  );
}
