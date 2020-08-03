import React from "react";

import CardList from "./CardList";
import Typography from "@material-ui/core/Typography";

function Footer() {
  //lamo la contsnte que cree

  return (
    <div className="CardList-root">
      <CardList
        nameCardList="Company"
        linkCardOne="Team"
        linkCardTwo="History"
        linkCardThree="Contact us"
        linkCardFour="Locations"
      />
      <CardList
        nameCardList="Features"
        linkCardOne="Cool stuff"
        linkCardTwo="Random features"
        linkCardThree="Team features"
        linkCardFour="Developer stuff"
        linkCardFive="Another one"
      />
      <CardList
        nameCardList="Resources"
        linkCardOne="Resource"
        linkCardTwo="Resources name"
        linkCardThree="Another resource"
        linkCardFour="Final resource"
      />
      <CardList
        nameCardList="Legal"
        linkCardOne="Privacy policy"
        linkCardTwo="Terms of use"
      />
    </div>
  );
}
export default Footer;
