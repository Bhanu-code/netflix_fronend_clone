import React, { useEffect } from 'react'
import "../styles/home.scss"
import Row from './Row'
import axios from 'axios'
import { useState } from 'react'

const apiKey = 'd80eef3b9536a451202e83ee45a7bfd3';
const imgUrl = 'https://image.tmdb.org/t/p/original'
const url = 'https://api.themoviedb.org/3';

export default function Home() {

  const [upcoming, setUpcoming] = useState([]);
  const [now_playing, setNowplaying] = useState([]);
  const [popular, setPopular] = useState([]);


  useEffect(() => {
    const fetchUpcoming = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/upcoming?api_key=${apiKey}`)
      setUpcoming(results);
      // console.log(upcoming);
    };

    const fetchNowPlaying = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/now_playing?api_key=${apiKey}`)
      setNowplaying(results);
      // console.log(upcoming);
    };

    const fetchPopular = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/popular?api_key=${apiKey}`)
      setPopular(results);
      // console.log(upcoming[0].poster_path);
    };



    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();


  }, [])

  return (
    <section className='home'>
      <div className="banner">
        <img src={`${imgUrl}/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg`} alt="banner_poster" />
      </div>

      <h2 className='trending'>Upcoming</h2>
      <div className='row'>
        <Row arr={upcoming} imgUrl={imgUrl} />
      </div>

      <h2 className='trending'>Now Playing</h2>
      <div className='row'>
        <Row arr={now_playing} imgUrl={imgUrl} />
      </div>

      <h2 className='trending'>Popular</h2>
      <div className='row'>
        <Row arr={popular} imgUrl={imgUrl} />
      </div>

    </section>
  )
}
