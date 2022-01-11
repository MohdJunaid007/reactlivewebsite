import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/cat.jpg";
import Common from "./Common";
import newimg from "../src/img/new.jpg";

const New = () => {
  return (
    <Common
      name="Sell your old Books on "
      imgsrc={newimg}
      visit="/contact"
      btnname="Sell now"
    />
  );
};

export default New;
