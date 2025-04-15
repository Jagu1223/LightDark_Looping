import React from "react";
import { data } from "../api/seriesData";
import SeriesCard from "./SeriesCard";

function MovieList() {
  return (
    <>
      {data.map((singleItem) => {
        return <SeriesCard key={singleItem.id} singleItem={singleItem} />;
      })}

      {/* By using Distruction  */}
      {/* <h1
        style={{
          textAlign: "center",
          color: "blue",
        }}
      >
        List of web Series
      </h1> */}
      {/* {data.map((singleItem) => {
        const {
          id,
          name,
          img_url,
          description,
          rating,
          genre,
          cast,
          watch_url,
        } = singleItem;
        return (
          <div key={id}>
            <h2> Name:{name}</h2>
            <img src={img_url} style={{ width: "50%", height: "50%" }} />
            <p>
              <strong>Description:</strong> {description}
            </p>
            <p>
              <strong>Rating:</strong> {rating}
            </p>
            <p>
              <strong>Genre:</strong> {genre}
            </p>
            <p>
              <strong>Cast:</strong>
              {cast}
            </p>
            <button>
              <a
                href={watch_url}
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
              >
                Watch Now
              </a>
            </button>
          </div>
        );
      })} */}
    </>
  );
}

export default MovieList;

//Destructuring outside the map function wouldn’t work because you need access to each individual singleItem in the iteration.
