import React from 'react';

import Head from 'next/head';

import Banner from '../components/banner';
import ContactRow from '../components/contact';
import Testimonials from '../components/testimonials';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vaultra Express Concierge Website</title>
        <link rel="icon" href="/favicon_vaultra.ico" />
      </Head>
      <Banner />
      <Testimonials />
      <ContactRow />
    </div>
  );
}
