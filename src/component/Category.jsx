import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Itemcategory from './Itemcategory';
import { useState } from 'react';

const Category = ({data,items,setshowIndex}) => {
    // const[items,setitems]=useState(false)
    const handleclick=()=>{
      setshowIndex()
    }

  return (
    <div className=' w-6/12 mx-auto shadow-lg p-5 mt-3 '>
        <div className='flex justify-between'  onClick={handleclick}>
        <p className=' font-extrabold mb-2'>{data.title} - ({data.itemCards.length})</p>
        <p className=' font-medium'><IoIosArrowDown /></p>
        </div>
      {items && <Itemcategory show={data.itemCards}/>}
    </div>

  )
}

export default Category