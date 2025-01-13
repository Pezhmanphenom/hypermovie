import React from 'react'
import MovieCard from '../movie/MovieCard'
import MovieListSlider from './MovieListSlider'

const movies = [
  '/slider1.jpg',
  '/slider2.jpg',
  '/slider3.jpg',
  '/slider4.jpg',
  '/slider5.jpg',
  '/slider6.jpg',
  '/slider7.jpg',
  
]

export default function MovieList() {
  return (
    <div className='container'>
        <div className='pt-8 '>
          <div className='md:flex gap-8 items-center md:mb-4'>
            <h2 className='text-slate-300 text-2xl'>What is popular</h2>
            <ul className='my-6 flex flex-col gap-4 md:gap-8 text-rose-200 md:flex-row items-baseline'>
              <li>Streaming</li>
              <li className='text-rose-500 text-xl'>On TV</li>
              <li>For rent</li>
              <li>In theater</li>
            </ul>
          </div>
         <MovieListSlider movies={movies} />
         
        </div>
        <div className='pt-8 '>
          <div className='md:flex gap-8 items-center md:mb-4'>
            <h2 className='text-slate-300 text-2xl'>Free to watch</h2>
            <ul className='my-6 flex flex-col gap-4 md:gap-8 text-rose-200 md:flex-row items-baseline'>
              <li className='text-rose-500 text-xl'>Movies</li>
              <li>TV's</li>
              
            </ul>
          </div>
         <MovieListSlider movies={movies} />
         
        </div>
    </div>
  )
}
