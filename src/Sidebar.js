import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { useTranslation } from 'react-i18next';

import RatedSkillList from "./RatedSkillList";
import CertificateList from "./CertificateList";
import GeneralSkillsList from "./GeneralSkillsList";
import SocialList from "./SocialList";

export default function Sidebar(props) {
  const [t, i18n] = useTranslation();

  return (
    <React.Fragment>
      <Box>
        <Box ml={2}>
          <Typography variant="h5">Social</Typography>
        </Box>
        <Divider variant="middle" />
        <SocialList />
      </Box>

      <Box>
        <Box ml={2}>
          <Typography variant="h5">{t('education')}</Typography>
        </Box>
        <Divider variant="middle" />
        <Box m={2}>
          <Typography>Bacharelado em Ciência da Computação</Typography>
          <Typography color="textSecondary">
            Universidade de Sorocaba - 2005-2009
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box ml={2}>
          <Typography variant="h5">{t('technicalSkills')}</Typography>
        </Box>
        <Divider variant="middle" />
        <RatedSkillList skills={props.data.technical_skills} />
      </Box>

      <Box>
        <Box ml={2}>
          <Typography variant="h5">{t('generalSkills')}</Typography>
        </Box>
        <Divider variant="middle" />
        <GeneralSkillsList skills={props.data.general_skills} />
      </Box>

      <Box>
        <Box ml={2}>
          <Typography variant="h5">{t('languageSkills')}</Typography>
        </Box>
        <Divider variant="middle" />
        <RatedSkillList skills={props.data.languague_skills} />
      </Box>

      <Box>
        <Box ml={2}>
          <Typography variant="h5">{t('certificates')}</Typography>
        </Box>
        <Divider variant="middle" />
        <CertificateList certificates={props.data.certificates} />
      </Box>
    </React.Fragment>
  );
}
