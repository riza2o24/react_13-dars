import { Route, Routes } from "react-router-dom"
import Login from "./components/login/Login"
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"

function App() {
  return (
    <div>


      <Routes>
        <Route path="/signups" element={<Signup/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
