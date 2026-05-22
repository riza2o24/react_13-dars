import { Link } from "react-router-dom"
import logo from "../../assets/gugle.png"
import or from "../../assets/or.png"
import Vctor from "../../assets/Vector.png"
import user from "../../assets/user.png"
import { useState } from "react"

function Signup() {

  const [text,setText] = useState("")
  const [input2,setText2] = useState("")
  const [input3,setText3] = useState("")
  const [todo,setTodo] = useState([])

  function input (e){
    setText(e.target.value)

  }

  function input22 (e){
    setText2(e.target.value)

  }

  function input33 (e){
    setText3(e.target.value)

  }

  function todoadd(){
    
    setTodo([...todo,{text: text , p: input2 , span: input3}])
    setText("")
    setText2("")
    setText3("")
  }
  
  return (
        <div className="w-[1440px] max-w-[1440px] flex m-auto">
          <div className="w-[800px] h-[900px] bg-[#C4C4C4]"></div>
          <div className="flex bg-[#ffffff] items-center justify-center w-[640px] h-auto">
            <div>
              <Link to={"/"}><h3 className="text-center text-[24px] text-[#110D0A] mb-[25px] font-[600]">Create Account Bistro!</h3></Link>
              <img src={logo} className="text-center" alt="logo" />
              
              <img src={or} alt="or"  className="mt-[25px] mb-[25px]"/>
    
              <p className="mb-[10px] text-[16px] font-[500] text-[#110D0A]">Your Name</p>
    
              <div className="w-[370px] h-[50px] p-[15px] border-2 border-[#BA1556] gap-[15px] flex items-center rounded-[60px]">
                <img src={user} alt="" />
                <input type="text" placeholder="Stella Hwang" onChange={input}  className="w-[100%] dwededfede text-[#BA155680] h-[35px]" />
              </div>
    
            <p className="mb-[10px] mt-[20px] text-[16px] font-[500] text-[#110D0A]">Your Email</p>
    
              <div className="w-[370px] h-[50px] p-[15px] border-2 border-[#A3A9C6] gap-[15px] flex items-center rounded-[60px]">
                <p className="text-[22px] text-[#A3A9C6]">@</p>
                <input type="text" placeholder="stella.hwang@mail.com" onChange={input22}  className="w-[100%] dwededfede text-[#A3A9C6] h-[35px]" />
              </div>

              <p className="mt-[20px] text-[16px] mb-[10px] font-[500] text-[#110D0A]">Your Password</p>
    
              <div className="w-[370px] h-[50px] p-[15px] border-2 border-[#A3A9C6] gap-[15px] flex items-center rounded-[60px]">
                <img src={Vctor} alt="icon" />
                <input type="password" required placeholder="**************" onChange={input33} className="w-[100%] dwededfede h-[35px]" />
              </div>

              <p className="text-[12px] font-[400] mt-[10px] text-[#7F828A]">Must be 8 characters at least</p>
    

              <div className="flex items-center gap-[4px] mt-[10px]">
                <input type="checkbox" />
                <p className="text-[14px] font-[500]">I agree to the <span className="text-[#BA1556]">Terms & Conditions</span></p>
              </div>
              
              <Link to={"/home"}> <button onClick={todoadd} className="bg-[#BA1556] text-[14px] mt-[20px] rounded-[60px] px-[166px] py-[11px] font-[600] text-[#FEFEFE]">Sign up</button></Link>

              <div className="flex items-center mt-[20px] gap-[5px] justify-center">
                  <p className=" text-[16px] font-[400] text-[#110D0A]">Already have an account?</p>
                  <Link  className=" text-[16px] font-[500] text-[#BA1556]" to={"/"}>Login</Link>
              </div>

            </div>
          </div>
        </div>
        
  )

  
}

export default Signup
