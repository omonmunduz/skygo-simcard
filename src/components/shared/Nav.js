import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "@reach/router";
import "./Nav.css";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Store",
    href: "/store",
  },
  {
    label: "Add Sim",
    href: "add-sim",
  },
  {
    label: "How To",
    href: "/how-to",
  },
  {
    label: "Sign In",
    href: "/sign-in",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#fff",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    width: "200px",
    padding: "20px 30px",
  },
}));

const Nav = () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    };
    const handleDrawerClose = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    };
    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: Link,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
    };
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div>{skygoLogo}</div>
      </Toolbar>
    );
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {skygoLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };
  const skygoLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      <Link to="/">SkyGo</Link>
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: Link,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header className="main-navigation">
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};
export default Nav;
