import { useEffect, useState } from "react"
import logos from "../../assets/logos.png"
import burchag from "../../assets/burchag.png"
import Bistro from "../../assets/Bistro.png"
import globos from "../../assets/globos.png"
import icon from "../../assets/icon.png"
import served from "../../assets/served.png"
import axios from "axios"
import { Link } from "react-router-dom"

function Home() {
  const [open,setOpen] = useState(false)

  const [todo, setTodo]= useState([])

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
    .then(res => setTodo(res.data.meals))
    .catch(err => console.error(err))
  }, [])
  return (
    <div className="w-[1440px] max-w-[1440px] flex m-auto justify-between">
      {/* 1 */}
      <div className={`${open ?"w-[256px] h-auto p-[25px] border-r-2 border-[#F4F4F4]" :"w-[80px] h-auto border-r-2 border-[#F4F4F4]"}`}>
        <div className="flex items-center gap-[20px]">
          <img className={`${open ?"mt-[20px]" :"mt-[45px] m-auto" }`} src={logos} alt="logo" />
          <img src={Bistro} alt="icon" className={`${open ?"mt-[20px]" :" mt-[45px] m-auto hidden" }`} />
        </div>
        
        <div>
            <img src={burchag} alt="icon" className={`${open ?"mt-[30px] hidden" :"mt-[30px] m-auto" }`} onClick={()=> setOpen(open ? true  : true)} />
              <img src={burchag} alt="icon" className={`${open ?"mt-[30px] rotate-180 ml-[200px]" :"mt-[30px] m-auto hidden " }`} onClick={()=> setOpen(open ? false  : false)} />
        </div>

        <ul>
          <p className="flex items-center gap-[10px] mt-[30px]">
            <span  className={`${open ?"" :"m-auto" }`}>🏢</span>
          <li className={`${open ?"text-[#000] font-[500]  text-[16px]" :"text-[#000] font-[500]  text-[16px] hidden" }`}>Dashboard</li>
          </p>
          <p className="flex items-center gap-[10px] mt-[30px]">
            <span  className={`${open ?"" :"m-auto" }`}>📋</span>
          <li  className={`${open ?"text-[#000] font-[500]  text-[16px]" :"text-[#000] font-[500]  text-[16px] hidden" }`}>Order Line</li>
          </p>
          <p className="flex items-center gap-[10px] mt-[30px]">
            <span  className={`${open ?"" :"m-auto" }`}>🗓️</span>
          <li  className={`${open ?"text-[#000] font-[500]  text-[16px]" :"text-[#000] font-[500]  text-[16px] hidden" }`}>Table</li>
          </p>
          <p className="flex items-center gap-[10px] mt-[30px]">
            <span  className={`${open ?"" :"m-auto" }`}>🍽️</span>
          <li  className={`${open ?"text-[#000] font-[500]  text-[16px]" :"text-[#000] font-[500]  text-[16px] hidden" }`}>Menus</li>
          </p>
          <p className="flex items-center gap-[10px] mt-[30px]">
            <span  className={`${open ?"" :"m-auto" }`}>👥</span>
          <li  className={`${open ?"text-[#000] font-[500]  text-[16px]" :"text-[#000] font-[500]  text-[16px] hidden" }`}>Customer</li>
          </p>
          <p className="flex items-center gap-[10px] mt-[30px]">
            <span  className={`${open ?"" :"m-auto" }`}>📈</span>
          <li  className={`${open ?"text-[#000] font-[500]  text-[16px]" :"text-[#000] font-[500]  text-[16px] hidden" }`}>Analytics</li>
          </p>
          <p className="flex items-center gap-[10px] mt-[30px]">
            <span  className={`${open ?"" :"m-auto" }`}>💳</span>
          <li  className={`${open ?"text-[#000] font-[500]  text-[16px]" :"text-[#000] font-[500]  text-[16px] hidden" }`}>Payment</li>
          </p>
          <p className="flex items-center gap-[10px] mt-[30px]">
            <span className={`${open ?"" :"m-auto" }`}>💬</span>
          <li  className={`${open ?"text-[#000] font-[500]  text-[16px]" :"text-[#000] font-[500]  text-[16px] hidden" }`}>Chat</li>
          </p>
        </ul>

      </div>

      {/* 2 */}
      <div className="w-[100%]">

        <div className="w-[100%] h-[80px] flex items-center gap-[50px] justify-between border-b-2 border-[#F4F4F4] px-[30px] py-[20px]">
            <div className="w-[100%] h-[40px] flex items-center p-[13px] gap-[12px] rounded-[60px] bg-[#F4F4F4]">
                <img src={globos} alt="icon" />

                <input type="text" placeholder="Search " className="w-[100%] h-[100%] outline-none" />
            </div>

            <img src={icon} alt="icon" />
        </div>

        <div className="mt-[30px] ml-[30px] flex items-center justify-between mb-[15px]">
          <h4 className="font-[500] text-[20px]">Order Line</h4>

          <button className="px-[18px] py-[8px] rounded-[50px] text-[#fff] font-[600] bg-[#BA1556]">New Order</button>
        </div>

        <img src={served} className="ml-[30px]" alt="iamge" />

        <div className="flex grid grid-cols-6 ml-[30px] gap-[20px] mt-[25px]">
          {todo.map((item) => (
            <div key={item.idMeal} className="w-[174px] h-[200px] card rounded-t-[15px] rounded-b-[15px] border-2 border-[#E7E7E7] ">
              <img src={item.strMealThumb} alt="image" className="w-[100%] h-[97px] bg-[#C4C4C4] rounded-t-[15px]" />

              <div className="p-[12px]">
                  <h3 className="text-[#110D0A] text-[16px] font-[600]">{item.strMeal.split(" ").slice(0,2).join(" ")}</h3>
                  <p className="text-[#555555] text-[12px] font-[400] mt-[3px] mb-[3px]">{item.strCategory}</p>
                  <div className="flex justify-between items-center ">
                    <span className="text-[#BA1556] text-[14px] font-[600]">{item.strMeasure8.split(" ").slice(0,1)}</span>
                    <Link to={`/batafsil/${item.idMeal}`}><button className="py-[5px] px-[12px] text-[#BA1556] shatov  text-[12px] font-[500] border-2 border-[#BA1556] rounded-[60px]">Batafsil</button></Link>
                  </div>
              </div>
            </div>

          ))
          }
        </div>

      </div>
    </div>
  )
}


export default Home