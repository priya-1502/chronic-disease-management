import React from 'react'
import { brandName } from '../../utils/constants'

const Title = () => {
  return (
    <div class="text-white bg-gray-800">
        <h1 class="text-xl font-bold p-10 ">{brandName}</h1>
    </div>
  )
}

export default Title