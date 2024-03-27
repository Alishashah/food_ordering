import React from 'react'
// import { CDN_URL } from '../Utilities/constant';

const Restrocard = ({resList}) => {
  // console.log(props)
  // console.log(resList.cloudinaryImageId)

  const {
     cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    id
  } = resList?.info;
  return (

    <div className='res-card' key={id}>
      <img className=' img-fluid' alt='...'  src={
          ` https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`

        }/>
      <h3>{name}</h3>
      {/* {<h4>{cuisines.join(', ')}</h4>} */}
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo} Rupees</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>

  )
}

export const Promotedcard=(Restrocard)=>{
  return(props)=>{
    return(
      <div>
        <label className='absolute mt-4 px-4 py-2 ml-1 text-white bg-gray-800'>Promoted</label>
        <Restrocard {...props}/>
      </div>
    )
  }
}

export default Restrocard
