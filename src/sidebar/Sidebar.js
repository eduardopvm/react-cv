import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import RatedSkillList from "./RatedSkillList";
import LanguageSkillList from "./LanguageSkillList";
import CertificateList from "./CertificateList";
import GeneralSkillsList from "./GeneralSkillsList";
import SocialList from "./SocialList";

const useStyles = makeStyles({
  avoidBreakInside: {
    breakInside: "avoid"
  }
});

export default function Sidebar(props) {
  const classes = useStyles();
  const [t, i18n] = useTranslation();
  const profileLines = props.translatedData.profile.split('\n');
  const profileSection = profileLines.map((text, index) => {
    let sections = [];
    if (profileLines.length == (index + 1)) { // if last section
      sections.push(<Box className={classes.avoidBreakInside} key={index}>{text}</Box>);
    } else {
      sections.push(<Box mb={1} key={index}>{text}</Box>)
    }
    return sections;
  });

  return (
    <React.Fragment>
      <Box>
        <Box ml={2}>
          <Typography variant="h4">Social</Typography>
        </Box>
        <Divider variant="middle" component="div" />
        <SocialList />
      </Box>

      <Box>
        <Box ml={2}>
          <Typography variant="h4">{t('profile')}</Typography>
        </Box>
        <Divider variant="middle" component="div" />
        <Typography variant="body1" component="div">
          <Box m={2}>
            {profileSection}
          </Box>
        </Typography>
      </Box>

      <Box className={classes.avoidBreakInside}>
        <Box ml={2}>
          <Typography variant="h4">{t("education")}</Typography>
        </Box>
        <Divider variant="middle" component="div" />
        <Box m={2}>
          <Typography>Bacharelado em Ciência da Computação</Typography>
          <Typography color="textSecondary">
            Universidade de Sorocaba - 2005 &ndash; 2009
          </Typography>
          <Typography color="textSecondary">Sorocaba, SP - {t("brazil")}</Typography>
        </Box>
      </Box>

      <Box className={classes.avoidBreakInside}>
        <Box ml={2}>
          <Typography variant="h4">{t("languageSkills")}</Typography>
        </Box>
        <Divider variant="middle" component="div" />
        <LanguageSkillList skills={props.staticData.languague_skills} />
      </Box>

      <Box className={classes.avoidBreakInside}>
        <Box ml={2}>
          <Typography variant="h4">{t("technicalSkills")}</Typography>
        </Box>
        <Divider variant="middle" component="div" />
        <RatedSkillList skills={props.staticData.technical_skills} />
      </Box>

      <Box className={classes.avoidBreakInside}>
        <Box ml={2}>
          <Typography variant="h4">{t("generalSkills")}</Typography>
        </Box>
        <Divider variant="middle" component="div" />
        <GeneralSkillsList skills={props.staticData.general_skills} />
      </Box>

      <Box className={classes.avoidBreakInside}>
        <Box ml={2}>
          <Typography variant="h4">{t("certificates")}</Typography>
        </Box>
        <Divider variant="middle" component="div" />
        <CertificateList certificates={props.staticData.certificates} />
      </Box>
    </React.Fragment>
  );
}
