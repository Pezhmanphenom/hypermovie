import React, { useState } from 'react'
import MovieListSlider from '../main/MovieListSlider'


export default function Home() {

    const [moviesActiveTabe,setMoviesActiveTabe] = useState('upcoming');
    const [tvActiveTabe,setTvActiveTabe] = useState('popular');

  function handleChangeMoviesActiveTab(tab){
    setMoviesActiveTabe(tab);
  }
  function handleChangeTVsActiveTab(tab){
    setTvActiveTabe(tab);
  }

  function activeClass(tab){
     return tab ===moviesActiveTabe ? 'text-rose-500 text-xl ' : '';
  }
  function activeTVClass(tab){
     return tab ===tvActiveTabe ? 'text-rose-500 text-xl ' : '';
  }

  return (
    <div className='container'>
        <div className='pt-8 '>
          <div className='md:flex gap-8 items-center md:mb-4'>
            <h2 className='text-slate-300 text-2xl'>Movies</h2>
            <ul className='my-6 flex flex-col gap-4 md:gap-8 text-rose-200 md:flex-row items-baseline [&>*]:cursor-pointer'>
              <li onClick={()=>handleChangeMoviesActiveTab('upcoming')} className={activeClass('upcoming')}>Upcoming</li>
              <li onClick={()=>handleChangeMoviesActiveTab('now_playing')} className={activeClass('now_playing')}>Now playing</li>
              <li onClick={()=>handleChangeMoviesActiveTab('popular')}  className={activeClass('popular')}>Popular</li>
              <li onClick={()=>handleChangeMoviesActiveTab('top_rated')} className={activeClass('top_rated')}>Top rated</li>
            </ul>
          </div>
         {<MovieListSlider type="movie" activeTab={moviesActiveTabe}/>}
         
        </div>
        <div className='pt-8 '>
          <div className='md:flex gap-8 items-center md:mb-4'>
            <h2 className='text-slate-300 text-2xl'>TV series</h2>
            <ul className='my-6 flex flex-col gap-4 md:gap-8 text-rose-200 md:flex-row items-baseline [&>*]:cursor-pointer'>
              <li onClick={()=>handleChangeTVsActiveTab('popular')} className={activeTVClass('popular')}>Popular </li>
              <li onClick={()=>handleChangeTVsActiveTab('airing_today')} className={activeTVClass('airing_today')}>Airing today</li>
              <li onClick={()=>handleChangeTVsActiveTab('on_the_air')} className={activeTVClass('on_the_air')}>On the air </li>
              <li onClick={()=>handleChangeTVsActiveTab('top_rated')} className={activeTVClass('top_rated')}>Top rated </li>
              
            </ul>
          </div>
           {<MovieListSlider type={'tv'} activeTab={tvActiveTabe} />}
         
        </div>
    </div>
  )
}
