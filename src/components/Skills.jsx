import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./Skills.css";

function Skills() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Thoriq AS - Skills</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="skills-wrapper">
        <div className="skills-left animate__animated animate__zoomIn">
          <h3>Skills</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>03</strong>
          </h4>
        </div>
        <div className="skills-right">
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-html5-plain-wordmark colored"
                title="HTML"
              ></i>
              <i
                className="devicon-css3-plain-wordmark colored"
                title="CSS"
              ></i>
              <i
                className="devicon-javascript-plain colored"
                title="JavaScript"
              ></i>
              <i className="devicon-php-plain colored" title="PHP"></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-tailwindcss-plain colored"
                title="Tailwind"
              ></i>

              <i
                className="devicon-bootstrap-plain-wordmark colored"
                title="Bootstrap"
              ></i>
              <i
                className="devicon-react-original-wordmark colored"
                title="React JS"
              ></i>
              <i
                className="devicon-mysql-plain-wordmark colored"
                title="MySQL"
              ></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-mongodb-plain-wordmark colored"
                title="Mongodb"
              ></i>
              <i
                className="devicon-laravel-plain-wordmark colored"
                title="Laravel"
              ></i>
              <i
                className="devicon-codeigniter-plain-wordmark colored"
                title="Codeingniter"
              ></i>

              <i
                className="devicon-django-plain-wordmark colored"
                title="Django"
              ></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i className="devicon-python-plain colored" title="Pyhton"></i>

              <i className="devicon-sass-original colored" title="Sass"></i>
              <i className="devicon-git-plain colored" title="Git"></i>

              <i
                className="devicon-visualstudio-plain colored"
                title="Visual Studio Code"
              ></i>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Skills;
