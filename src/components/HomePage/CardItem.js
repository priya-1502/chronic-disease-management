import React from 'react'

const CardItem = ({cardDetail}) => {

  return (
    <div className='bg-white w-200 mx-10 mt-0 mb-10'>
        <div className='m-5'>
        <h1 className='text-xl flex justify-start py-5 font-bold' > {cardDetail.title}</h1>
        <p className='text-left'> {cardDetail.details}</p>
        <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5 flex justify-start'> Learn More </button>
        </div>
     </div>
    
  )
}

export default CardItem