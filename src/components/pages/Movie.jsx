import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Await, useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import toast from 'react-hot-toast';
import { imgUrl } from '../../helpers/imgUrl';
import ReactStars from "react-rating-stars-component"

export default function Movie() {
    const {id} = useParams();
    const [movie,setMovie] = useState(null);
    const[isfavorite,setIsfavorite] =useState(false);
    const{user,session,favoriteMovies,fetchFavoritemovies }=useContext(UserContext);
   
    console.log(favoriteMovies)

    useEffect(()=>{
      if(movie && favoriteMovies?.length ){

        const favmovies =favoriteMovies.find(f=>f.id===movie?.id);

        setIsfavorite(Boolean(favmovies));
        console.log(isfavorite);

      }
    },[movie ,favoriteMovies]);

    // console.log(isfavorite);

    async function handlefavorite(){
      if(session){
         await fench.post(`https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=f44402f79564f6b266de86037898fe8e&session_id=${session}`,{
            media_type: 'movie',
            media_id : movie.id,
            favorite: !isfavorite,
        });

        fetchFavoritemovies();
        
        toast.success(`${movie.title} ${isfavorite?'Removed':'Added'} to your favorite watchlist`)
    }else{
      toast.error("Error")
    }
  }

    async function loadMovie(){
       const {data} =  await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f44402f79564f6b266de86037898fe8e`)
       
       setMovie(data);

    }

    useEffect(()=>{
       loadMovie();
    },[id]);

   async function ratingChanged(rate){
     await fench.post(`movie/${movie.id}/rating`,{value:rate*2});
     toast.success('Your vote has been submitted .');
    }


  return (
    <div className='mt-6'>
        {movie ?(
            <div className='container grid grid-cols-4 gap-10'>
            <div className="col-span-1">
               <img src={imgUrl(movie.poster_path,"original")} alt={movie.title}/>
            </div>
            <div className="col-span-3">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl">{movie.title}</h1>
                    <time className="text-slate-500">
                        {movie.release_date.split("-")[0]}
                    </time>
                </div>
                <div className='flex gap-8 mt-6 text-rose-600 border-red'>
                    <button className='flex items-center gap-2  'onClick={handlefavorite}> 
                        <p className='border border-red-500 rounded-full w-8 h-8 flex justify-center items-center'>
                        <span>
                           {isfavorite ? (
                               <svg 
                                 xmlns="http://www.w3.org/2000/svg" 
                                 width="16" height="16" 
                                 fill="currentColor" 
                                 className="bi bi-heart-fill" 
                                 viewBox="0 0 16 16">
                               <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                             </svg>
                            
                           ): (
                            <svg  
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16"  
                              height="16" 
                              fill="currentColor" 
                              className="bi bi-heart" 
                              viewBox="0 0 16 16">
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                          
                           )}
                        </span>
                        </p>
                        <span>{isfavorite?'Remove from ':'Add to'}favorite</span></button>
                    <button className='flex items-center gap-2'> 
                    <p className='border border-red-500 rounded-full w-8 h-8 flex justify-center items-center'>
                        <span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          fill="currentColor" 
                          className="bi bi-share" 
                          viewBox="0 0 16 16">
                          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                        </svg>
                        </span>
                        </p>
                        Share
                    </button>
                </div>

                <div className='grid grid-cols-4 border-slate-500 border-t-2 border-b-2 mt-4'>
                  <div className='col-span-1 border-r-2 border-slate-500 flex items-center text-slate-300 py-1'>
                    <div className='flex items-center gap-3'>
                      <div>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg"
                         width="16" 
                         height="16" 
                         fill="currentColor" 
                         className="text-yellow-500" 
                         viewBox="0 0 16 16">
                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <div>{parseInt(movie.vote_average)} / 10</div>
                        <div>{movie.vote_count} Reviews</div>
                      </div> 
                    </div>
                  </div>
                  <div className='col-span-3 pl-2 flex gap-4 items-center text-slate-300'>
                    Rate this movie
                     <ReactStars
                      value={parseInt(movie.vote_average ) / 2}
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                     />,
                  </div>
               
                </div>
            </div>
        </div>
                
            
        ):(
            <h1>Loading...</h1>

        )}
    </div>
  )
}
