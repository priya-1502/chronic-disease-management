import React, { useState } from 'react'
import { cardsData } from '../../utils/constants'
import CardItem from './CardItem';

const HealthCards = () => {

  const [cardData , setCardData ] = useState(cardsData);

  return (
    <div className = "bg-gray-200 ">
        
        <h2 className='font-bold text-xl flex justify-start pt-10 ml-30'> Feature Health Topics </h2>
        
        {/* Array of healthcards */}
        <div className='flex justify-between mt-2  pt-10 ml-20'>
        {cardData.map((item) => {
          return (
          <CardItem cardDetail = {item} key={item.id}/>
          )
        })}
        </div>

    </div>
  )
}

export default HealthCards