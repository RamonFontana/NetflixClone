import React, { useState } from "react";
import style from "../../styles/MovieRow.module.scss";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function MovieRow({items, title}) {
  const [scrollX, setScrollX] = useState(0);
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 250;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 30;
    }
    setScrollX(x);
  }
  return (
    <div className={style.card}>
      <h2>{title}</h2>
      <div className={style.movieRowLeft} onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>
      <div className={style.movieRowRight} onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>
      <div className={style.slideMovies} style={{
        marginLeft: scrollX,
        width: items.results.length * 250
      }}>
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
