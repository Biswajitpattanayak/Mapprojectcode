import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const navigateToSettings = () => {
    navigate("/settings");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="home-container">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={navigateToHome}>Home</Nav.Link>
            <Nav.Link onClick={navigateToSettings}>Settings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <div className="content-wrapper">
        <div className="left-side">
          <MapContainer
            center={[20.2961, 85.8245]}
            zoom={12}
            className="map-container"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>

        <div className="right-side">
          <div className="side-part">
            <div className="side-part-buttons">
              <button className="side-btn quick">Quick</button>
              <button className="side-btn message">Message</button>
              <button className="side-btn action">Action</button>
              <button className="side-btn statics">Statics</button>
            </div>
            

            {/* <div className="instrument-display">
              <div className="instrument-top"></div>

              <div className="instrument-bottom">
                <div className="instrument-horizon"></div>
              </div>
            </div> */}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
