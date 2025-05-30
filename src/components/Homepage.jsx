import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Category from "./Category";

const Homepage = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={9} className=" offset-md-2 mainPage">
          <Row>
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex mb-4">
              <Nav className="flex-row gap-3">
                <Nav.Link as={Link} to="/trending onClick={(e) => e.preventDefault()}">
                  TRENDING
                </Nav.Link>
                <Nav.Link as={Link} to="/podcast" onClick={(e) => e.preventDefault()}>
                  PODCAST
                </Nav.Link>
                <Nav.Link as={Link} to="/genres" onClick={(e) => e.preventDefault()}>
                  MOODS AND GENRES
                </Nav.Link>
                <Nav.Link as={Link} to="/new-releases" onClick={(e) => e.preventDefault()}>
                  NEW RELEASES
                </Nav.Link>
                <Nav.Link as={Link} to="/discover" onClick={(e) => e.preventDefault()}>
                  DISCOVER
                </Nav.Link>
                <Nav.Link as={Link} to="/favourites">
                  FAVOURITES
                </Nav.Link>
              </Nav>
            </Col>
          </Row>

          <Row>
            <Col>
              <Category category="rockSongs" query="queen" title="Rock Classics" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Category category="popSongs" query="katyperry" title="Pop Culture" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Category category="hipHopSongs" query="eminem" title="#HipHop" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
