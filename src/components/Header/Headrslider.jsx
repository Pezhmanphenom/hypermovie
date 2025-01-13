import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import MovieCard from '../movie/MovieCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from '../pages/Movies';

export default function Headrslider({setBg}) {

  const[movies ,setMovies]=useState([])

  async function loadMovies() {
    const{data}= await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=f44402f79564f6b266de86037898fe8e")
    setMovies(data.results)
  } 


  useEffect(()=>{
   loadMovies();
  },[]);

  return (
       <div className="mt-8">
        <Swiper 
         breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
         modules={[Autoplay]}
         autoplay={{delay:2000}} 
         loop>
           {
            movies.map((movie)=>(
              <SwiperSlide key={movie.id}>
               <div onMouseOver={()=>setBg(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`)}>
                 <MovieCard 
                 rate={movie.vote_average}
                 title={movie.title}
                 img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                 movie={movie}
                 />
                 <Movies
                 rate={movie.vote_average}
                 title={movie.title}
                 img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                 movie={movie}
                 />
                 
               </div>
                 
              </SwiperSlide>
            ))
            }
    
        </Swiper>
        

       </div>
  )
}
