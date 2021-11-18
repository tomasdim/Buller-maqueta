import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import BullerLogo from "../assets/Buller.svg";
import ShoppingCart from "../assets/ShoppingCart.svg";
import Facebook from "../assets/Facebook.svg";
import Divider from "@material-ui/core/Divider";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Noto Sans",
    color: "white",
  },
  appbarXL: {
    [theme.breakpoints.up("xl")]: {
      height: "95px",
      [theme.breakpoints.up("xl")]: {
        paddingLeft: "6%",
        paddingRight: "10%",
      },
    },
  },
  appbar: {
    borderBottom: "1px solid rgba(255,255,255,0.5)",
    "& .MuiToolbar-gutters": {
      paddingRight: 0,
    },
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%,rgba(0, 0, 0, 0) 100%)",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  appbarButton: {
    fontFamily: "Poppins",
    color: "white",
    fontSize: "18px",
    textTransform: "none",
    paddingRight: "40px",
    paddingLeft: "40px",
    backgroundColor: "transparent",
    [theme.breakpoints.up("xl")]: {
      fontSize: "22px",
    },
  },
  bullerLogo: {
    flexGrow: 1,
    maxWidth: 160,
    display: "block",
  },
  divider: {
    backgroundColor: "rgba(255,255,255,0.3)",
    width: "1px",
  },
  appbarMobile: {
    borderBottom: "1px solid rgba(255,255,255,0.5)",
    "& .MuiToolbar-gutters": {
      paddingRight: 0,
    },
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%,rgba(0, 0, 0, 0) 100%)",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appbarMobile2: {
    borderBottom: "1px solid rgba(255,255,255,0.5)",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%,rgba(0, 0, 0, 0) 100%)",
    position: "fixed",
    flexGrow: 2,
    display: "flex",
    top: 57,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const mobileView = useMediaQuery("(max-width:360px)");

  return (
    <div className={classes.root}>
      <AppBar
        classes={{ root: classes.appbarXL }}
        position="fixed"
        elevation={0}
        className={classes.appbar}
      >
        <Toolbar classes={{ root: classes.appbarXL }}>
          <div className="flex-grow">
            <img
              className="buller-logo"
              alt="buller-logo"
              src={BullerLogo}
            ></img>
          </div>
          <Button
            style={{ backgroundColor: "transparent" }}
            className={classes.appbarButton}
          >
            Cervezas
          </Button>
          <Button
            style={{ backgroundColor: "transparent" }}
            className={classes.appbarButton}
          >
            Carta Online
          </Button>
          <Divider
            classes={{ root: classes.divider, vertical: classes.divider }}
            orientation="vertical"
            flexItem
          />
          <div className="right-navbar">
            <img alt="shopping-cart" src={ShoppingCart}></img>
            <WhatsAppIcon
              style={{ color: "white", fontSize: 24 }}
            ></WhatsAppIcon>
            <InstagramIcon
              style={{ color: "white", fontSize: 24 }}
            ></InstagramIcon>
            <img alt="Facebook" style={{ width: 10 }} src={Facebook}></img>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar className={classes.appbarMobile}>
        <Toolbar>
          <div className="flex-grow">
            <img
              className="buller-logo"
              alt="buller-logo"
              src={BullerLogo}
            ></img>
          </div>
          <div class="right-navbar">
            <WhatsAppIcon
              style={{ color: "white", fontSize: 24 }}
            ></WhatsAppIcon>
            <InstagramIcon
              style={{ color: "white", fontSize: 24 }}
            ></InstagramIcon>
            <img alt="Facebook" style={{ width: 10 }} src={Facebook}></img>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar className={classes.appbarMobile2}>
        <Toolbar>
          <div className="navbar-bottom-container">
            <Button
              style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}
              className={classes.appbarButton}
            >
              Cervezas
            </Button>
            <Button
              style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}
              className={classes.appbarButton}
            >
              Carta Online
            </Button>
            <img alt="shopping-cart" src={ShoppingCart}></img>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
