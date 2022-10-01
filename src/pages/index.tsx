import type { NextPage } from 'next'

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { AvailableTravelTypes } from '../components/AvailableTravelTypes';
import { Carousel } from '../components/Carousel';

const HomePage: NextPage = () => {
  return (
    <>
      <Header isHome />
      <Banner />
      <AvailableTravelTypes />
      <Carousel />
    </>
  )
}

export default HomePage;
