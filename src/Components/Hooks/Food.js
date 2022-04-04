import { useEffect, useState } from "react";

const Food =()=>{

    const [reviews,SetReviews]=useState([]);
    useEffect(()=>{
        fetch('food.json').then(res=>res.json()).then(data=>SetReviews(data));

   },[])
   return [reviews,SetReviews];
}
export default Food;