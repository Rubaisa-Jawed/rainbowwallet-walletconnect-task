import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Connect Wallet</title>
        <meta content="A simple page to connect your wallet using RainbowKit" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <h1>Connect Your Wallet</h1>
        <ConnectButton />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
};

export default Home;
