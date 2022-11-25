import Certificate1 from "../assets/img/Certificate1.webp";
import Certificate2 from "../assets/img/Certificate2.webp";
import Certificate3 from "../assets/img/Certificate3.webp";
import Certificate4 from "../assets/img/Certificate4.webp";
import Certificate5 from "../assets/img/Certificate5.webp";
import Certificate6 from "../assets/img/Certificate6.webp";
import Certificate7 from "../assets/img/Certificate7.webp";
import Certificate8 from "../assets/img/Certificate8.webp";
import Certificate9 from "../assets/img/Certificate9.webp";
import Certificate10 from "../assets/img/Certificate10.webp";
import Certificate11 from "../assets/img/Certificate11.webp";
import Certificate12 from "../assets/img/Certificate12.webp";
import Certificate13 from "../assets/img/Certificate13.webp";
import Certificate14 from "../assets/img/Certificate14.webp";
import Certificate15 from "../assets/img/Certificate15.webp";
import Certificate16 from "../assets/img/Certificate16.webp";
import Certificate17 from "../assets/img/Certificate17.webp";
import Certificate18 from "../assets/img/Certificate18.webp";
import Certificate19 from "../assets/img/Certificate19.webp";
import Certificate20 from "../assets/img/Certificate20.webp";
import Certificate21 from "../assets/img/Certificate21.webp";

import FsLightbox from "fslightbox-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { useState } from "react";
import "./About.css";

function About() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Thoriq AS - About</title>
        </Helmet>
      </HelmetProvider>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          Certificate1,
          Certificate2,
          Certificate3,
          Certificate4,
          Certificate5,
          Certificate6,
          Certificate7,
          Certificate8,
          Certificate9,
          Certificate10,
          Certificate11,
          Certificate12,
          Certificate13,
          Certificate14,
          Certificate15,
          Certificate16,
          Certificate17,
          Certificate18,
          Certificate19,
          Certificate20,
          Certificate21,
        ]}
        slide={lightboxController.slide}
      />
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>About</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>02</strong>
          </h4>
        </div>
        <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
          <p>
            Hi, I'm Muh Thoriq AS, a student majoring in information systems at
            one of the best universities in Sulawesi, namely Hasanuddin
            University. Now I enjoy learning about web programming and cloud
            computing. I am enthusiastic, self-motivated, reliable, responsible
            and hardworking person. I can work well under pressure and adhere to
            tight deadlines.
          </p>

          <h4>Certificates</h4>
          <span>─────</span>
          <div className="certificates-wrapper">
            <div className="row my-2">
              <div className="col certificates-ratio">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate1}
                  alt="Certificate 1"
                  onClick={() => openLightboxOnSlide(1)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate2}
                  alt="Certificate 2"
                  onClick={() => openLightboxOnSlide(2)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate3}
                  alt="Certificate 3"
                  onClick={() => openLightboxOnSlide(3)}
                />
              </div>
            </div>
            <div className="row my-4">
              <div className="col certificates-ratio">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate4}
                  alt="Certificate 4"
                  onClick={() => openLightboxOnSlide(4)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate5}
                  alt="Certificate 5"
                  onClick={() => openLightboxOnSlide(5)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate6}
                  alt="Certificate 6"
                  onClick={() => openLightboxOnSlide(6)}
                />
              </div>
            </div>
            <div className="row my-4">
              <div className="col certificates-ratio">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate7}
                  alt="Certificate 7"
                  onClick={() => openLightboxOnSlide(7)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate8}
                  alt="Certificate 8"
                  onClick={() => openLightboxOnSlide(8)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate9}
                  alt="Certificate 9"
                  onClick={() => openLightboxOnSlide(9)}
                />
              </div>
            </div>
            <div className="row my-4">
              <div className="col certificates-ratio">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate10}
                  alt="Certificate 10"
                  onClick={() => openLightboxOnSlide(10)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate11}
                  alt="Certificate 11"
                  onClick={() => openLightboxOnSlide(11)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate12}
                  alt="Certificate 12"
                  onClick={() => openLightboxOnSlide(12)}
                />
              </div>
            </div>
            <div className="row my-4">
              <div className="col certificates-ratio">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate13}
                  alt="Certificate 13"
                  onClick={() => openLightboxOnSlide(13)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate14}
                  alt="Certificate 14"
                  onClick={() => openLightboxOnSlide(14)}
                />
              </div>
              <div className="col certificates-ratio gap-image dif-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate21}
                  alt="Certificate 21"
                  onClick={() => openLightboxOnSlide(21)}
                />
              </div>
              <div className="col certificates-ratio gap-image dif-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate16}
                  alt="Certificate 16"
                  onClick={() => openLightboxOnSlide(16)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate17}
                  alt="Certificate 17"
                  onClick={() => openLightboxOnSlide(17)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate18}
                  alt="Certificate 18"
                  onClick={() => openLightboxOnSlide(18)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate19}
                  alt="Certificate 19"
                  onClick={() => openLightboxOnSlide(19)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate15}
                  alt="Certificate 15"
                  onClick={() => openLightboxOnSlide(15)}
                />
              </div>
              <div className="col certificates-ratio gap-image">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate20}
                  alt="Certificate 20"
                  onClick={() => openLightboxOnSlide(20)}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
