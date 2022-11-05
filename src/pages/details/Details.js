import React from "react";
import "./Details.css";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const IMG_API = "https://image.tmdb.org/t/p/original";
const API_KEY = `70733706aefbcc98ca02849db809a586`;
const youtubeUrl = "https://www.youtube.com/embed/";

const Details = () => {
  const [trailer, setTrailer] = useState();
  const { id, poster_path, overview, title } = useLocation().state;
  // console.log(id, poster_path, overview, title);
  useEffect(() => {
    getDetails(id, API_KEY);
  }, [id]);
  const getDetails = async (id, apiKey) => {
    try {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
      );
      setTrailer(results);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const filterTrailer = trailer?.filter((e) => e.type === "Trailer");
  console.log(filterTrailer);
  return (
    <div className="details">
      <div className="trailer-overview">
        <div className="trailer-head">
          <h4 className="trailer-title">{title}</h4>
          <img
            className="backdrop"
            src={`${IMG_API}${poster_path}`}
            alt="img"
          />
        </div>
        <div className="trailer-parag-div">
          <h4>Overview</h4>
          <p className="trailer-parag">{overview}</p>
        </div>
      </div>
      {trailer ? (
        <iframe
          src={`${youtubeUrl}${filterTrailer[0]?.key}`}
          title="YouTube Video Player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope;picture-in-picture"
        ></iframe>
      ) : (
        <div>Loading...Please Wait</div>
      )}
    </div>
  );
};

export default Details;
