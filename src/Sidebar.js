import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

import SkillComponent from "./SkillComponent";
import React from "react";
import CertificateComponent from "./CertificateComponent";

export default function Sidebar(props) {
  return (
    <React.Fragment>
      <List>
        <Typography variant="h5">Social</Typography>
        <Divider component="li" variant="middle" />
        <ListItem>
          <GoMarkGithub style={{ fontSize: 30 }} />
          <ListItemText>
            <Link href="https://github.com/eduardopvm">Github</Link>
          </ListItemText>
        </ListItem>
        <Divider component="li" variant="middle" />
        <ListItem>
          <FaLinkedin style={{ fontSize: 30 }} />
          <ListItemText>
            <Link href="https://www.linkedin.com/in/eduardo-pvm/">
              LinkedIn
            </Link>
          </ListItemText>
        </ListItem>
        <Divider component="li" variant="middle" />
        <ListItem>
          <FaFacebookSquare style={{ fontSize: 30 }} />
          <ListItemText>
            <Link href="#">Facebook</Link>
          </ListItemText>
        </ListItem>
        <Divider component="li" variant="middle" />
      </List>

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
        <SkillComponent skills={props.data.technical_skills} />
      </Box>

      <Box>
        <Typography variant="h5">General Skills</Typography>
        <Divider variant="middle" />

        <List>
          <ListItem>Lollygagging</ListItem>
          <ListItem>Loitering</ListItem>
          <ListItem>Littering</ListItem>
          <ListItem>Lolling</ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h5">Languages</Typography>
        <Divider variant="middle" />
        <SkillComponent skills={props.data.languague_skills} />
      </Box>

      <Box>
        <Typography variant="h5">Certificates</Typography>
        <Divider variant="middle" />
        <CertificateComponent certificates={props.data.certificates} />
      </Box>
    </React.Fragment>
  );
}
