import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchCategoryMusic } from "../redux/actions";
import { Spinner, Card, Col, Row, Container, Alert } from "react-bootstrap";
import { addToFavourites, removeFromFavourites } from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";

const ResultsPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const query = new URLSearchParams(location.search).get("q");

  const results = useSelector((state) => state.music.searchResults?.content || []);
  const error = useSelector((state) => state.music.searchResults?.error);

  const favourites = useSelector((state) => state.music.favourites.content);

  const toggleFavourite = (song) => {
    const isFavourited = favourites.some((fav) => fav.id === song.id);
    if (isFavourited) {
      dispatch(removeFromFavourites(song.id));
    } else {
      dispatch(addToFavourites(song));
    }
  };

  useEffect(() => {
    if (query) {
      dispatch(fetchCategoryMusic("searchResults", query));
    }
  }, [dispatch, query]);

  if (error) return <Alert variant="danger">Error: {error}</Alert>; //manca il dismissible ol navigate in homepage
  if (!results.length)
    return (
      <div>
        <Spinner animation="border" variant="info" />
        <p>Loading results for "{query}"...</p>
      </div>
    );

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={9} className=" offset-md-2 mainPage">
          <h2 className="my-4">Search Results for: {query}</h2>
          <Row>
            {results.map((song) => (
              <Col key={song.id} className=" text-center" xs={12} sm={6} lg={4} xl={3}>
                <Card className="bg-transparent border-0 text-white">
                  <Card.Img variant="top" src={song.album.cover_medium} alt={song.title} className="img-fluid w-100" />
                  <Card.Body>
                    <h5>{song.title}</h5>
                    <p>{song.artist.name}</p>
                    <Button variant="link" onClick={() => toggleFavourite(song)} style={{ color: "white" }}>
                      {favourites.some((fav) => fav.id === song.id) ? <HeartFill color="white" /> : <Heart />}
                    </Button>
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

export default ResultsPage;
