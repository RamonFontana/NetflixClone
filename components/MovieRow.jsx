import React from "react";
import style from "../styles/MovieRow.module.scss";

export default (props) => {
  console.log(props.items.results.length);
  return (
    <div className={style.card}>
      <h2>{props.title}</h2>
      <div className={style.slideMovies}>
        {props.items.results.length > 0 &&
          props.items.results.map((item, key) => (
            <div className={style.slideItem}>
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
