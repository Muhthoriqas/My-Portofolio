import React from "react";
import onelife from "../assets/img/E-Bookpolis.png";
import { Container } from "react-bootstrap";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import "./projects2.css";

const Portfolio = () => {
  return (
    <div id="portfolio" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <div className="col-sm-12">
                <h2>Portfolio</h2>
                <br />
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img src={onelife} className="img-fluid" alt="1Life" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img src={onelife} className="img-fluid" alt="Alembic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
