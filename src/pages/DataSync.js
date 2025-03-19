import Head from 'next/head'
import DataSync from '../components/portfolioDetails/dataSync'


export default function DataSyncPage() {
    return (
        <>
            <Head>
                <title>DataSync | CloseDigit</title>
                <meta name="description" content="Make your company wealthy by using CloseDigit's effective tool to assist users in finding solutions to create something truly wonderful." />
            </Head>
            <DataSync />
        </>
    )
}