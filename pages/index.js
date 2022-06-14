import React, { useEffect, useState } from "react";
import Head from "next/head";
import Tmdb from "../src/Tmdb";
import style from "../styles/Home.module.scss";
import MovieRow from "../components/MovieRow";
import FeaturedMovie from "../components/FeaturedMovie";
import Header from "../components/Header";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [featured, setFeatured] = useState(false);
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className={style.page}>
      <Head>
        <title>Netflix Clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={style.lists}>
        <Header black={blackHeader} />
        {featured && <FeaturedMovie item={featured} />}
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </div>

      <footer>
        Feito com <span role="img" aria-label="coração">❤️</span> pelo Ramon Fontana <br/>
        Direitos de imagem para Netflix<br/>
        Dados pegos do site Themoviedb.org
      </footer>
      {movieList.length <= 0 &&
        <div className="loading">
        <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif"  alt="Carregando"/>
      </div>
      }
    </div>
  );
}
