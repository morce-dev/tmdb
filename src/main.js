import "./style.css";

import { TmdbUrlBuilder } from "./TmdbUrlBuilder";
import { getPopularMovies, getMovie } from "./TmdbApiGateway";
import { TmdbConfig } from "./tmdb";

const options = {
  method: "GET",
  headers: {
    accept: TmdbConfig.defaultHeaders,
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTQwNzdmMjI1ZDhiMGMyNGQ0MzYzNmI5NTUzMzhmMyIsIm5iZiI6MTc0MDkzNzM3MC42NTkwMDAyLCJzdWIiOiI2N2M0OTg5YTQ5YmI4NzU4YmFiNGExODQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LkGWq51qSevWqvEro8hgJH6UWzIw62sh9oAqj0pwwBk",
  },
};

const getMovies = new TmdbUrlBuilder();
const fetchMovies = getMovies
  .addPath("movie")
  .addPath("popular")
  .setParam("page", 1)
  .build();
const fetchMovie = new TmdbUrlBuilder();
const searchMovie = fetchMovie
  .addPath("search")
  .addPath("movie")
  .setParam("query", "spiderman")
  .build();

// getPopularMovies(fetchMovies, options)
//   .then((res) => res.json())
//   .then(({ results }) => console.log(results));

getMovie(searchMovie, options)
  .then((response) => response.json())
  .then(({ results }) => {
    results.forEach(({ adult, backdrop_path }) => {
      if (backdrop_path) {
        console.log(backdrop_path);
      }
    });
  });
