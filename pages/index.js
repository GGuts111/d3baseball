import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="D3 Baseball 2022 season" />
        <p className="description">
          The rankings are  
<br><a href="https://www.suseagulls.com/sports/bsb/index"> 1. Salisbury</a>
<br><a href="https://www.cortlandreddragons.com/sports/baseball"> 2. Cortland</a>
<br><a href="https://pioneers.marietta.edu/sports/baseball"> 3. Marietta</a>
        </p>
    
      </main>

      <Footer />
    </div>
  )
}
