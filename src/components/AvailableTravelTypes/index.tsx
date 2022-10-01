import { Box, Divider, SimpleGrid } from "@chakra-ui/react";

import { TravelType } from "../TravelType";
import { TRAVEL_TYPE } from "./data";

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
        {TRAVEL_TYPE.map(travel => (
          <TravelType
            key={travel.title}
            title={travel.title}
            src={travel.src}
            alt={travel.alt}
          />
        ))}
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