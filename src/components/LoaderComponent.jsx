import React from 'react'
import { PropagateLoader } from 'react-spinners'

const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <PropagateLoader color="#36d7b7" size={70}/>
    </div>
  )
}

export default LoaderComponent