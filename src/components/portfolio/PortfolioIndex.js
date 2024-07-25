import React from 'react'
import PortfolioBanner from './PortfolioBanner'
import Project from '../technology/Project'
import OurWorkContent from './PortfolioOurWork'

export default function PortfolioPage() {
  return (
    <>
      <PortfolioBanner/>
     <OurWorkContent/>
      <Project/>
    </>
  )
}
