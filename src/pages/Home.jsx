import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experinceImg from "../assets/images/experience.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testmonials from "../components/Testmonial/Testmonials";
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
                  Traveling Opens The Door To Creating{" "}
                  <span className="highlight">Memories</span>
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
              <h2 className="services__title">We Offer Our Best Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*-----------------featured tour section start--------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*-----------------featured tour section end--------------- */}

      {/*---------------- Experince Section start --------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With Our all expirence <br />
                  We Will Serve you{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aperiam est aspernatur recusandae reiciendis dolorem,
                  voluptatum magni! <br /> Quas delectus eius expedita
                  reiciendis temporibus voluptas, doloribus modi numquam cumque
                  omnis odit perspiciatis.
                </p>
              </div>
              <div className="container__warapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6> Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Reguler clients</h6>
                </div>{" "}
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experince</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experince__img">
                <img src={experinceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*---------------- Experince Section End --------------- */}

      {/*---------------- Gallery section start --------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Vist Our Customers Tour Gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/*---------------- Gallery section end --------------- */}

      {/*---------------- testimonial section start --------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testmonial__title">What Our Fans say about us </h2>
            </Col>
            <Col lg='12'>
              <Testmonials/>
            </Col>
          </Row>
        </Container>
      </section>
      {/*---------------- testimonial section End --------------- */}
    </>
  );
}

export default home;
