import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { AvailableTravelTypes } from '../components/AvailableTravelTypes';
import { Carousel } from '../components/Carousel';

const HomePage: NextPage = () => {
  return (
    <Flex
      w="100%"
      maxWidth={1440}
      align="center"
      justify="center"
      direction="column"
      mx="auto"
      mb="10"
    >
      <Header isHome />
      <Banner />
      <AvailableTravelTypes />
      <Carousel />
    </Flex>
  )
}

export default HomePage;
