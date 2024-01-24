import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import img from 'react-bootstrap/img';
import bannerImg from '../../img/banner.jpg'

function CarouselComp(props) {
  return (
    <Carousel className={props.className}>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100"  src={bannerImg} text="First slide" />
        <Carousel.Caption>
          <h2>Roaming the Globe, One Adventure at a Time</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100"  src={bannerImg} text="Second slide" />
        <Carousel.Caption>
          <h2>Unlocking Tomorrow's Tech Wonders"</h2>
          <p>Dive into the mesmerizing world of innovation. Our blog is your gateway to the future, with intriguing insights, cutting-edge gadgets, and the tech trends that will shape our world</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"  src={bannerImg} text="Third slide" />
        <Carousel.Caption>
          <h2>Crafting the Life of Your Dreams</h2>
          <p>
          Find inspiration for every facet of your life. Our blog is a treasure trove of personal growth, motivation, and lifestyle choices. Unleash your full potential and live the life you've imagined.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;