import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';

export default function Login() {
    const{login , session} = useContext(UserContext) ;

   function handlelogin(e){
    e.preventDefault();
    const {username,password} = e.target.elements;

    login(username.value,password.value)

   }

  return (
    <div>
        <h2>Login page</h2>

        <div className='flex flex-col justify-center items-center text-black '>
            <form action=""className='flex flex-col gap-8' onSubmit={handlelogin}>
                <p>{session}</p>
                <input placeholder='user' type="text" name='username' className='p-2 rounded-sm' />
                <input placeholder='password' type="password" name='password' className='p-2 rounded-sm '/>
                
                <input type="submit" value='login' className='text-white bg-rose-700 p-2 rounded-md cursor-pointer' />
            </form>
        </div>
    </div>
  )
}
