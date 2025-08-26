
import Head from 'next/head'
import VaynoApp from '../components/portfolioDetails/vaynoapp'

export default function VaynoAppPage() {
    return (
        <>
            <Head>
                <title>Vayno app | CloseDigit</title>
                <meta name="description" content="Make your company wealthy by using CloseDigit's effective tool to assist users in finding solutions to create something truly wonderful." />
            </Head>
          <VaynoApp/>
        </>
    )
}