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
          The rankings are  1. Salisbury 
        </p>
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thegazette.com%2Fsports%2Fsalisbury-university-sweeps-its-way-to-first-ncaa-division-iii-baseball-national-title%2F&psig=AOvVaw0P3bolkCu81M4H5nxUNuba&ust=1645323857204000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCPjAw5PbivYCFQAAAAAdAAAAABAw" alt="Salisbury" width="460" height="345">
      </main>

      <Footer />
    </div>
  )
}
