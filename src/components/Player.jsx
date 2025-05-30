import React from "react";
import play from "../assets/playerbuttons/play.png";
import { Container, Row, Col, Button } from "react-bootstrap";

const Player = ({ song }) => {
  if (!song) return null;

  return (
    <div className="container-fluid fixed-bottom bg-dark text-white py-2">
      <Container>
        <Row>
          <Col>
            <Row className="align-items-center">
              <Col xs={3} md={2}>
                <img src={song.album?.cover_medium} alt={song.title} className="img-fluid rounded" />
              </Col>
              <Col xs={9} md={10}>
                <h5 className="mb-0">{song.title}</h5>
                <p className="mb-0">{song.artist?.name}</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Button></Button>
            <Button>{play}</Button>
            <Button></Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Player;
