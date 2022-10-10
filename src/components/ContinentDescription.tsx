import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Info } from "./Info";

interface ContinentDescriptionProps {
  description: string;
  countries: number;
  languages: number;
  top100Cities: number;
};

export const ContinentDescription = ({
  description,
  countries,
  languages,
  top100Cities
}: ContinentDescriptionProps) => {
  return (
    <Box
      as="section"
      w="100%"
      px={["4", "10", "35"]}
      py="20"
      mx="auto"
    >
      <SimpleGrid
        flex="1"
        gap="17"
        minChildWidth="300px"
      >
        <Text
          fontSize="2xl"
          lineHeight="9"
          textAlign="justify"
        >
          {description}
        </Text>

        <Flex
          align="center"
          justify="space-between"
        >
          <Info
            value={countries}
            label="países"
          />
          <Info
            value={languages}
            label="línguas"
          />
          <Info
            value={top100Cities}
            label="cidades +100"
            showTooltip
          />
        </Flex>
      </SimpleGrid>
    </Box >
  )
};