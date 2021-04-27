import React from "react";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PrintIcon from "@material-ui/icons/Print";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "240px",
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ResponsiveDrawer(props) {
  const classes = useStyles();
  const [t, i18n] = useTranslation();

  const onPrintPage = () => {
    props.onDrawerToggle();
    props.onPagePrint();
  }

  const onExportPDF = () => {
    props.onDrawerToggle();
    props.onPdfExport();
  }

  const workHistoryLinks = props.history.map((history, index) => {
    return (
      <ListItem button key={index}>
        <ListItemText>
          <Link
            to={`work-history-${index}`}
            smooth={true}
            offset={-60}
            onClick={props.onDrawerToggle}>
            {history.company} ({history.job_start}-{history.job_end})
          </Link>
        </ListItemText>
      </ListItem>
    );
  });

  const drawerMenu = (
    <div>
      <Box className={classes.toolbar}>
        {/* <Typography variant="h5">Menu</Typography> */}
      </Box>
      <Divider />
      <List>
        <ListItem button onClick={onPrintPage}>
          <ListItemIcon><PrintIcon /></ListItemIcon>
          <ListItemText primary={t("printCV")} />
        </ListItem>
        <ListItem button onClick={onExportPDF}>
          <ListItemIcon><PictureAsPdfIcon /></ListItemIcon>
          <ListItemText primary={t("exportToPDF")} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText>
            <Link
              to="info"
              smooth={true}
              offset={-50}
              onClick={props.onDrawerToggle}>
              Informações
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link
              to="social"
              smooth={true}
              offset={-60}
              onClick={props.onDrawerToggle}>
              Social
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link
              to="profile"
              smooth={true}
              offset={-60}
              onClick={props.onDrawerToggle}>
              Perfil
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link
              to="education"
              smooth={true}
              offset={-60}
              onClick={props.onDrawerToggle}>
              Educação
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link
              to="language-skills"
              smooth={true}
              offset={-60}
              onClick={props.onDrawerToggle}>
              Línguas
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link
              to="tech-skills"
              smooth={true}
              offset={-60}
              onClick={props.onDrawerToggle}>
              Tecnologias
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link
              to="general-skills"
              smooth={true}
              offset={-60}
              onClick={props.onDrawerToggle}>
              Conceitos
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link
              to="certificates"
              smooth={true}
              offset={-60}
              onClick={props.onDrawerToggle}>
              Certificados
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link
              to="work-history"
              smooth={true}
              offset={-60}
              onClick={props.onDrawerToggle}>
              Experiência Profissional
            </Link>
          </ListItemText>
        </ListItem>
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
          }}>
          {drawerMenu}
        </Drawer>
      </Hidden>
    </nav>
  );
}
