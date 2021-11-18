import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "367b0facb69c6afab44aa6f928a1cec5";

export const getTrendingMovies = (page) =>
  axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`);

export const getMovie = (searchQuery, page) =>
  axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&page=${page}&query=${searchQuery}&include_adult=false`);

export const getSingleFilm = (filmId) =>
  axios.get(`${BASE_URL}movie/${filmId}?api_key=${API_KEY}`);

export const getCast = (filmId) =>
  axios.get(`${BASE_URL}movie/${filmId}/credits?api_key=${API_KEY}`);

export const getReviews = (filmId) =>
  axios.get(`${BASE_URL}movie/${filmId}/reviews?api_key=${API_KEY}&page=1`);
