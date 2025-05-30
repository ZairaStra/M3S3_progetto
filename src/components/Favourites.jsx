import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, ListGroup, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { removeFromFavourites } from "../redux/actions";
import { Trash } from "react-bootstrap-icons";

const Favourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.music.favourites.content || []);
  const navigate = useNavigate();

  const handleRemoveFromFavourites = (songId) => {
    dispatch(removeFromFavourites(songId));
  };

  const alertClosed = () => {
    navigate("/");
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h2 className="my-4 display-5">Favourites</h2>
          {favourites.length === 0 ? (
            <Alert variant="warning" dismissible onClose={alertClosed}>
              No favourite songs selected
            </Alert>
          ) : (
            <ListGroup>
              {favourites.map((song) => (
                <ListGroup.Item key={song.id} className="d-flex justify-content-between align-items-center">
                  <Link to={`/song/${song.id}`} className="text-decoration-none">
                    <strong>{song.title}</strong> - {song.artist.name}
                  </Link>
                  <Button variant="outline-danger" size="sm" onClick={() => handleRemoveFromFavourites(song.id)}>
                    <Trash />
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
