import Head from 'next/head'
import ProperSky from '../components/portfolioDetails/properSky.js'

export default function ProperSkyPage() {
    return (
        <>
            <Head>
                <title>Proper Sky | CloseDigit</title>
                <meta name="description" content="Make your company wealthy by using CloseDigit's effective tool to assist users in finding solutions to create something truly wonderful." />
            </Head>
            <ProperSky />
        </>
    )
}