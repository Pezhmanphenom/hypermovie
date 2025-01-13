import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import MovieCard from '../movie/MovieCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MovieListSlider({type ,activeTab}) {

  const[movies,setMovies] = useState([]);

  useEffect(()=>{
    (async()=>{
      const {data} = await fench(`${type}/${activeTab}`);
      // console.log(data);
      setMovies(data?.results);
    })();
  },[type,activeTab])
  
  return (
    <Swiper 
    breakpoints={{
     640: {
       slidesPerView: 2,
       spaceBetween: 5,
     },
     768: {
       slidesPerView: 4,
       spaceBetween: 10,
     },
     1024: {
       slidesPerView: 6,
       spaceBetween: 20,
     },
   }}
    modules={[Autoplay]}
    autoplay={{delay:4000}}
    centeredSlides 
    loop>
      {
       movies?.map((movie)=>(
         <SwiperSlide key={movie.id}>
           <MovieCard movie={movie} type={type}/>
         </SwiperSlide>
       ))}

   </Swiper>
  )
}
