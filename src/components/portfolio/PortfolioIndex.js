import React,{useState,useEffect} from 'react'
import PortfolioBanner from './PortfolioBanner'
import Project from '../technology/Project'
import OurWorkContent from './PortfolioOurWork'
import Loader from '../portfolioDetails/portfolioDetailsCommon/loader';

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ?
        <Loader />
        : (
          <>
            <PortfolioBanner />
            <OurWorkContent />
            <Project />
          </>
        )}
    </>
  )
}
