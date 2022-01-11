import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/bookHome.jpeg";
import Common from "./Common";

const Home = () => {
  return (
    <Common
    name="Welcome to "
    imgsrc={web}
    visit="/service"
    btnname="get started"/>
  );
};

export default Home;
