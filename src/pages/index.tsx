import type { NextPage } from 'next'
import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { AvailableTravelTypes } from '../components/AvailableTravelTypes';
import { AvailableTravelTypesMobile } from '../components/AvailableTravelTypeMobile';
import { Carousel } from '../components/Carousel';

const HomePage: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      maxWidth={1440}
      align="center"
      justify="center"
      direction="column"
      mx="auto"
      mb={["6", "10"]}
    >
      <Header isHome />
      <Banner />
      {isWideVersion ? <AvailableTravelTypes /> : <AvailableTravelTypesMobile />}
      <Carousel />
    </Flex>
  )
}

export default HomePage;
