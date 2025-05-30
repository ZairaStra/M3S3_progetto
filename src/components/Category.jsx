import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryMusic } from "../redux/actions";
import { Alert, Card, Col, Row, Spinner, Container } from "react-bootstrap";
import { addToFavourites, removeFromFavourites } from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Navigate } from "react-router-dom";

const Category = ({ category, query, title }) => {
  const dispatch = useDispatch();

  const songs = useSelector((state) => state.music[category]?.content || []);
  const error = useSelector((state) => state.music[category]?.error);

  useEffect(() => {
    dispatch(fetchCategoryMusic(category, query));
  }, [dispatch, category, query]);

  const favourites = useSelector((state) => state.music.favourites.content);

  const toggleFavourite = (song) => {
    const isFavourited = favourites.some((fav) => fav.id === song.id);
    if (isFavourited) {
      dispatch(removeFromFavourites(song.id));
    } else {
      dispatch(addToFavourites(song));
    }
  };
  //manca il dismissible ol navigate in homepage
  /*   const alertClosed = () => {
    Navigate("/");
  }; */

  if (error) return <Alert variant="danger" /* onClose={alertClosed} */>Error: {error}</Alert>;
  if (!songs.length)
    return (
      <div>
        <Spinner animation="border" variant="info" />
        <p>Loading {title}...</p>
      </div>
    );

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={9} className="  mainPage">
          <h2 className="my-4">{title}</h2>
          <Row>
            {songs.map((song) => (
              <Col key={song.id} className="col text-center" xs={12} sm={6} lg={4} xl={3}>
                <Card className="bg-transparent border-0 text-white">
                  <Card.Img variant="top" className="img-fluid w-100" src={song.album.cover_medium} alt={song.title} />
                  <Card.Body>
                    <h5>{song.title}</h5>
                    <p>{song.artist.name}</p>
                    <button
                      onClick={() => toggleFavourite(song)}
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                      aria-label="toggle favourite"
                    >
                      {favourites.some((fav) => fav.id === song.id) ? <HeartFill color="white" /> : <Heart />}
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
