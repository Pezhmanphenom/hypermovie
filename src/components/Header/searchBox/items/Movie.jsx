import React from 'react'
import { imgUrl } from '../../../../helpers/imgUrl'
import { Link } from 'react-router-dom'

export default function Movie({item}) {
  return (
    <Link to={`/movies/${item?.id}`} >
       <div className='flex gap-2 items-center'>
         <img className='object-cover w-11 h-11 rounded-md'
           src={item.profile_path ?imgUrl(item. profile_path,"w45"): 'download2.png'}></img>
         <p>{item.title}</p>
       </div>
    </Link>
  )
}
