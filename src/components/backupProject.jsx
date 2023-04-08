// import { Container } from "react-bootstrap";
// import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
// import Project1 from "../assets/img/Project1.webp";
// import Project2 from "../assets/img/Project2.webp";
// import Project3 from "../assets/img/Project3.webp";
// import Project4 from "../assets/img/Project4.webp";
// import Project5 from "../assets/img/Project5.webp";
// import Project6 from "../assets/img/Project6.webp";
// import Project7 from "../assets/img/Project7.webp";
// import Project8 from "../assets/img/Project8.webp";
// import Project9 from "../assets/img/Project9.webp";
// import Project10 from "../assets/img/Project10.webp";
// import Project11 from "../assets/img/Project11.webp";
// import Project12 from "../assets/img/Project12.webp";
// import Project13 from "../assets/img/Project13.webp";
// import Project14 from "../assets/img/Project14.webp";
// import Project15 from "../assets/img/Project15.webp";

// import { Helmet, HelmetProvider } from "react-helmet-async";
// // import { Player } from "video-react";

// import "./Projects.css";

// function Projects() {
//   return (
//     <>
//       <HelmetProvider>
//         <Helmet>
//           <title>Thoriq AS - Project</title>
//         </Helmet>
//       </HelmetProvider>
//       <Container fluid className="projects-container">
//         <div className="projects-title animate__animated animate__zoomIn">
//           <h3>Projects</h3>
//           <h4>
//             ───&nbsp;&nbsp;Page <strong>04</strong>
//           </h4>
//         </div>
//         <div className="projects-wrapper animate__animated animate__fadeIn animate_slower my-4">
//           <div className="row custom-margin-bottom">
//             <div className="col project-col">
//               <div className="project-card">
//                 <div className="imgsec">
//                   <img src={Project1} alt="Project 1" loading="lazy" />
//                 </div>
//                 <div className="project-content">
//                   <h3>SEFOR</h3>
//                   <p>
//                     SEFOR is a website to search food recipes around the world,
//                     this website uses the edamam API.
//                   </p>
//                   <a
//                     className="btn-website"
//                     href="https://muhthoriqas.github.io/Recipe-Foods/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiOutlineLink className="project-icon" />
//                     &nbsp;&nbsp;Website
//                   </a>
//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/Recipe-Foods"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">Javascript</span>
//                     <span id="tech-stack">SASS</span>
//                     <span id="tech-stack">API</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col project-col">
//               <div className="project-card">
//                 <div className="imgsec">
//                   <img src={Project13} alt="Project 13" loading="lazy" />
//                 </div>
//                 <div className="project-content">
//                   <h3>Animal Aid</h3>
//                   <p>
//                     Animal Aid is an organization that saves animals from
//                     suffering, rehabilitates and releases them back into the
//                     wild.
//                   </p>
//                   <a className="btn-maintenence" href="#" rel="noreferrer">
//                     <AiOutlineLink className="project-icon" />
//                     &nbsp;&nbsp; Website Maintenence
//                   </a>
//                   {/* <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/Animal-Aid"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a> */}
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">Javascript</span>
//                     <span id="tech-stack">HTML5</span>
//                     <span id="tech-stack">CSS3</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col project-col">
//               <div className="project-card">
//                 <div className="imgsec">
//                   <img src={Project2} alt="Project 2" loading="lazy" />
//                 </div>
//                 <div className="project-content">
//                   <h3>GOBOKS</h3>
//                   <p>
//                     GOBOKS is a website to search books from google. This
//                     website uses the Google Books APIs.
//                   </p>
//                   <a
//                     className="btn-website"
//                     href="https://muhthoriqas.github.io/Google-Books-Search-ReactJS/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiOutlineLink className="project-icon" />
//                     &nbsp;&nbsp;Website
//                   </a>
//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/Google-Books-Search-ReactJS"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">ReactJS</span>
//                     <span id="tech-stack">Reactstrap</span>
//                     <span id="tech-stack">API</span>
//                     <p></p>
//                     <span id="tech-stack">MDB React UI</span>
//                     <span id="tech-stack">React Toastify</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col project-col">
//               <div className="project-card">
//                 <div className="imgsec">
//                   <img src={Project3} alt="Project 3" loading="lazy" />
//                 </div>
//                 <div className="project-content">
//                   <h3>E-Bookpolis</h3>
//                   <p>
//                     E-bookpolis is a website for selling and ordering book
//                     products (Front-End).
//                   </p>
//                   <a
//                     className="btn-website"
//                     href="https://muhthoriqas.github.io/E-BookStore/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiOutlineLink className="project-icon" />
//                     &nbsp;&nbsp;Website
//                   </a>
//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/E-BookStore"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">Javascript</span>
//                     <span id="tech-stack">SwiperJS</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col project-col">
//               <div className="project-card">
//                 <img src={Project14} alt="Project 14" loading="lazy" />
//                 <div className="project-content">
//                   <h3>Hoax News Detection (Team Project)</h3>
//                   <p>
//                     The project we created is a hoax news detection website, by
//                     simply entering the url of the news website you want to know
//                     the truth of
//                   </p>

//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/Hoax-News-Detection"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">Python</span>
//                     <span id="tech-stack">Flask</span>
//                     <span id="tech-stack">Bootstrap5</span>
//                     <p></p>
//                     <span id="tech-stack">Machine Learning</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col project-col">
//               <div className="project-card">
//                 <div className="imgsec">
//                   <img src={Project6} alt="Project 4" loading="lazy" />
//                 </div>
//                 <div className="project-content">
//                   <h3>Dapper Barber</h3>
//                   <p>
//                     Dapper barber is a website for finding the best barbers in a
//                     city
//                   </p>
//                   <a
//                     className="btn-website"
//                     href="https://muhthoriqas.github.io/WebsiteBarber_Dapper/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiOutlineLink className="project-icon" />
//                     &nbsp;&nbsp;Website
//                   </a>
//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/WebsiteBarber_Dapper"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">Bootstrap 5</span>
//                     <span id="tech-stack">PHP</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col project-col">
//               <div className="project-card">
//                 <img src={Project7} alt="Project 6" loading="lazy" />
//                 <div className="project-content">
//                   <h3>Weather Search</h3>
//                   <p>
//                     Is a website to find the current weather around the world,
//                     this website uses the OpenWeather API.
//                   </p>
//                   <a
//                     className="btn-website"
//                     href="https://muhthoriqas.github.io/WeatherApp-React/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiOutlineLink className="project-icon" />
//                     &nbsp;&nbsp;Website
//                   </a>
//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/WeatherApp-React"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">ReactJS</span>
//                     <span id="tech-stack">SCSS</span>
//                     <span id="tech-stack">API</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col project-col">
//               <div className="project-card">
//                 <img src={Project15} alt="Project 15" loading="lazy" />
//                 <div className="project-content">
//                   <h3>Personal Notes</h3>
//                   <p>
//                     In this website you can use CRUD operation to notes, search
//                     notes, archive notes, and more validation.
//                   </p>
//                   <a
//                     className="btn-website"
//                     href="https://personal-notes-thoriqas.vercel.app/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiOutlineLink className="project-icon" />
//                     &nbsp;&nbsp;Website
//                   </a>
//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/Notes-ReactJS"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">ReactJS</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col project-col">
//               <div className="project-card">
//                 <img src={Project5} alt="Project 5" loading="lazy" />
//                 <div className="project-content">
//                   <h3>Ordering Foods </h3>
//                   <p>
//                     Website for ordering food and drinks, on this website there
//                     is a special menu for the admin who can change the menu food
//                     and users who can only view and order food.
//                   </p>

//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/FoodOrdering-Django"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">Django</span>
//                     <span id="tech-stack">Python</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col project-col">
//               <div className="project-card">
//                 <img src={Project10} alt="Project 7" loading="lazy" />
//                 <div className="project-content">
//                   <h3>To Do List</h3>
//                   <p>Website to record any things you have to do.</p>
//                   <a
//                     className="btn-website"
//                     href="https://muhthoriqas.github.io/Todo-JavaScripts/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiOutlineLink className="project-icon" />
//                     &nbsp;&nbsp;Website
//                   </a>
//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/Todo-JavaScripts"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">Javascript</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col project-col">
//               <div className="project-card">
//                 <img src={Project8} alt="Project 8" loading="lazy" />
//                 <div className="project-content">
//                   <h3>AniMa</h3>
//                   <p>
//                     AniMa is a website landing page to find various kinds of
//                     anime and manga (Front-End).
//                   </p>
//                   <a
//                     className="btn-website"
//                     href="https://muhthoriqas.github.io/WebLandingPage_Anime_ReactJS/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiOutlineLink className="project-icon" />
//                     &nbsp;&nbsp;Website
//                   </a>
//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/WebLandingPage_Anime_ReactJS"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">ReactJS</span>
//                     <span id="tech-stack">React Bootstrap</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col project-col">
//               <div className="project-card">
//                 <img src={Project9} alt="Project 9" loading="lazy" />
//                 <div className="project-content">
//                   <h3>Riq Travel</h3>
//                   <p>
//                     Riq Travel is a website to find the best mentors and tours
//                     in Makassar city
//                   </p>
//                   <a
//                     className="btn-website"
//                     href="https://muhthoriqas.github.io/WebsiteTravel_Boostrap/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiOutlineLink className="project-icon" />
//                     &nbsp;&nbsp;Website
//                   </a>
//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/WebsiteTravel_Boostrap"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">Bootstrap 5</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col project-col">
//               <div className="project-card">
//                 <img src={Project11} alt="Project 11" loading="lazy" />
//                 <div className="project-content">
//                   <h3>Marugame Landing Page</h3>
//                   <p>
//                     Website to promote food menus at marugame udon restaurants
//                   </p>
//                   <a
//                     className="btn-website"
//                     href="https://muhthoriqas.github.io/Marugame-Udon-LandingPage/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiOutlineLink className="project-icon" />
//                     &nbsp;&nbsp;Website
//                   </a>
//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/Marugame-Udon-LandingPage"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">Bootstrap 5</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col project-col">
//               <div className="project-card">
//                 <img src={Project12} alt="Project 10" loading="lazy" />
//                 <div className="project-content">
//                   <h3>Fish Weight Prediciton</h3>
//                   <p>
//                     This is a project to detect fish weight using 2 machine
//                     learning models, namely linear regression and polynomial
//                     regression
//                   </p>

//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/Fish_Weight_Prediction_Linear_And_Polynomial_Regression"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">Python</span>
//                     <span id="tech-stack">Machine Learning</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col project-col">
//               <div className="project-card">
//                 <div className="imgsec">
//                   <img
//                     src={Project4}
//                     alt="Project 12"
//                     className="dif-image-project"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="project-content">
//                   <h3>Food Ordering MU</h3>
//                   <p>
//                     Food ordering application at Marugame Udon restaurant, this
//                     application consists of users/buyers and there is a special
//                     application for admin/waitresses
//                   </p>

//                   <a
//                     className="btn-github"
//                     href="https://github.com/Muhthoriqas/AplikasiPemesananMakananMarugameUdon"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub className="project-icon" />
//                     &nbsp;&nbsp;GitHub
//                   </a>
//                   <div className="d-block tech-stack-wrapper">
//                     <span id="tech-stack">Java</span>
//                     <span id="tech-stack">Android</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }

// export default Projects;

// [
//   {
//     "id": 1,
//     "img": "",
//     "title": "SEFOR",
//     "description": "SEFOR is a website to search food recipes around the world, this website uses the edamam API.",
//     "websiteUrl": "https://muhthoriqas.github.io/Recipe-Foods/",
//     "githubUrl": "https://github.com/Muhthoriqas/Recipe-Foods",
//     "techStack": ["Javascript", "SASS", "API"]
//   },
//   {
//     "id": 2,
//     "img": "/src/assets/img/Project10.webp",
//     "title": "GOBOKS",
//     "description": "GOBOKS is a website to search books from google. This website uses the Google Books APIs.",
//     "websiteUrl": "https://muhthoriqas.github.io/Google-Books-Search-ReactJS/",
//     "githubUrl": "https://github.com/Muhthoriqas/Google-Books-Search-ReactJS",
//     "techStack": ["React", "Javascript", "API"]
//   }
// ]

// import Certificate1 from "../assets/img/Certificate1.webp";
// import Certificate2 from "../assets/img/Certificate2.webp";
// import Certificate3 from "../assets/img/Certificate3.webp";
// import Certificate4 from "../assets/img/Certificate4.webp";
// import Certificate5 from "../assets/img/Certificate5.webp";
// import Certificate6 from "../assets/img/Certificate6.webp";
// import Certificate7 from "../assets/img/Certificate7.webp";
// import Certificate8 from "../assets/img/Certificate8.webp";
// import Certificate9 from "../assets/img/Certificate9.webp";
// import Certificate10 from "../assets/img/Certificate10.webp";
// import Certificate11 from "../assets/img/Certificate11.webp";
// import Certificate12 from "../assets/img/Certificate12.webp";
// import Certificate13 from "../assets/img/Certificate13.webp";
// import Certificate14 from "../assets/img/Certificate14.webp";
// import Certificate15 from "../assets/img/Certificate15.webp";
// import Certificate16 from "../assets/img/Certificate16.webp";
// import Certificate17 from "../assets/img/Certificate17.webp";
// import Certificate18 from "../assets/img/Certificate18.webp";
// import Certificate19 from "../assets/img/Certificate19.webp";
// import Certificate20 from "../assets/img/Certificate20.webp";
// import Certificate21 from "../assets/img/Certificate21.webp";
// import Certificate22 from "../assets/img/Certificate22.webp";
// import Certificate23 from "../assets/img/Certificate23.webp";
// import Certificate24 from "../assets/img/Certificate24.webp";
// import Certificate25 from "../assets/img/Certificate25.webp";
// import Certificate26 from "../assets/img/Certificate26.webp";
// import Certificate27 from "../assets/img/Certificate27.webp";
// import Certificate28 from "../assets/img/Certificate28.webp";
// import Certificate29 from "../assets/img/Certificate29.webp";
// import Certificate30 from "../assets/img/Certificate30.webp";
// import Certificate31 from "../assets/img/Certificate31.webp";
// import Certificate32 from "../assets/img/Certificate32.webp";
// import Certificate33 from "../assets/img/Certificate33.webp";

// import FsLightbox from "fslightbox-react";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Container } from "react-bootstrap";
// import { useState } from "react";
// import "./About.css";

// function About() {
//   const [lightboxController, setLightboxController] = useState({
//     toggler: false,
//     slide: 1,
//   });

//   function openLightboxOnSlide(number) {
//     setLightboxController({
//       toggler: !lightboxController.toggler,
//       slide: number,
//     });
//   }

//   return (
//     <>
//       <HelmetProvider>
//         <Helmet>
//           <title>Thoriq AS - About</title>
//         </Helmet>
//       </HelmetProvider>
//       <FsLightbox
//         toggler={lightboxController.toggler}
//         sources={[
//           Certificate1,
//           Certificate2,
//           Certificate3,
//           Certificate4,
//           Certificate5,
//           Certificate6,
//           Certificate7,
//           Certificate8,
//           Certificate9,
//           Certificate10,
//           Certificate11,
//           Certificate12,
//           Certificate13,
//           Certificate14,
//           Certificate15,
//           Certificate16,
//           Certificate17,
//           Certificate18,
//           Certificate19,
//           Certificate20,
//           Certificate21,
//           Certificate22,
//           Certificate23,
//           Certificate24,
//           Certificate25,
//           Certificate26,
//           Certificate27,
//           Certificate28,
//           Certificate29,
//           Certificate30,
//           Certificate31,
//           Certificate32,
//           Certificate33,
//         ]}
//         slide={lightboxController.slide}
//       />
//       <Container fluid className="about-wrapper">
//         <div className="about-left animate__animated animate__zoomIn">
//           <h3>About</h3>
//           <h4>
//             ───&nbsp;&nbsp;Page <strong>02</strong>
//           </h4>
//         </div>
//         <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
//           <p>
//             Hi, I'm Muh Thoriq AS, a student majoring in information systems at
//             one of the best universities in Sulawesi, namely Hasanuddin
//             University. Now I enjoy learning about web programming and cloud
//             computing. I am enthusiastic, self-motivated, reliable, responsible
//             and hardworking person. I can work well under pressure and adhere to
//             tight deadlines.
//           </p>

//           <h4>Certificates</h4>
//           <span>─────</span>
//           <div className="certificates-wrapper">
//             <div className="row my-2">
//               <div className="row my-4">
//                 <div className="col certificates-ratio">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate22}
//                     alt="Certificate 22"
//                     onClick={() => openLightboxOnSlide(22)}
//                   />
//                 </div>

//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate23}
//                     alt="Certificate 23"
//                     onClick={() => openLightboxOnSlide(23)}
//                   />
//                 </div>

//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate24}
//                     alt="Certificate 24"
//                     onClick={() => openLightboxOnSlide(24)}
//                   />
//                 </div>
//               </div>

//               <div className="row my-4">
//                 <div className="col certificates-ratio">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate25}
//                     alt="Certificate 25"
//                     onClick={() => openLightboxOnSlide(25)}
//                   />
//                 </div>

//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate26}
//                     alt="Certificate 26"
//                     onClick={() => openLightboxOnSlide(26)}
//                   />
//                 </div>

//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate27}
//                     alt="Certificate 27"
//                     onClick={() => openLightboxOnSlide(27)}
//                   />
//                 </div>
//               </div>

//               <div className="row my-4">
//                 <div className="col certificates-ratio ">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate28}
//                     alt="Certificate 28"
//                     onClick={() => openLightboxOnSlide(28)}
//                   />
//                 </div>

//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate29}
//                     alt="Certificate 29"
//                     onClick={() => openLightboxOnSlide(29)}
//                   />
//                 </div>

//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate30}
//                     alt="Certificate 30"
//                     onClick={() => openLightboxOnSlide(30)}
//                   />
//                 </div>
//               </div>

//               <div className="row my-4">
//                 <div className="col certificates-ratio ">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate31}
//                     alt="Certificate 31"
//                     onClick={() => openLightboxOnSlide(31)}
//                   />
//                 </div>

//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate32}
//                     alt="Certificate 32"
//                     onClick={() => openLightboxOnSlide(32)}
//                   />
//                 </div>

//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate33}
//                     alt="Certificate 33"
//                     onClick={() => openLightboxOnSlide(33)}
//                   />
//                 </div>
//               </div>

//               <div className="row my-4">
//                 <div className="col certificates-ratio">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate1}
//                     alt="Certificate 1"
//                     onClick={() => openLightboxOnSlide(1)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate2}
//                     alt="Certificate 2"
//                     onClick={() => openLightboxOnSlide(2)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate3}
//                     alt="Certificate 3"
//                     onClick={() => openLightboxOnSlide(3)}
//                   />
//                 </div>
//               </div>
//               <div className="row my-4">
//                 <div className="col certificates-ratio">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate4}
//                     alt="Certificate 4"
//                     onClick={() => openLightboxOnSlide(4)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate5}
//                     alt="Certificate 5"
//                     onClick={() => openLightboxOnSlide(5)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate6}
//                     alt="Certificate 6"
//                     onClick={() => openLightboxOnSlide(6)}
//                   />
//                 </div>
//               </div>
//               <div className="row my-4">
//                 <div className="col certificates-ratio">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate7}
//                     alt="Certificate 7"
//                     onClick={() => openLightboxOnSlide(7)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate8}
//                     alt="Certificate 8"
//                     onClick={() => openLightboxOnSlide(8)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate9}
//                     alt="Certificate 9"
//                     onClick={() => openLightboxOnSlide(9)}
//                   />
//                 </div>
//               </div>
//               <div className="row my-4">
//                 <div className="col certificates-ratio">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate10}
//                     alt="Certificate 10"
//                     onClick={() => openLightboxOnSlide(10)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate11}
//                     alt="Certificate 11"
//                     onClick={() => openLightboxOnSlide(11)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate12}
//                     alt="Certificate 12"
//                     onClick={() => openLightboxOnSlide(12)}
//                   />
//                 </div>
//               </div>
//               <div className="row my-4">
//                 <div className="col certificates-ratio">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate13}
//                     alt="Certificate 13"
//                     onClick={() => openLightboxOnSlide(13)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate14}
//                     alt="Certificate 14"
//                     onClick={() => openLightboxOnSlide(14)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image dif-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate21}
//                     alt="Certificate 21"
//                     onClick={() => openLightboxOnSlide(21)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image dif-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate16}
//                     alt="Certificate 16"
//                     onClick={() => openLightboxOnSlide(16)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate17}
//                     alt="Certificate 17"
//                     onClick={() => openLightboxOnSlide(17)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate18}
//                     alt="Certificate 18"
//                     onClick={() => openLightboxOnSlide(18)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate19}
//                     alt="Certificate 19"
//                     onClick={() => openLightboxOnSlide(19)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate15}
//                     alt="Certificate 15"
//                     onClick={() => openLightboxOnSlide(15)}
//                   />
//                 </div>
//                 <div className="col certificates-ratio gap-image">
//                   <img
//                     className="shadow"
//                     loading="lazy"
//                     src={Certificate20}
//                     alt="Certificate 20"
//                     onClick={() => openLightboxOnSlide(20)}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }

// export default About;

