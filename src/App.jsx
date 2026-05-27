import { Route, Routes } from "react-router-dom"
import Login from "./components/login/Login"
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"
import Batafsil from "./pages/batafsil/Batafsil"

function App() {
  return (
    <div>


      <Routes>
        <Route path="/signups" element={<Signup/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/batafsil/:idMeal" element={<Batafsil/>}/>
      </Routes>
    </div>
  )
}

export default App
