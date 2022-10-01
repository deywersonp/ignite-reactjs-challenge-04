import type { NextPage } from 'next'

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

const HomePage: NextPage = () => {
  return (
    <>
      <Header isHome />
      <Banner />
    </>
  )
}

export default HomePage;
