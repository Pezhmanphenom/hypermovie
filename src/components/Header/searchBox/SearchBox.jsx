import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { fench } from '../../../Searvice';
import TV from './items/TV';
import Person from './items/Person';
import Movie from './items/Movie';

export default function SearchBox() {

  const[query,setQuery] = useState('');
  const[searchResult,setSearchResult]= useState([]);

  useEffect(()=>{
     const timeout =setTimeout(async()=>{
      if(query){
       const {data} = await fench("search/multi",{
         params:{
           query
        }
      });
      
      setSearchResult(data.results);
    } else{
      setSearchResult([]);
    }
      return()=>{
        clearTimeout(timeout);
      };
     },500);
  },[query]);

  function showItem(item){
    switch(item.media_type){
      case 'tv' : 
         return <TV key={item.id} item={item} />;
      case 'person' : 
         return <Person key={item.id} item={item} />;
      case 'movie' : 
         return <Movie key={item.id} item={item} />;
    }
  }

  return (
    <section className=" mt-12 text-slate-300">
       <div className='relative'>
         <input type='text' className='w-full bg-slate-700 text-xl p-2  border-slate-900 border-4 rounded outline-none'
         placeholder='search here'
         value={query}
         onChange={e=>setQuery(e.target.value)}
         />

         <div className={`flex flex-col gap-3 p-2 bg-opacity-95 bg-slate-700 border-t-0  absolute w-full z-10 rounded-lg text-slate-300  transition-all duration-200
            ${searchResult.length && query? 
               "h-44 overflow-auto border-4 border-slate-900" 
                  :
               "h-0  overflow-hidden opacity-0"} `}
        >
                 {
                   searchResult.map((item)=>(
                    <div onClick={()=>setSearchResult([])}>
                      {showItem(item)}
                    </div>
                   ))
                 }

         </div>


         <svg xmlns="http://www.w3.org/2000/svg" 
         width="28" 
         height="28" 
         fill="currentColor" 
         className="absolute right-4 top-1/2 -translate-y-1/2 -mt-1/2 " 
         viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
         </svg>
       </div>
    </section>
  )
}
