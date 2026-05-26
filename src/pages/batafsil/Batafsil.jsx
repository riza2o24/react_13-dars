import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function Batafsil() {
    
      const [todo, setTodo]= useState([])
    const params = useParams()
    console.log(params);
    
      useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
        .then(res => setTodo(res.data.meals))
        .catch(err => console.error(err))
      }, [])

      const filter =todo.find(s => s.idMeal === params.idMeal)
      
      if(!filter){
        return <h2>Loding...</h2>
      }
  return (
    <div className="flex items-center m-auto justify-center mt-[50px] ">
        <div>
            
            <div key={filter.idMeal} className="w-[474px] h-[400px] card rounded-t-[15px] rounded-b-[15px] border-2 border-[#E7E7E7] ">
              <img src={filter.strMealThumb} alt="image" className="w-[100%] h-[250px] bg-[#C4C4C4] rounded-t-[15px]" />

              <div className="p-[12px]">
                  <h3 className="text-[#110D0A] text-[26px] font-[600]">{filter.strMeal.split(" ").slice(0,2).join(" ")}</h3>
                  <p className="text-[#555555] text-[19px] font-[400] mt-[3px] mb-[3px]">{filter.strCategory}</p>
                  <div className="flex justify-between ">
                    <span className="text-[#BA1556] text-[18px] font-[600] mt-[15px]">{filter.strMeasure8.split(" ").slice(0,1)}</span>
                     <Link to={"/home"} className="py-[10px] px-[22px] text-[#BA1556] shatov  text-[18px] font-[600] border-2 border-[#BA1556] rounded-[60px]"><button>orqaga</button></Link>               
                  </div>
              </div>
            </div>

        
     
        </div>
    </div>
  )
}

export default Batafsil
