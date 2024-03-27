import { useEffect,useState } from "react"
const useRestromenu = (resid) => {
    const[resdata,setresdata]=useState(null)

    useEffect(()=>{
 fetchrestro()
    },[])

    const fetchrestro=async()=>{
        const restro= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`)
        const restrojson= await restro.json()
        console.log(restrojson.data.cards)
        setresdata(restrojson?.data)
    }
    return resdata;
}

export default useRestromenu