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
    <img src="https://images.app.goo.gl/Th7u1TK8uKhYNbRz5" alt="Salisbury" width="20" height="20">
      </main>

      <Footer />
    </div>
  )
}
