import React from 'react'
import { contentDetail, contentTitle } from '../../utils/constants'

const Content = () => {
  return (
    <div className='bg-gray-800 p-15'>
        <h1 className='text-6xl text-white'> {contentTitle} </h1>
        <p className='my-3 text-2xl text-white'> {contentDetail} </p>
    </div>
  )
}

export default Content