import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext({user:{},session:""});


const baseURL = 'https://api.themoviedb.org/3';
const apiKEY = 'f44402f79564f6b266de86037898fe8e'

export default function UserProvider({children}){
    const navigate =useNavigate();
    const[user,setUser] = useState({});
    const[session,setSession] = useState(()=>localStorage.getItem('session'));
    const[favoriteMovies,setfavoriteMovies]=useState([]);
    const[favoriteTvs,setFavoriteTvs]=useState([]);
   

    async function getUserData(){
      const {data} = await axios.get(`https://api.themoviedb.org/3/account?api_key=f44402f79564f6b266de86037898fe8e&session_id=${session}`);
      const favResult = await fench.get(`account/${data.id}/favorite/movies`)
      fetchFavoritemovies(data.id);
      setfavoriteMovies(favResult.data.results);
      setUser(data);
    }

    async function getUserData2(){
      const {data} = await axios.get(`https://api.themoviedb.org/3/account?api_key=f44402f79564f6b266de86037898fe8e&session_id=${session}`);
      const favResult2 = await fench.get(`account/${data.id}/favorite/tv`);
      fetchFavoriteTvs(data.id)
      setFavoriteTvs(favResult2.data.results);
      setUser(data);

    }
    useEffect(()=>{
      if(session){
        getUserData();
        getUserData2();
      }
    },[session])

    function logout(){
      setUser({});
      setSession(null);
      localStorage.clear();
    }

    async function fetchFavoritemovies(id=user.id){
      const favResult = await fench(`account/${id}/favorite/movies`);
      setfavoriteMovies(favResult.data?.results);

    }
    async function fetchFavoriteTvs(id=user.id) {
      const favResult = await fench(`account/${id}/favorite/tv`);
      setFavoriteTvs(favResult.data?.results);
    }

    async function login(username,password){

      try{
        
         const tokenResult = await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=f44402f79564f6b266de86037898fe8e`
         );

         const authorize = await axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=f44402f79564f6b266de86037898fe8e`,{
           username,
           password,
           request_token:tokenResult.data.request_token,
         });

         const session = await axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=f44402f79564f6b266de86037898fe8e`,{
          request_token:tokenResult.data.request_token ,
        });

        setSession(session.data.session_id);
        localStorage.setItem("session",session.data.session_id);
        navigate('/profile',{
          replace:true
        });
        console.log(authorize);

      }catch{
          toast.error('Invalid username or password');
      }
      


    }


    return (
        <UserContext.Provider value={{user , login , session ,logout,favoriteMovies ,fetchFavoritemovies,favoriteTvs,fetchFavoriteTvs}}>{children} </UserContext.Provider>
    )
}