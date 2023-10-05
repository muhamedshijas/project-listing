import React, { useEffect, useState } from 'react'
import axios from 'axios';
function HomePage() {
  const [refresh,setRefresh]=useState(true)
  useEffect(()=>{
    (
        async function(){
            try{
              console.log("hiii")
                const {data}=await axios.get("/getproduct")
            }
            catch(err){   
                console.log(err)
        }
        }
    )()
  },[refresh])
  return (
    <div>HomePage</div>
  )
}

export default HomePage