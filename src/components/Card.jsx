import React from 'react'
import '../styles/card.scss'


export default function Card({img}) {
  return (
    <div className='cardImg'>
        <img src={img} alt="Imagecard" />
    </div>
  )
}
