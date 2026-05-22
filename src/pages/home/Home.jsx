import { useState } from "react"
import logos from "../../assets/logos.png"
import burchag from "../../assets/burchag.png"

function Home() {
  const [open,setOpen] = useState(false)
  return (
    <div className="w-[1440px] max-w-[1440px] flex m-auto">
      <div className={`${open ?"w-[256px] h-auto p-[25px] border-r-2 border-[#F4F4F4]" :"w-[80px] h-auto border-r-2 border-[#F4F4F4]"}`}>
        <img className={`${open ?"mt-[20px]" :"mt-[45px] m-auto" }`} src={logos} alt="logo" />

        <div>
            <img src={burchag} alt="icon" className={`${open ?"mt-[20px] hidden" :"mt-[20px] m-auto" }`} onClick={()=> setOpen(open ? true  : true)} />
              <img src={burchag} alt="icon" className={`${open ?"mt-[20px] rotate-180 ml-[180px]" :"mt-[20px] m-auto hidden " }`} onClick={()=> setOpen(open ? false  : false)} />
        </div>
      </div>
    </div>
  )
}


export default Home