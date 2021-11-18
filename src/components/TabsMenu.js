import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tabTwo: {
    "&.MuiButtonBase-root.MuiTab-root": {
      backgroundColor: "#191919",
      color: "rgba(255,255,255,0.4)",
      fontFamily: "Poppins",
      fontWeight: "400",
      textTransform: "none",
    },
    "&.MuiButtonBase-root.MuiTab-root.Mui-selected": {
      textDecoration: "none",
      color: "#FFFFFF",
    },
    "&.MuiPaper-root": {
      [theme.breakpoints.up("xl")]: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
      },
    },
    "&.MuiTabs-root": {
      [theme.breakpoints.up("xl")]: {
        width: "80%",
      },
    },
  },
}));

export default function DisabledTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.tabTwo} square>
      <Tabs
        className={classes.tabTwo}
        value={value}
        color="primary"
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        variant="fullWidth"
        TabIndicatorProps={{
          style: { background: "#968777" },
        }}
      >
        <Tab disableTouchRipple className={classes.tabTwo} label="Bienvenida" />
        <Tab
          className={classes.tabTwo}
          disableTouchRipple
          label="Sobre nosotros"
        />
        <Tab
          className={classes.tabTwo}
          disableTouchRipple
          label="Franquicias"
        />
        <Tab
          className={classes.tabTwo}
          disableTouchRipple
          label="Experiencia BULLER"
        />
      </Tabs>
    </Paper>
  );
}
