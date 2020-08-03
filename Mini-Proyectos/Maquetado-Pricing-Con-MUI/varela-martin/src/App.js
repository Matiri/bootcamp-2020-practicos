import React from "react";
import "./App.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import Information from "./Information";
import Pricing from "./Pricing";

const App = () => {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="title">
            Company Name
          </Typography>
          <Link className="menu-item" color="inherit">
            Link 1
          </Link>
          <Link className="menu-item" color="inherit">
            Link 2
          </Link>
          <Link className="menu-item" color="inherit">
            Link 3
          </Link>
          <Button className="menu-item" color="inherit">
            Boton 1
          </Button>
        </Toolbar>
      </AppBar>
      <Information
        title="Pricing dos"
        subTitle="Quickly build an effective pricing table for your potential customers
        with this layout. It's built with default Material-UI components with
        little customization."
      />
      <Pricing />
      <footer></footer>
    </div>
  );
};

export default App;
