import React from "react";

function SeriesCard({ singleItem }) {
  //   console.log(singleItem);

  //   return (
  //     <div key={singleItem.id}>
  //       <h1>{singleItem.name}</h1>
  //       <img src={singleItem.img_url} style={{ width: "50%", height: "50%" }} />
  //       <p>{singleItem.description}</p>
  //       <p>{singleItem.rating}</p>
  //       <p>{singleItem.genre}</p>
  //       <p>{singleItem.cast}</p>
  //       <p>{singleItem.watch_url}</p>
  //     </div>
  //   );

  //   Destructing:-

  const { id, name, img_url, description, rating, genre, cast, watch_url } =
    singleItem;
  return (
    <div>
      <h1>{name}</h1>
      <img src={img_url} style={{ width: "50%", height: "50%" }} />
      <p>{description}</p>
      <p>{rating}</p>
      <p>{genre}</p>
      <p>{cast}</p>
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
}

export default SeriesCard;
