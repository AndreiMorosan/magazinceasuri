import React from 'react';
import Head from 'next/head';

import NavigationBar from './NavigationBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Magazin Online</title>
      </Head>
      <header>
        <NavigationBar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout