
import HomePage from '../components/home/HomeIndex'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | CloseDigit</title>
        <meta name="description" content="A group of creative designers and software developers who work together to provide the best work possible and assist clients in turning their concepts into successful realities." />
      </Head>
      <HomePage></HomePage>
    </>
  )
}
