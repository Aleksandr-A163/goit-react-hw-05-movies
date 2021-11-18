
import { useState, useEffect } from "react";

import * as api from "../Service/Service-api";
import mapper from "../helpers/Mapper";
import HomeGallery from "../components/HomeGallery/HomeGallery";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";
import "../index.css"

function FilmsView() {
  const [page, setPage] = useState(1);
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState("");

  useEffect(() => {
    setIsLoading(true);
    api
      .getTrendingMovies(page)
      .then(({ data }) => {
        setFilm((prevFilm) => [...prevFilm, ...mapper(data.results)]);
      })
      .catch(() => {
        console.log("Wops, something went wrong. Please try again later");
      })
      .finally(() => {
        setIsLoading(false);
        if (page > 1) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }
      });
  }, [page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (modalImage) => {
    setImg(modalImage);
  };

  const closeModal = () => {
    setImg("");
  };
  return (
    <>
      <section>
        <HomeGallery films={film} onClickImg={openModal}></HomeGallery>
      
        {isLoading && <Loader />}
        {img && <Modal closeModal={closeModal} modalImg={img} />}
      </section>
        <Button onClick={onLoadMore} />
    </>
  );
}

export default FilmsView;
