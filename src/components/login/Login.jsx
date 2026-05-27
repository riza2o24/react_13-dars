import logo from "../../assets/gugle.png"
import or from "../../assets/or.png"
import Vctor from "../../assets/Vector.png"
import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="w-[1440px] max-w-[1440px] flex m-auto">
      <div className="w-[800px] h-[900px] bg-[#C4C4C4]"></div>
      <div className="flex bg-[#ffffff] items-center justify-center w-[640px] h-auto">
        <div>
          <Link to={"/"}><h3 className="text-center text-[24px] text-[#110D0A] mb-[25px] font-[600]">Hi, Welcome to Bistro!</h3></Link>
          <img src={logo} className="text-center" alt="logo" />
          
          <img src={or} alt="or"  className="mt-[25px] mb-[25px]"/>

          <p className="mb-[10px] text-[16px] font-[500] text-[#110D0A]">Your Email</p>

          <div className="w-[370px] h-[50px] p-[15px] border-2 border-[#BA1556] gap-[15px] flex items-center rounded-[60px]">
            <p className="text-[22px] text-[#BA1556]">@</p>
            <input type="text" placeholder="stella.hwang@mail.com"  className="w-[100%] dwededfede text-[#BA155680] h-[35px]" />
          </div>

          <p className="mt-[20px] text-[16px] mb-[10px] font-[500] text-[#110D0A]">Your Password</p>

          <div className="w-[370px] h-[50px] p-[15px] border-2 border-[#A3A9C6] gap-[15px] flex items-center rounded-[60px]">
            <img src={Vctor} alt="icon" />
            <input type="password" required placeholder="**************" className="w-[100%] dwededfede h-[35px]" />
          </div>

          <Link to={"/homee"}><button className="bg-[#BA1556] text-[14px] mt-[30px] rounded-[60px] px-[166px] py-[11px] font-[600] text-[#FEFEFE]">Login</button></Link>

          <div className="flex items-center mt-[20px] gap-[5px] justify-center">
              <p className=" text-[16px] font-[400] text-[#110D0A]">Don’t have an account?</p>
              <Link  className=" text-[16px] font-[500] text-[#BA1556]" to={"/signups"}>Sign up</Link>
          </div>
        </div>

          
      </div>
    </div>
  )
}

export default Login
