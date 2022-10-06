import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

type City = {
  url: string;
  city: string;
  country: string;
  flagUrl: string;
};

interface Top100CitiesProps {
  cities: City[]
};

export const Top100Cities = ({ cities }: Top100CitiesProps) => {
  return (
    <Box
      width="100%"
      mx="auto"
      maxWidth={1440}
      px="35"
    >
      <Text
        fontSize="4xl"
        fontWeight="medium"
        lineHeight="54px"
      >
        Cidades +100
      </Text>

      <SimpleGrid
        flex="1"
        rowGap="48px"
        columnGap="45px"
        minChildWidth="256px"
        pt="10"
      >
        {cities?.map(city => (
          <CityCard
            key={city.city}
            url={city.url}
            city={city.city}
            country={city.country}
            flagUrl={city.flagUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
};