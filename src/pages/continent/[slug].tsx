import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/react';

import { Header } from '../../components/Header';

const ContinentPage: NextPage = () => {
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
      <Header />
    </Flex>
  )
}

export default ContinentPage;
