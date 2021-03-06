import React from 'react'
import { NavLink } from "react-router-dom";
import web from "../src/img/jd.png";
import Typical from 'react-typical';
const About = () => {
    return (
        <div>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                    Hi, Iām  <strong className="brand-name">Mohd Junaid </strong>
                    <h1 style={{fontSize:40}}>
                                <span  style={{color: "#F9004D"} }  >
                                <Typical style={{fontSize:40}}
                                     loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev š",
                                        1000,
                                        "Full Stack Developer š",
                                        1000,
                                        "MERN Stack Developer š»",
                                        1000,
                                        "React JS  šØāš»",
                                        1000,
                                    ]}
                                />
                                </span>
                            </h1>
                    </h1>
                    <h2 className="my-3">
                    Knack of building applications with front and back end operations. My interest deeply revolve around Data Structures, Algorithm, and Web Development.
                    </h2>
                    <div className="mt-3">
                        <NavLink to="./contact" className="btn btn-outline-primary btn-get-started"> Contact us </NavLink>
                    </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={web} className="img-fluid animated" alt="" />
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default About
