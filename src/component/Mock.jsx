import React from 'react'
import resdata  from "../Utilities/mockdata"
import Restrocard from './Restrocard'
import './head.css'
const Mock = () => {
  return (
    <div>
        {
            resdata.map((ele)=>{
                <Restrocard resList={ele.data}/>
            })
        }

    </div>
  )
}

export default Mock
