import React from "react"
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-scroll'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "240px",
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ResponsiveDrawer(props) {
  const classes = useStyles();

  const drawerMenu = (
    <div>
      <Box className={classes.toolbar}>
        <Typography variant="h5">Menu</Typography>
      </Box>
      <Divider />
      <List>
        <ListItem><Link to="info" smooth={true} offset={-50} onClick={props.onDrawerToggle}>Informações</Link></ListItem>
        <ListItem><Link to="social" smooth={true} offset={-60} onClick={props.onDrawerToggle}>Social</Link></ListItem>
        <ListItem><Link to="profile" smooth={true} offset={-60} onClick={props.onDrawerToggle}>Perfil</Link></ListItem>
        <ListItem><Link to="education" smooth={true} offset={-60} onClick={props.onDrawerToggle}>Educação</Link></ListItem>
        <ListItem><Link to="language-skills" smooth={true} offset={-60} onClick={props.onDrawerToggle}>Línguas</Link></ListItem>
        <ListItem><Link to="tech-skills" smooth={true} offset={-60} onClick={props.onDrawerToggle}>Tecnologias</Link></ListItem>
        <ListItem><Link to="general-skills" smooth={true} offset={-60} onClick={props.onDrawerToggle}>Conceitos</Link></ListItem>
        <ListItem><Link to="certificates" smooth={true} offset={-60} onClick={props.onDrawerToggle}>Certificados</Link></ListItem>
        <ListItem><Link to="work-history" smooth={true} offset={-60} onClick={props.onDrawerToggle}>Experiência Profissional</Link></ListItem>
      </List>
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
