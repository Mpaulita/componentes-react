import React from 'react'
import "./Card.css"

const Card = ({lang,img}) => {
  return (
    
    <>
    <div className='estiloCard' style={{
        background: "linear-gradient(to left ${fcolor},${scolor})"
    }}> 
        <img src={img} alt=" " />
        <h1>Holiwi</h1>
        <h3>{lang}</h3>
    </div>
    </>
  )
}

export default Card