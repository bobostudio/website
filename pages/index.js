import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Website</title>
        <meta name="description" content="bobostudio's website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to bobostudio's website!
        </h1>

        <p className={styles.description}>
          <Image src="https://media.giphy.com/media/u2pmTWUi0MXjyrMaVj/giphy.gif"  width='400' height='300'/>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/bobostudio/" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about open source!</p>
          </a>

          <a href="https://github.com/bobostudio/" className={styles.card}>
            <h2>Contribution &rarr;</h2>
            <p>Join in the contribution!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/bobostudio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered By{' '}
          <span className={styles.logo}>
            @bobostudio
          </span>
        </a>
      </footer>
    </div>
  )
}
