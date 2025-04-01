
import Head from 'next/head'
import HyperStack from "../components/portfolioDetails/hyperStack"


export default function HyperStackPage() {
    return (
        <>
            <Head>
                <title>HyperStack | CloseDigit</title>
                <meta name="description" content="Make your company wealthy by using CloseDigit's effective tool to assist users in finding solutions to create something truly wonderful." />
            </Head>
            <HyperStack/>
        </>
    )
}