import React from 'react'
import { Container } from 'react-bootstrap'
import CarouselComp from '../template/CarouselComp'
import Services from '../template/Services'
import Testimonial from '../template/Testimonial'
import Mission from '../template/Mission'
import Blog from '../template/Blog'

const Home = () => {
  return (
    <>
      <Container fluid className='banner section-marign' >
        <CarouselComp></CarouselComp>
      </Container>
      <Container fluid className='section-marign'>
        <h1>Home Page</h1>
        <Services></Services>
      </Container>
      <Container fluid className='section-marign'>
        <Mission></Mission>
      </Container>
      {/* <Container fluid className='section-marign'>
        <Blog></Blog>
      </Container> */}
      <Container fluid className='section-marign'>
        <Testimonial ></Testimonial>
      </Container>
    </>
  )
}

export default Home
