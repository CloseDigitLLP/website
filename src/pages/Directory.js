
import Head from 'next/head'
import Directory from '../components/portfolioDetails/directory'

export default function DirectoryPage() {
    return (
        <>
            <Head>
                <title>DirectoryPage | CloseDigit</title>
                <meta name="description" content="Make your company wealthy by using CloseDigit's effective tool to assist users in finding solutions to create something truly wonderful." />
            </Head>
            <Directory/>
        </>
    )
}