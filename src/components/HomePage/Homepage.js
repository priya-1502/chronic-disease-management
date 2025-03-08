import React from 'react'
import Title from './Title'
import NavigationMenu from './NavigationMenu'
import Content from './Content'
import HealthCards from './HealthCards'

const Homepage = () => {
  return (
    <>
        <Title />
        <NavigationMenu /> 
        <Content/>
        <HealthCards/>
    </>
  )
}

export default Homepage