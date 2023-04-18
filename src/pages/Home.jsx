import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
function home() {
  return (
    <>
      {/*-----------------heroSection Start--------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo commodi ea non. Reiciendis delectus inventore
                  debitis iste impedit! Fugiat tempora pariatur odio laudantium
                  velit. Iure enim atque nihil nemo numquam.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box ">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/*-----------------heroSection Start--------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What We Serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*-----------------featured tour section start--------------- */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'}/>
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>
      {/*-----------------featured tour section end--------------- */}
    </>
  );
}

export default home;