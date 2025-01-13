import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/main/Main"
import { Toaster } from "react-hot-toast"


function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
   
    </>
  )
}

export default App
