import React from "react";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import prev from "../assets/playerbuttons/prev.png";
import repeat from "../assets/playerbuttons/repeat.png";
import shuffle from "../assets/playerbuttons/shuffle.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, removeFromFavourites } from "../redux/actions";

const Player = ({ song }) => {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.music.favourites.content);

  const toggleFavourite = (song) => {
    const isFavourited = favourites.some((fav) => fav.id === song.id);
    if (isFavourited) {
      dispatch(removeFromFavourites(song.id));
    } else {
      dispatch(addToFavourites(song));
    }
  };
  if (!song) return null;

  return (
    <Container fluid className="bg-container fixed-bottom d-flex align-items-center text-white">
      <Row className="align-items-center">
        <Col xs={4} md={3} className="d-flex align-items-center">
          <img src={song.album?.cover_medium} alt={song.title} className="img-fluid rounded" style={{ width: "60px", height: "60px", objectFit: "cover" }} />

          <div className="ms-3">
            <h5 className="mb-0">{song.title}</h5>
            <p className="mb-0">{song.artist?.name}</p>
            <button onClick={() => toggleFavourite(song)} style={{ background: "none", border: "none", cursor: "pointer" }} aria-label="toggle favourite">
              {favourites.some((fav) => fav.id === song.id) ? <HeartFill color="white" /> : <Heart />}
            </button>
          </div>
        </Col>

        <Col xs={8} md={9} className="playerControls">
          <Button>
            <img src={shuffle} alt="Shuffle" className="player-btn-icon" />
          </Button>
          <Button>
            <img src={prev} alt="Shuffle" className="player-btn-icon" />
          </Button>
          <Button>
            <img src={play} alt="Shuffle" className="player-btn-icon" />
          </Button>
          <Button>
            <img src={next} alt="Shuffle" className="player-btn-icon" />
          </Button>
          <Button>
            <img src={repeat} alt="Shuffle" className="player-btn-icon" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
