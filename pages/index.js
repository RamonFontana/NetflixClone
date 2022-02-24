import React, { useEffect, useState } from "react";
import Head from "next/head";
import Tmdb from "../src/Tmdb";
import style from "../styles/Home.module.scss";
import MovieRow from "../components/MovieRow";
import FeaturedMovie from "../components/FeaturedMovie";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getFeatured(chosen.id, "tv");
      setFeatured(chosenInfo);
    };

    loadAll();
    console.log(featured);
  }, []);

  return (
    <div className={style.page}>
      <Head>
        <title>Netflix Clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={style.lists}>
        {featured && <FeaturedMovie item={featured} />}
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </div>
    </div>
  );
}
