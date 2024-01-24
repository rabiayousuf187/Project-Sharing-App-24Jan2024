import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from "../../img/testimonial/person_2.jpg"
const Testimonial = (props) => {
    return (
        <>
            <div id="testimonials" className="work">
                <div className="container">
                    <div className="text-center">
                        <h1>Testimonials</h1>
                    </div>
                    <Carousel className={props.className}>
                        <Carousel.Item interval={1500}>}
                            <Carousel.Caption className="ust-item">
                                <p>&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi in officia quidem dolorem unde nemo blanditiis placeat eius quaerat temporibus ducimus necessitatibus, alias labore, magni architecto, cumque exercitationem soluta?&quot;</p>
                                <div className="test-msg">
                                    <img alt=" " src={img1} />
                                    <span>John Smith</span>
                                </div> 
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <Carousel.Caption className="ust-item">
                                <p>&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi in officia quidem dolorem unde nemo blanditiis placeat eius quaerat temporibus ducimus necessitatibus, alias labore, magni architecto, cumque exercitationem soluta?&quot;</p>
                                <div className="test-msg">
                                    <img alt=" " src={img1} />
                                    <span>John Smith</span>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <Carousel.Caption className="ust-item">
                                <p>&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi in officia quidem dolorem unde nemo blanditiis placeat eius quaerat temporibus ducimus necessitatibus, alias labore, magni architecto, cumque exercitationem soluta?&quot;</p>
                                <div className="test-msg">
                                    <img alt=" " src={img1} />
                                    <span>John Smith</span>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Testimonial
