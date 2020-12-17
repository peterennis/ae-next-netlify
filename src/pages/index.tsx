import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import SimpleSlider from '../components/SlickCarousel';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Moonbeam Development!</title>
        <link rel="icon" href="/assets/icon/favicon.png" />
      </Head>

      <main>
      <div>
        {/* <img src="/assets/ae-octocat-red.png" alt="cool katze" /> */}
        <SimpleSlider></SimpleSlider>
      </div>
        <Header title="Welcome to moonbeam!" />
        <p className="description">
          Get started by editing <code>pages/index.tsx</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
