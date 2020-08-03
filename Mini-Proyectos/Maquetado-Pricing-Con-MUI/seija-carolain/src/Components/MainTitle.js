import React from "react";
import { Typography } from "@material-ui/core";

function MainTitle() {
  return (
    <div className="MainTitle">
      <Typography variant="h2" color="initial">
        Pricing
      </Typography>
      <div className="MainTitle-text">
      <Typography variant="p" color="initial" className="MainTitle-text MuiTypography-colorTextSecondary MuiTypography-alignCenter">Quickly build an effective pricing table for your potential <br></br> customers with this layout. It's built with default  <br></br>Material-UI components with little customization.</Typography>
      </div>
    </div>
  );
}
export default MainTitle;
