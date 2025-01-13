import React from 'react'
import { imgUrl } from '../../../../helpers/imgUrl'
import { Link } from 'react-router-dom'

export default function TV({item}) {
  return (
   <Link to={`/tv/${item.id}`}>
      <div className='flex gap-2 items-center'>
         <img className='object-cover w-11 h-11 rounded-md'
           src={item.poster_path ?imgUrl(item. poster_path,"w92"):'/download2.png'}></img>
         <p>{item.name}</p>
      </div>
   </Link>
  )
}
