import React from "react";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

// TODO: refactor and make this dynamic
// TODO: split drawer into more sections and improve layout

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "240px",
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ResponsiveDrawer(props) {
  const classes = useStyles();
  const [t, i18n] = useTranslation();

  const onExportPDF = () => {
    props.onDrawerToggle();
    props.onPdfExport();
  };

  const workHistoryLinks = props.history.map((history, index) => {
    return (
      <Link to={`work-history-${index}`} smooth={true} offset={-60} delay={50} onClick={props.onDrawerToggle} key={`history-${index}`}>
        <ListItem button>
          <ListItemText>
            {history.company} ({history.job_start}-{history.job_end})
          </ListItemText>
        </ListItem>
      </Link>
    );
  });

  const drawerMenu = (
    <div>
      <Box className={classes.toolbar} />
      <Divider />
      {/* <List>
        <ListItem button onClick={onExportPDF}>
          <ListItemIcon>
            <PictureAsPdfIcon />
          </ListItemIcon>
          <ListItemText primary={t("exportToPDF")} />
        </ListItem>
      </List>
      <Divider /> */}
      <List>
        <Link to="info" smooth={true} offset={-50} delay={50} onClick={props.onDrawerToggle}>
          <ListItem button>
            <ListItemText>{t("information")}</ListItemText>
          </ListItem>
        </Link>
        <Link to="social" smooth={true} offset={-60} delay={50} onClick={props.onDrawerToggle}>
          <ListItem button>
            <ListItemText>Social</ListItemText>
          </ListItem>
        </Link>
        <Link to="profile" smooth={true} offset={-60} delay={50} onClick={props.onDrawerToggle}>
          <ListItem button>
            <ListItemText>{t("profile")}</ListItemText>
          </ListItem>
        </Link>
        <Link to="programming-skills" smooth={true} offset={-60} delay={50} onClick={props.onDrawerToggle}>
          <ListItem button>
            <ListItemText>{t("programmingSkills")}</ListItemText>
          </ListItem>
        </Link>
        <Link to="framework-skills" smooth={true} offset={-60} delay={50} onClick={props.onDrawerToggle}>
          <ListItem button>
            <ListItemText>{t("frameworkSkills")}</ListItemText>
          </ListItem>
        </Link>
        <Link to="database-skills" smooth={true} offset={-60} delay={50} onClick={props.onDrawerToggle}>
          <ListItem button>
            <ListItemText>{t("databaseSkills")}</ListItemText>
          </ListItem>
        </Link>
        <Link to="environment-skills" smooth={true} offset={-60} delay={50} onClick={props.onDrawerToggle}>
          <ListItem button>
            <ListItemText>{t("environmentSkills")}</ListItemText>
          </ListItem>
        </Link>
        <Link to="tool-skills" smooth={true} offset={-60} delay={50} onClick={props.onDrawerToggle}>
          <ListItem button>
            <ListItemText>{t("toolSkills")}</ListItemText>
          </ListItem>
        </Link>
        <Link to="general-skills" smooth={true} offset={-60} delay={50} onClick={props.onDrawerToggle}>
          <ListItem button>
            <ListItemText>{t("generalSkills")}</ListItemText>
          </ListItem>
        </Link>
        <Link to="language-skills" smooth={true} offset={-60} delay={50} onClick={props.onDrawerToggle}>
          <ListItem button>
            <ListItemText>{t("languageSkills")}</ListItemText>
          </ListItem>
        </Link>
        <Link to="education" smooth={true} offset={-60} delay={50} onClick={props.onDrawerToggle}>
          <ListItem button>
            <ListItemText>{t("education")}</ListItemText>
          </ListItem>
        </Link>
        <Link to="certificates" smooth={true} offset={-60} delay={50} onClick={props.onDrawerToggle}>
          <ListItem button>
            <ListItemText>{t("certificates")}</ListItemText>
          </ListItem>
        </Link>
        <Link to="work-history" smooth={true} offset={-60} delay={50} onClick={props.onDrawerToggle}>
          <ListItem button>
            <ListItemText>{t("workHistory")}</ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>{workHistoryLinks}</List>
    </div>
  );

  return (
    <nav>
      <Hidden smUp>
        <Drawer
          container={document.body}
          variant="temporary"
          anchor="left"
          open={props.drawerOpen}
          onClose={props.onDrawerToggle}
          classes={{
            paper: classes.drawer,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawerMenu}
        </Drawer>
      </Hidden>
    </nav>
  );
}
