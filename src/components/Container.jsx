import React from 'react'
import Header from './Header'
import Nav from './Nav'
import ContentWrapper from './ContentWrapper'

const Container = () => {
  return (
    <div className='w-full flex-1 flex-shrink py-3 px-10 overflow-scroll'>
        <Header />
        <Nav />
        <ContentWrapper />
    </div>
  )
}

export default Container
