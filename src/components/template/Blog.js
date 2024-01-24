import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dumyBlog1 from '../../img/dumyBlog/dumyblog1.jpg'
import dumyBlog2 from '../../img/dumyBlog/dumyblog2.jpg'
import dumyBlog3 from '../../img/dumyBlog/dumyblog3.jpg'
import dumyBlog4 from '../../img/dumyBlog/dumyblog4.jpg'
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <>
            <div id="blog" className="work blog">
                <Container>
                    <div className="work-heading">
                        <h1>Blogs</h1>
                    </div>
                </Container>
                <Container>
                    <div className="work-row">
                        <Row>
                            <Col lg={4} className="img-1" >
                                <img src={dumyBlog1} />
                                <h4>Create Beautiful Website In Less Than An Hour</h4>
                                <h5>Ham Brook <span style={{margin: '0px 5px',}}>•</span> Jan 18, 2019<span style={{margin: '0px 5px',}}>•</span> <span style={{color: '#59dbc6',}}>News</span></h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus nam quam omnis nemo culpa exercitationem saepe iste dicta similique enim nihil molestiae dolorem optio animi ipsam, ullam voluptate laboriosam?
                                </p>
                                <a href="#">Continue Reading...</a>
                            </Col>
                            <Col lg={4} className="img-1">
                                <img src={dumyBlog2} />
                                <h4>Create Beautiful Website In Less Than An Hour</h4>
                                <h5>Ham Brook <span style={{margin: '0px 5px',}}>•</span> Jan 18, 2019<span style={{margin: '0px 5px',}}>•</span> <span style={{color: '#59dbc6',}}>News</span></h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus nam quam omnis nemo culpa exercitationem saepe iste dicta similique enim nihil molestiae dolorem optio animi ipsam, ullam voluptate laboriosam?
                                </p>
                                <a href="#">Continue Reading...</a>
                            </Col>
                            <Col lg={4} className="img-1">
                                <img src={dumyBlog3} />
                                <h4>Create Beautiful Website In Less Than An Hour</h4>
                                <h5>Ham Brook <span style={{margin: "0px 5px",}}>•</span> Jan 18, 2019<span style={{margin: '0px 5px',}}>•</span> <span style={{color: '#59dbc6',}}>News</span></h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus nam quam omnis nemo culpa exercitationem saepe iste dicta similique enim nihil molestiae dolorem optio animi ipsam, ullam voluptate laboriosam?
                                </p>
                                <a href="#">Continue Reading...</a>
                            </Col>
                            <Col lg={4} className="img-1" >
                                <img src={dumyBlog4} />
                                <h4>Create Beautiful Website In Less Than An Hour</h4>
                                <h5>Ham Brook <span style={{margin: '0px 5px',}}>•</span> Jan 18, 2019<span style={{margin: '0px 5px',}}>•</span> <span style={{color: '#59dbc6',}}>News</span></h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus nam quam omnis nemo culpa exercitationem saepe iste dicta similique enim nihil molestiae dolorem optio animi ipsam, ullam voluptate laboriosam?
                                </p>
                                <a href="#">Continue Reading...</a>
                            </Col>
                            <Col lg={4} className="img-1">
                                <img src={dumyBlog3} />
                                <h4>Create Beautiful Website In Less Than An Hour</h4>
                                <h5>Ham Brook <span style={{margin: '0px 5px',}}>•</span> Jan 18, 2019<span style={{margin: '0px 5px',}}>•</span> <span style={{color: '#59dbc6',}}>News</span></h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus nam quam omnis nemo culpa exercitationem saepe iste dicta similique enim nihil molestiae dolorem optio animi ipsam, ullam voluptate laboriosam?
                                </p>
                                <a href="#">Continue Reading...</a>
                            </Col>
                            <Col lg={4} className="img-1">
                                <img src={dumyBlog2} />
                                <h4>Create Beautiful Website In Less Than An Hour</h4>
                                <h5>Ham Brook <span style={{margin: "0px 5px",}}>•</span> Jan 18, 2019<span style={{margin: '0px 5px',}}>•</span> <span style={{color: '#59dbc6',}}>News</span></h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus nam quam omnis nemo culpa exercitationem saepe iste dicta similique enim nihil molestiae dolorem optio animi ipsam, ullam voluptate laboriosam?
                                </p>
                                <a href="#">Continue Reading...</a>
                            </Col>
                            <Col lg={4} className="img-1">
                                <img src={dumyBlog1} />
                                <h4>Create Beautiful Website In Less Than An Hour</h4>
                                <h5>Ham Brook <span style={{margin: "0px 5px",}}>•</span> Jan 18, 2019<span style={{margin: '0px 5px',}}>•</span> <span style={{color: '#59dbc6',}}>News</span></h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus nam quam omnis nemo culpa exercitationem saepe iste dicta similique enim nihil molestiae dolorem optio animi ipsam, ullam voluptate laboriosam?
                                </p>
                                <a href="#">Continue Reading...</a>
                            </Col>
                            <Col lg={4} className="img-1">
                                <img src={dumyBlog2} />
                                <h4>Create Beautiful Website In Less Than An Hour</h4>
                                <h5>Ham Brook <span style={{margin: "0px 5px",}}>•</span> Jan 18, 2019<span style={{margin: '0px 5px',}}>•</span> <span style={{color: '#59dbc6',}}>News</span></h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus nam quam omnis nemo culpa exercitationem saepe iste dicta similique enim nihil molestiae dolorem optio animi ipsam, ullam voluptate laboriosam?
                                </p>
                                <a href="#">Continue Reading...</a>
                            </Col>
                        </Row>
                        <Row className='section-margin'>
                            
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Blog
