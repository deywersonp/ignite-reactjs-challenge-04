import { Box, Divider, SimpleGrid } from "@chakra-ui/react";

import { TravelType } from "./TravelType";

import cocktailImg from "/public/images/cocktail.png";
import surfImg from "/public/images/surf.png";
import buildingImg from "/public/images/building.png";
import museumImg from "/public/images/museum.png";
import earthImg from "/public/images/earth.png";

export const AvailableTravelTypes = () => {
  return (
    <Box
      as="section"
      w="100%"
      px="35"
      mt={80.79}
      textAlign="center"
      mx="auto"
    >
      <SimpleGrid
        flex="1"
        gap="4"
        alignItems="center"
        columns={5}
      >
        <TravelType
          title="vida noturna"
          src={cocktailImg}
          alt="Cocktail"
        />

        <TravelType
          title="praia"
          src={surfImg}
          alt="Yellow surf"
        />

        <TravelType
          title="moderno"
          src={buildingImg}
          alt="Yellow building"
        />

        <TravelType
          title="clássico"
          src={museumImg}
          alt="Yellow museum"
        />

        <TravelType
          title="e mais..."
          src={earthImg}
          alt="Yellow cocktail"
        />
      </SimpleGrid>

      <Divider
        w={90}
        mx="auto"
        mt="80px"
        mb="52px"
        orientation='horizontal'
        borderColor='black.300'
      />
    </Box>
  )
};