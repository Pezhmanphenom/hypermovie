import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'swiper/css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import UserProvider from './context/UserContext.jsx';


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
