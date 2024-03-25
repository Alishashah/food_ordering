import React, { useEffect, useState } from 'react'
import Restrocard  from './Restrocard'
// import Restlist from '../Utilities/mockdata'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlinestatus from '../Utilities/useOnlinestatus'
import { Promotedcard } from './Restrocard'
const Mainbody = () => {
  const [reslistdata, setrestlist] = useState([])
  const [filtereddata, setfiltereddata] = useState([])
  const [searchtext, setsearchtext] = useState("")
  const onstatus=useOnlinestatus()
  const Promotedcardwith=Promotedcard(Restrocard)

  if(onstatus === false){
    return <h1>
    look your internet connection
    </h1>
  }

  // useEffect(() => {
  //   const fetchapi = async () => {
  //     try {
  //       const dataa = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_W")
  //       const json = await dataa.json()
  //       setrestlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants)
  //       setfiltereddata(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants)
  //         console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //           ?.restaurants)
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   fetchapi();
  // }, [])
  const fetchapi = async () => {
    try {
      const dataa = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await dataa.json();
      console.log(json)
      const restrolist = json?.data?.cards.filter((ele) => ele.card.card.id === "restaurant_grid_listing")
      console.log(restrolist[0].card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
      setrestlist(restrolist[0].card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
      setfiltereddata(restrolist[0].card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    fetchapi();
  }, [])



  return filtereddata.length === 0 ? (<Shimmer />) : (<div className='body'>
  <div className="">
  <div className='flex justify-between'>
        <input type="text" name='searchtext' value={searchtext} onChange={(e) => { setsearchtext(e.target.value)

        }}
        onKeyUp={() => {
          let filterdata = reslistdata.filter((res) =>{
            return res.info.name.toLowerCase().includes(searchtext.toLowerCase())
        });
        setfiltereddata(filterdata);
        }}
         />
        {/* <button onClick={() => {

        const filterdata = reslistdata.filter((ele) => ele.info.name.toLowerCase().includes(searchtext.toLowerCase()))
        setfiltereddata(filterdata)
        }}>search</button> */}
        </div>
     <div>
      <button className='px-2 bg-slate-800 hover:bg-slate-900 text-white' onClick={() => {
        const newdata = reslistdata.filter((res) => res.info.avgRating > 4)
        setfiltereddata(newdata)
        console.log(newdata)
      }}
      >Top Rated Restaurant</button>
    </div>
  </div>


    <div className=' flex flex-wrap justify-center'>
      {
        filtereddata.map((restro) => (
          <Link to={/restaurants/+restro.info.id}>
              {
                restro.info.promoted
                ? <Promotedcardwith resList={restro} />: <Restrocard resList={restro}  />
              }
              </Link>

        ))
      }

    </div>
  </div>)



}

export default Mainbody