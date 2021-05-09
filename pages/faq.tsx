import React, { useEffect, useRef } from 'react';
import cn from 'classnames';

import Head from 'next/head';
import Header from '../components/Header/Header';
import Questions from '../components/Questions/Questions';
import AskQuestion from '../components/AskQuestion/AskQuestion';
import FaqBackground from '../components/FaqBackground/FaqBackground';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';
import DnaAndFeatures from '../components/CloverDnaAndFeature/CloverDnaAndFeature';
import ClvToken from '../components/ClvToken';
import { Team } from '../components/Team/Team';
import EarlyBackers from '../components/EarlyBackers/EarlyBackers';
import styles from './Home.module.scss';
import { ARTICLES, CLVTOKENS, DNAS, FEATURES } from '../constants';
import { StrategicPartners } from '../components/StrategicPartners/StrategicPartners';
import { Introduction } from '../components/Introduction/Introduction';
import Features from '../components/ClvFeatures/CloverFeature';

declare var WOW;
const Home = () => {
  const scrollRef = useRef(null);
  const handleClickScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    setTimeout(_ => {
      new WOW({ animateClass: 'animated' }).init();
    }, 1000);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Clover&nbsp;&mdash; Cross-chain DeFi Interoperability</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.bootcss.com/animate.css/3.5.2/animate.min.css"
        />
        <script src="https://cdn.bootcss.com/wow/1.1.2/wow.min.js"></script>
      </Head>
      <Header />
      <main className={styles.main}>
        <FaqBackground />
        <Questions />
      </main>
      <div className={styles.bottom}>
        <AskQuestion />
        <Footer />
      </div>
    </div>
  );
};

export default Home;