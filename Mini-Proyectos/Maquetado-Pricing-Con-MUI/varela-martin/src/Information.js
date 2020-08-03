import React from "react";
import "./App.css";

import Typography from "@material-ui/core/Typography";

const Information = (props) => {
  return (
    <section className="information">
      <Typography variant="h2" gutterBottom>
        {props.title}
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        className="sub-title"
        align="center"
      >
        {props.subTitle}
      </Typography>
    </section>
  );
};

export default Information;
