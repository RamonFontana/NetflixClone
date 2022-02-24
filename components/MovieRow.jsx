import React from "react";
import style from "../styles/MovieRow.module.scss";

export default function MovieRow({items, title}) {
  return (
    <div className={style.card}>
      <h2>{title}</h2>
      <div className={style.slideMovies}>
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <div key={key} className={style.slideItem}>
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_title}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
