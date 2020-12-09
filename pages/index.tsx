import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Moonbeam Development!</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Header title="Welcome to moonbeam!" />
        <p className="description">
          Get started by editing <code>pages/index.tsx</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
