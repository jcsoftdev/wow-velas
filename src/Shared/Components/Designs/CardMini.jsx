import React from 'react'

import './CardMini.scss'
const CardMini = (props) => {
  return (
    <div className="card-mini ">
      <div className="avatar">
        <img src={props.image} alt="imagen"/>
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default CardMini
