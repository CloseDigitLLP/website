import Head from 'next/head'
import JVConstruction from '../components/portfolioDetails/jvConstruction'


export default function FBNPage() {
    return (
        <>
            <Head>
                <title>JVConstructionPage | CloseDigit</title>
                <meta name="description" content="Make your company wealthy by using CloseDigit's effective tool to assist users in finding solutions to create something truly wonderful." />
            </Head>
           <JVConstruction/>
        </>
    )
}