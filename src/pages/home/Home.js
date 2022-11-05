import { async } from "@firebase/util";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "../../component/movieCard/MovieCard";

const API_KEY = `70733706aefbcc98ca02849db809a586`;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const Home = () => {
  const [movies, setMovie] = useState();
  useEffect(() => {
    getMovie(FEATURED_API);
  }, []);
  const getMovie = async (api) => {
    try {
      const {
        data: { results },
      } = await axios.get(api);
      setMovie(results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movies);
  return (
    <div className="movieContainer">
      {/* soru isareti optional chaining icin var yoksa 0 ceker */}
      {movies?.map((item, i) => (
        <MovieCard key={i} {...item} />
      ))}
    </div>
  );
};

export default Home;
