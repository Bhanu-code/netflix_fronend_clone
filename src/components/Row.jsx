import React from 'react'
import Card from './Card'
import '../styles/row.scss'

const imgUrl = 'https://image.tmdb.org/t/p/original';

export default function Row({arr}) {
  return (
    <div className='cards'>
      {
        arr.map((item, index) => {
          return <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        }
      )
      }
    </div>
  )
}
