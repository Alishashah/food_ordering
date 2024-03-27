import React from 'react'
// import { CDN_URL } from '../Utilities/constant';

const Restrocard = ({resList}) => {
  console.log(resList)
  // console.log(resList.cloudinaryImageId)

  const {
     cloudinaryImageId,
    name,
    // cuisines,
    avgRating,
    costForTwo,

locality,
sla,

    // deliveryTime,
    id
  } = resList?.info;
  return (

    <div className=' mt-6'  key={id}>
      <img className=' rounded-lg' alt='...'  src={
          ` https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`

        }/>
      <h3 className='text-2xl  text-blue-950 mt-2'>{name}</h3>
      {/* {<h4>{cuisines.join(', ')}</h4>} */}
      <h4 className=' text-xl'>{avgRating} Stars</h4>
      <h4 className=' text-xl'>{
locality
} </h4>
      <h4 className=' text-orange-900'>{costForTwo} Rupees</h4>
      <h4>{sla.
deliveryTime} minutes</h4>
    </div>

  )
}

export const Promotedcard=(Restrocard)=>{
  return(props)=>{
    return(
      <div>
        <label className='absolute px-4 py-2 text-white bg-orange-800'>Promoted</label>
        <Restrocard {...props}/>
      </div>
    )
  }
}

export default Restrocard
