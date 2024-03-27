import React, { useEffect, useState } from "react";
import useRestromenu from "../Utilities/useRestromenu";
// import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Category from "./Category";
import Shimmernew from "./Shimmernew";

const Restromenu = () => {
  const { resid } = useParams();
  const restrodata = useRestromenu(resid);
  const[showIndex,setshowIndex]=useState(null)
  // console.log(restrodata);

  if (restrodata === null) {
    return <Shimmernew/>
  }

  const restdata = restrodata?.cards.filter((ele) => {
    return ele.card?.card?.['@type'] !== "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2"
        && ele.card?.card?.['@type'] !== "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab"
        && ele.card?.card?.['@type'] !== "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        && ele.card?.card?.['@type'] !== "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
        && ele.card?.card?.['@type'] !== "type.googleapis.com/swiggy.presentation.food.v2.MenuTab";
});

console.log(restdata,"kjahvhd")

  const {
    name,
    cuisines,

    cloudinaryImageId,
    // locality,
    // slugs,
    // promoted
  } = restrodata?.cards[2]?.card?.card?.info;
  // console.log(restrodata?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card)


  // const data=restrodata?.cards.filter((ele)=> ele.
  // groupedCard
  // )

//   const newdata=data[0].groupedCard.cardGroupMap.REGULAR.cards.filter((ne)=> ne.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
// const datanew=newdata.itemCards

//  console.log(newdata)
//  console.log(datanew)
  const datacategory=restrodata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((ne)=> ne?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   || restrodata?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((ne)=> ne?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ||
    restrodata?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((ne)=> ne?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ||
     restrodata?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((ne)=> ne?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  // console.log(datacategory)

  return (
    <div className="text-center mt-4 p-4">
      <h1 className=" font-bold text-4xl  bg-slate-900 text-white p-3 w-6/12 mx-auto">{name}</h1>
      <p className=" font-bold text-2xl mt-2 mb-3">{cuisines.join(",")}</p>
      <img src={ <img className=' img-fluid' alt='...'  src={
          ` https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`

        }/>} alt="" />
      {/* <p>{locality}</p> */}
      {/* <p>{slugs.restaurant}</p> */}
      {datacategory.map((ele,index)=>{
       return(
        <>
          <Category data={ele?.card?.card}
          items={index===showIndex ? true:false}
          setshowIndex={()=>{setshowIndex(index)}}
          />
        </>
       )   })}
    </div>
  );
};

export default Restromenu;
