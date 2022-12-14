import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Flex } from '@chakra-ui/react';
import { CONTINENTS } from './data';

import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { ContinentDescription } from '../../components/ContinentDescription';
import { Top100Cities } from '../../components/Top100Cities';

export type Top100City = {
  url: string;
  city: string;
  country: string;
  flagUrl: string;
};

type Continent = {
  cover: string;
  title: string;
  description: string;
  countries: number;
  languages: number;
  top100Cities: Top100City[];
};

interface ContinentPageProps {
  continent: Continent;
};

const ContinentPage: NextPage<ContinentPageProps> = ({ continent }) => {
  return (
    <Flex
      w="100%"
      maxWidth={1440}
      align="center"
      justify="center"
      direction="column"
      mx="auto"
      mb={["4", "10"]}
    >
      <Header />
      <Hero
        title={continent?.title}
        url={continent?.cover}
      />
      <ContinentDescription
        description={continent?.description}
        countries={continent?.countries}
        languages={continent?.languages}
        top100Cities={continent?.top100Cities.length}
      />

      <Top100Cities cities={continent?.top100Cities} />
    </Flex>
  )
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = [];

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params;

  const continent = CONTINENTS[slug as string];

  return {
    props: {
      continent,
    },
  };
};

export default ContinentPage;
