import React from 'react'

const Itemcategory = ({show}) => {
    console.log(show)
  return (
    <div>
{
    show.map((ele)=>{
        return(
            <div className=' border-b-4 text-left flex justify-between'>
                <div className='p-5 w-9/12'>
                    <span className=' font-bold  '>{ele.card.info.name} </span>
                    <span >- ₹ {ele.card.info.price ? ele.card.info.price/100 : ele.card.info.defaultPrice/100}</span>
                    <div className=' m-2'>
                {ele.card.info.description}
                </div>
                </div>




                <div className=' relative mt-2  p-3 w-3/12'>
                    <div className=''>
            <img src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+ele.card.info.imageId
} alt="kjkhg" />
</div>
    <button className='  bg-slate-900 p-2 rounded-lg text-white  absolute z-10 top-3  right-2'>ADD</button>

            </div>
            </div>

        )
    })
}

    </div>
  )
}

export default Itemcategory