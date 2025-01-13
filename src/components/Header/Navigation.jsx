import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const menuitems = [
    {
        path:'/movies',
        text:'Movies'
    },
    {
        path:'/tv',
        text:'TV shows'
    },
    {
        path:'/people',
        text:'People'
    },
    {
        path:'/more',
        text:'More'
    }
]

export default function Navigation() {
    const[isOpenmenu,setIsOpenmenu] = useState(false);

    const {user ,logout} = useContext(UserContext);

    function activeclass({isActive}){
      return isActive ? 'text-rose-500' :'hover:text-white';
    }
  return (
    <>
      <nav className='flex mt-10 items-baseline text-slate-300 bg-slate-900 p-4 md:container md:bg-transparent'>
        <div className='flex items-baseline'>
            <Link to= "/">
               <h1 className='text-2xl mr-14'>Hyper<span className='text-red-800'>Movie</span></h1>
            </Link>
             <ul className='hidden md:flex text-sm gap-6 uppercase'>
                {menuitems.map(item=>(
                    <li key={item.path}>
                      <NavLink to={item.path} className={activeclass}>{item.text}</NavLink>
                    </li>
                ))}
             </ul>
        </div>
        <div className=' hidden  md:block ml-auto '>
           {Object.keys(user).length ? (
            <>
             <div>
              {user.name}
              <span onClick={logout} className='text-red-700 ml-4'>Logout</span>
             </div>
            </> 
           ):(
            <ul className='flex gap-8 uppercase'>
              <li><NavLink to="/login" className='hover:text-white'>Login</NavLink></li>
              <li><NavLink className='bg-rose-700 px-6 py-2 rounded-xl text-white' to="/signup">SignUp</NavLink></li>
            </ul>
           )} 
        </div>
        <div className="md:hidden ml-auto">
            <button onClick={()=>setIsOpenmenu(!isOpenmenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              fill="currentColor" 
              className="bi bi-list" 
              viewBox="0 0 16 16">
               <path fillRule="evenodd" 
               d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
               </svg>
            </button>
        </div>
      </nav>
      <div className={`md:hidden bg-slate-900 text-center overflow-hidden transition-all duration-500 text-slate-300${isOpenmenu ? ' py-4 border-t-2  border-slate-700 ':' py-0 border-none'}`}
      style={{height: isOpenmenu?260:0}}
      >
        <ul className='flex flex-col gap-4'>
            {menuitems.map((item)=>(
                 <li key={item.path}>
                    <NavLink className={activeclass} to={item.path} onClick={
                        ()=>setIsOpenmenu(false)}>
                        {item.text.toLocaleUpperCase()}


                    </NavLink>
                 </li>
            ))}
            
        </ul>
        <div className="mt-4 flex gap-4 justify-center items-center border-t-2 pt-4 border-slate-700 ">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup" className='bg-rose-700 rounded-xl py-2 px-4 text-white'>Signup</NavLink>
        </div>
      </div>

    </>
  )
}
