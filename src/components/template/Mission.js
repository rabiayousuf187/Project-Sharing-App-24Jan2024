import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb, faUsersViewfinder, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

const Mission = () => {
  return (
    <>
      <div id="mission" className="content mission">
        <Container>
            <div className="content-box">
                <div className="card-1">
                    <div className="icon">
                        <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <div>
                        <h3>Our Mission</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <a>Learn More</a>
                    </div>
                </div>
                <div className="card-1">
                    <div className="icon">
                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                    </div>
                    <div>
                        <h3>Make Donations</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        
                        <a>Learn More</a>
                    </div>

                </div>
                <div className="card-1">
                    <div className="icon">
                    <FontAwesomeIcon icon={faUsersViewfinder} />
                    </div>
                    <div>
                        <h3>We Need Volunteers</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        
                        <a>Learn More</a>
                    </div>
                </div>
            </div>
        </Container>
    </div>

    </>
  )
}

export default Mission
