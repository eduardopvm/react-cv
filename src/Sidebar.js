import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

import SkillList from "./SkillList";
import CertificateList from "./CertificateList";
import GeneralSkillsList from "./GeneralSkillsList";
import SocialList from "./SocialList";

export default function Sidebar(props) {
  return (
    <React.Fragment>
      <Box>
        <Typography variant="h5">Social</Typography>
        <Divider variant="middle" />
        <SocialList />
      </Box>

      <Box>
        <Typography variant="h5">Education</Typography>
        <Divider variant="middle" />
        <Box>
          <Typography>Bacharelado em Ciência da Computação</Typography>
          <Typography color="textSecondary">
            Universidade de Sorocaba - 2005-2009
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography variant="h5">Technical Skills</Typography>
        <Divider variant="middle" />
        <SkillList skills={props.data.technical_skills} />
      </Box>

      <Box>
        <Typography variant="h5">General Skills</Typography>
        <Divider variant="middle" />
        <GeneralSkillsList skills={props.data.general_skills} />
      </Box>

      <Box>
        <Typography variant="h5">Languages</Typography>
        <Divider variant="middle" />
        <SkillList skills={props.data.languague_skills} />
      </Box>

      <Box>
        <Typography variant="h5">Certificates</Typography>
        <Divider variant="middle" />
        <CertificateList certificates={props.data.certificates} />
      </Box>
    </React.Fragment>
  );
}
