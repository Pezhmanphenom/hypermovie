import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';
import { imgUrl } from '../../helpers/imgUrl';

export default function Profile() {
    const {user , session} = useContext(UserContext);
    const navigate = useNavigate()

    useEffect(()=>{
       if(!session){
        navigate('/login',{replace:true});

       }
    },[session])
  return (
    <div>Profile page
       <img className='rounded-md'src={imgUrl(user?.avatar?.tmdb?.avatar_path,'w185')} alt="" />
    </div>
  )
}
