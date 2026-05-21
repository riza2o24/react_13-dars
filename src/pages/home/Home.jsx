import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <Link  className=" text-[16px] font-[500] text-[#BA1556]" to={"/signups"}>Sign up</Link>
    </div>
  )
}


export default Home