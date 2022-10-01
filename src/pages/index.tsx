import type { NextPage } from 'next'

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { AvailableTravelTypes } from '../components/AvailableTravelTypes';

const HomePage: NextPage = () => {
  return (
    <>
      <Header isHome />
      <Banner />
      <AvailableTravelTypes />
    </>
  )
}

export default HomePage;
