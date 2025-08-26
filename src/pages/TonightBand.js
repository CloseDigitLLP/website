import Head from 'next/head'
import TonightBandPage from '../components/portfolioDetails/TonightBand'


export default function SnblaPage() {
    return (
        <>
            <Head>
                <title>Tonight band | CloseDigit</title>
                <meta name="description" content="Make your company wealthy by using CloseDigit's effective tool to assist users in finding solutions to create something truly wonderful." />
            </Head>
          <TonightBandPage/>
        </>
    )
}