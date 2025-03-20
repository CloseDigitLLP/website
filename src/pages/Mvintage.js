import Head from 'next/head'
import MvinTage from '../components/portfolioDetails/mvinTage'

export default function MvintagePage() {
    return (
        <>
            <Head>
                <title>Mvintage | CloseDigit</title>
                <meta name="description" content="Make your company wealthy by using CloseDigit's effective tool to assist users in finding solutions to create something truly wonderful." />
            </Head>
            <MvinTage />
        </>
    )
}