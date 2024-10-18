import PortfolioPage from '../components/portfolio/PortfolioIndex'
import Head from 'next/head'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | CloseDigit</title>
        <meta name="description" content="Make your company wealthy by using CloseDigit's effective tool to assist users in finding solutions to create something truly wonderful." />
      </Head>
      <PortfolioPage>
      </PortfolioPage>
    </>
  )
}