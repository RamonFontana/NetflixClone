import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Tmdb from '../src/Tmdb';
import style from '../styles/Home.module.scss';
import MovieRow from '../components/MovieRow'

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, [])

  return (
    <div className={style.page}>
      <Head>
        <title>Netflix Clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={style.lists}>
      { movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
      )) }
      </div>
    </div>
  )
}
