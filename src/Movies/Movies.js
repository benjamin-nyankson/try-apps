import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import useMovies from "./useMovies";
import Slide from "./Slide";
export default function Movies() {
  const [data] = useMovies();
  return (
    <div>
      {/* <MovieList data={data} /> */}
      <Slide data={data} />
    </div>
  );
}
