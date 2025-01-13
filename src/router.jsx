import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import Movie from "./components/pages/Movie";
import Login from "./components/pages/Login";
import UserProvider from "./context/UserContext";
import Profile from "./components/pages/Profile";
import TV from "./components/pages/TV";

export const router = createBrowserRouter([
    {
        element :(
        <UserProvider>
            <App />
        </UserProvider>
        ),
        children :[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/movies',
                element:<Movies/>
            },
            {
                path:'/movies/:id',
                element:<Movie />
            },
            {
                path:'/tv',
                element:<TV/>
            },
            {
                path:'/tv/:id',
                element:<TV />
            },
            {
                path:'/people',
                element:<Movies/>
            },
            {
                path:'/more'
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/profile',
                element:<Profile />
            }
        ]

    },
])