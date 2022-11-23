import { Container } from "react-bootstrap";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import Project1 from "../assets/img/Project1.png";
import Project2 from "../assets/img/Project2.png";
import Project3 from "../assets/img/Project3.png";
import Project4 from "../assets/img/Project4.png";
import Project5 from "../assets/img/Project5.png";
import Project6 from "../assets/img/Project6.png";
import Project7 from "../assets/img/Project7.png";
import Project8 from "../assets/img/Project8.png";
import Project9 from "../assets/img/Project9.png";
import Project10 from "../assets/img/Project10.png";
import Project11 from "../assets/img/Project11.png";
import Project12 from "../assets/img/Project12.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Player } from "video-react";

import "./Projects.css";

function Projects() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Thoriq AS - Project</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="projects-container">
        <div className="projects-title animate__animated animate__zoomIn">
          <h3>Projects</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>04</strong>
          </h4>
        </div>
        <div className="projects-wrapper animate__animated animate__fadeIn animate_slower my-4">
          <div className="row custom-margin-bottom">
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project1} alt="Project 1" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>SEFOR</h3>
                  <p>
                    SEFOR is a website to search food recipes around the world,
                    this website uses the edamam API.
                  </p>
                  <a
                    className="btn-website"
                    href="https://muhthoriqas.github.io/Google-Books-Search-ReactJS/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Muhthoriqas/Google-Books-Search-ReactJS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">Javascript</span>
                    <span id="tech-stack">SASS</span>
                    <span id="tech-stack">API</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project2} alt="Project 2" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>GOBOKS</h3>
                  <p>
                    GOBOKS is a website to search books from google. This
                    website uses the Google Books APIs.
                  </p>
                  <a
                    className="btn-github"
                    href="https://github.com/Syafwan000/noshi-wedding-invitation"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">ReactJS</span>
                    <span id="tech-stack">Reactstrap</span>
                    <span id="tech-stack">API</span>
                    <p></p>
                    <span id="tech-stack">MDB React UI</span>
                    <span id="tech-stack">React Toastify</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project3} alt="Project 3" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>E-Bookpolis</h3>
                  <p>
                    E-bookpolis is a website for selling and ordering book
                    products.
                  </p>
                  <a
                    className="btn-website"
                    href="http://bisa-ngopi.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Syafwan000/bisa-ngopi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">Javascript</span>
                    <span id="tech-stack">SwiperJS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project6} alt="Project 4" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>Dapper Barber</h3>
                  <p>
                    Dapper barber is a website for finding the best barbers in a
                    city
                  </p>
                  <a
                    className="btn-website"
                    href="https://muhthoriqas.github.io/WebsiteBarber_Dapper/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Muhthoriqas/WebsiteBarber_Dapper"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">Bootstrap 5</span>
                    <span id="tech-stack">PHP</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <img src={Project7} alt="Project 6" loading="lazy" />
                <div className="project-content">
                  <h3>Weather Search</h3>
                  <p>
                    Is a website to find the current weather around the world,
                    this website uses the OpenWeather API.
                  </p>
                  <a
                    className="btn-website"
                    href="https://muhthoriqas.github.io/WeatherApp-React/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Muhthoriqas/WeatherApp-React"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">React JS</span>
                    <span id="tech-stack">SCSS</span>
                    <span id="tech-stack">API</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <img src={Project5} alt="Project 5" loading="lazy" />
                <div className="project-content">
                  <h3>Ordering Foods </h3>
                  <p>
                    Website for ordering food and drinks, on this website there
                    is a special menu for the admin who can change the menu food
                    and users who can only view and order food.
                  </p>

                  <a
                    className="btn-github"
                    href="https://github.com/Muhthoriqas/FoodOrdering-Django"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">Django</span>
                    <span id="tech-stack">Python</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col project-col">
              <div className="project-card">
                <img src={Project10} alt="Project 7" loading="lazy" />
                <div className="project-content">
                  <h3>To Do List</h3>
                  <p>Website to record any things you have to do.</p>
                  <a
                    className="btn-website"
                    href="https://muhthoriqas.github.io/Todo-JavaScripts/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Muhthoriqas/Todo-JavaScripts"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">Vanila Javascript</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <img src={Project8} alt="Project 8" loading="lazy" />
                <div className="project-content">
                  <h3>AniMa</h3>
                  <p>
                    AniMa is a website landing page to find various kinds of
                    anime and manga.
                  </p>
                  <a
                    className="btn-website"
                    href="https://muhthoriqas.github.io/WebLandingPage_Anime_ReactJS/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Muhthoriqas/WebLandingPage_Anime_ReactJS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">React</span>
                    <span id="tech-stack">React Bootstrap</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <img src={Project9} alt="Project 9" loading="lazy" />
                <div className="project-content">
                  <h3>Riq Travel</h3>
                  <p>
                    Riq Travel is a website to find the best mentors and tours
                    in Makassar city
                  </p>
                  <a
                    className="btn-website"
                    href="https://muhthoriqas.github.io/WebsiteTravel_Boostrap/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Muhthoriqas/WebsiteTravel_Boostrap"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">Bootstrap 5</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col project-col">
              <div className="project-card">
                <img src={Project11} alt="Project 11" loading="lazy" />
                <div className="project-content">
                  <h3>Marugame Landing Page</h3>
                  <p>
                    Website to promote food menus at marugame udon restaurants
                  </p>
                  <a
                    className="btn-website"
                    href="https://muhthoriqas.github.io/Marugame-Udon-LandingPage/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Muhthoriqas/Marugame-Udon-LandingPage"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">Bootstrap 5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <img src={Project12} alt="Project 10" loading="lazy" />
                <div className="project-content">
                  <h3>Fish Weight Prediciton</h3>
                  <p>
                    This is a project to detect fish weight using 2 machine
                    learning models, namely linear regression and polynomial
                    regression
                  </p>

                  <a
                    className="btn-github"
                    href="https://github.com/Muhthoriqas/Fish_Weight_Prediction_Linear_And_Polynomial_Regression"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">Python</span>
                    <span id="tech-stack">Machine Learning</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img
                    src={Project4}
                    alt="Project 12"
                    className="dif-image-project"
                    loading="lazy"
                  />
                </div>
                <div className="project-content">
                  <h3>Food Ordering MU</h3>
                  <p>
                    Food ordering application at Marugame Udon restaurant, this
                    application consists of users/buyers and there is a special
                    application for admin/waitresses
                  </p>

                  <a
                    className="btn-github"
                    href="https://github.com/Muhthoriqas/AplikasiPemesananMakananMarugameUdon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">Java</span>
                    <span id="tech-stack">Android</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col project-col">
              <div className="project-card">
                <img src={Project13} alt="Project 13" loading="lazy" />
                <div className="project-content">
                  <h3>Covidteria</h3>
                  <p>
                    Proyek ini adalah web kuesioner mengenai Covid-19, dan juga
                    menyajikan data sembuh, terpapar, dan kematian akibat
                    Covid-19 (API)
                  </p>
                  <a
                    className="btn-website"
                    href="http://covidteria.rf.gd/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Syafwan000/web-covidteria"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">PHP</span>
                    <span id="tech-stack">Bootstrap</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Projects;
