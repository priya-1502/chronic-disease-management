import React from 'react'
import { contentDetail, contentTitle } from '../../utils/constants'

const Content = () => {
  return (
    <div>
        <h1> {contentTitle} </h1>
        <p> {contentDetail} </p>
    </div>
  )
}

export default Content