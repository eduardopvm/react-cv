import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TranslateIcon from "@material-ui/icons/Translate";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function LanguageChooser(props) {
  const [t, i18n] = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const languages = {en: "English", pt: "Português"};
  let selectedLanguage = languages[i18n.language];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (e) => {
    const langKey = e.currentTarget.getAttribute("lang") || "pt";
    selectedLanguage = languages[langKey];
    setAnchorEl(null);
    if (i18n.language != langKey) {
      i18n.changeLanguage(langKey);
      props.handleLanguageChange(langKey);
    }
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleMenuClick}
        startIcon={<TranslateIcon />}
        endIcon={<ExpandMoreIcon />}
        style={{ color: "#fff" }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        aria-label="Chosen language">
        {selectedLanguage}
      </Button>
      <Menu
        id="simple-menu"
        container={document.getElementById("root")}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClick} lang="en">English</MenuItem>
        <MenuItem onClick={handleClick} lang="pt">Português</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
