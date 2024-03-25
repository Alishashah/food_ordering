import React, { useEffect, useState } from "react";
import useRestromenu from "../Utilities/useRestromenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Restromenu = () => {
  const { resid } = useParams();
  const restrodata = useRestromenu(resid);
  // console.log(restrodata);

  if (restrodata === null) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,

    cloudinaryImageId,
    locality,
    slugs,
    promoted
  } = restrodata?.cards[2]?.card?.card?.info;
  // console.log(restrodata?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card)


  const {itemCards}=restrodata?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card




  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <p>{locality}</p>
      <p>{slugs.restaurant}</p>
      <p>
        {promoted}
      </p>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`}
        alt=""
      />

      {itemCards.map((ele)=>{
       return(
        <> <li>{ele.card.info.name}-{ele.card.info.vegClassifier} {ele.card.info.price/100 ||  ele.card.info.defaultPrice/100}</li>

        </>
       )   })}
    </div>
  );
};

export default Restromenu;
