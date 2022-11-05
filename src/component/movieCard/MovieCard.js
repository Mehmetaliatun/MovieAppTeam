import React from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const IMG_API = "https://image.tmdb.org/t/p/original";
const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  const { currentUser } = useContext(AuthContext);
  const handleClick = () => {};
  return (
    <div className="movie">
      <img src={`${IMG_API}${poster_path}`} alt="img" />
      <div className="overview">
        <div className="movie-info">
          <h5>{title} </h5>
          <span>{vote_average} </span>
        </div>
        <h5 onClick={handleClick}>More Info</h5>
      </div>
    </div>
  );
};

export default MovieCard;
