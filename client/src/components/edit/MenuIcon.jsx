import React from "react";
import Menu from "../../images/menu.svg";
import { useEditPageStyles } from "../../helpers/styles";

const MenuIcon = ({ onClick }) => {
  const classes = useEditPageStyles();

  return (
    <img onClick={onClick} className={classes.menuIcon} src={Menu} alt="menu" />
  );
};

export default MenuIcon;
