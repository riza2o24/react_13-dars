import logo from "../../assets/gugle.png"
import or from "../../assets/or.png"
import qwert from "../../assets/qwert.png"
import Vctor from "../../assets/Vector.png"

function Login() {
  return (
    <div className="w-[1440px] max-w-[1440px] flex m-auto">
      <div className="w-[800px] h-[900px] bg-[#C4C4C4]"></div>
      <div className="flex bg-[#ffffff] items-center justify-center w-[640px] h-auto">
        <div>
          <h3 className="text-center text-[24px] text-[#110D0A] mb-[25px] font-[600]">Hi, Welcome to Bistro!</h3>
          <img src={logo} className="text-center" alt="logo" />
          
          <img src={or} alt="or"  className="mt-[25px] mb-[25px]"/>

          <p className="mb-[10px] text-[16px] font-[500] text-[#110D0A]">Your Email</p>

          <img src={qwert} alt="image" />

          <p className="mt-[20px] text-[16px] mb-[10px] font-[500] text-[#110D0A]">Your Password</p>

          <div className="w-[370px] h-[50px] p-[15px] border-2 border-[#A3A9C6] gap-[15px] flex items-center rounded-[60px]">
            <img src={Vctor} alt="icon" />
            <input type="text" placeholder="**************" className="w-[100%] dwededfede h-[35px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
