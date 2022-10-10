import { Box, Divider, Flex, SimpleGrid } from "@chakra-ui/react";
import { TravelTypeMobile } from "../TravelTypeMobile";

export const AvailableTravelTypesMobile = () => {
  return (
    <Box
      as="section"
      w="100%"
      px={["4", "10"]}
      mt="9"
      textAlign="center"
      mx="auto"
    >
      <Box>
        <Flex>
          <TravelTypeMobile title="vida noturna" />
          <TravelTypeMobile title="praia" />
        </Flex>

        <Flex>
          <TravelTypeMobile title="moderno" />
          <TravelTypeMobile title="clássico" />
        </Flex>

        <Box>
          <TravelTypeMobile title="e mais..." />
        </Box>
      </Box>

      <Divider
        w={90}
        mx="auto"
        mt="9"
        mb="6"
        orientation='horizontal'
        borderColor='black.300'
      />
    </Box>
  )
};