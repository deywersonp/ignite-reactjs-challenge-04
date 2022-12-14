import { Text, Box, Flex } from "@chakra-ui/react";
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
      px={["4", "10", "35"]}
    >
      <Text
        fontSize={["2xl", "4xl"]}
        fontWeight="medium"
        lineHeight={["9", "54px"]}
      >
        Cidades +100
      </Text>

      <Flex
        flex="1"
        justify={["center", "center", "flex-start"]}
        rowGap={["20px", "48px"]}
        columnGap="45px"
        flexWrap="wrap"
        pt={["5", "10"]}
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
      </Flex>
    </Box>
  )
};