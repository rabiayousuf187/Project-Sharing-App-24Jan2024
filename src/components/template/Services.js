import React from 'react'

const Services = (props) => {
    return (
        <>
            <div id="about" className={"content"}>
                <div className="container">
                    <div className="content-box">
                        <div className="box-1">
                            <div>
                                <p>Served Over</p>
                                <h2>1',321',901</h2>
                                <p>Children in 150</p>
                                <p style={{padding: '12px 0px 31px'}}>Countries</p>
                                <a href="#">View OUR PROGRAM</a>
                            </div>
                        </div>
                        <div className="box-2">
                            <div>
                                <p className="head">Who Are We?</p>
                                <p className="text-2">
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', there live the blind texts.
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics', a large language ocean.
                                </p>
                                <p className="text-2" style={{marginBottom: '9%', fontSize: '15px',}}>
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                </p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
