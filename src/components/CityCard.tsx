import { Box, Flex, Text } from "@chakra-ui/react";

interface CityCardProps {
  url: string;
  city: string;
  country: string;
  flagUrl: string;
};

export const CityCard = ({
  url,
  city,
  country,
  flagUrl,
}: CityCardProps) => {
  return (
    <Box
      w="256px"
      h="279px"
      bgColor="white"
      borderRadius="md"
      overflow="hidden"
    >
      <Box
        w="256px"
        h="173px"
        bgImage={`url(${url})`}
        bgPosition="top center"
        bgRepeat="no-repeat"
        bgSize="cover"
        boxSizing="border-box"
      />

      <Flex
        border="1px"
        width="100%"
        height="106px"
        borderBottomLeftRadius="md"
        borderBottomRightRadius="md"
        borderTop="0px"
        borderColor="yellowAlfa.500"
        align="center"
        justify="space-between"
        px="6"
      >
        <Box>
          <Text
            fontWeight="semibold"
            fontSize="xl"
            fontFamily="cities"
          >
            {city}
          </Text>
          <Text
            fontWeight="medium"
            color="gray.200"
            fontFamily="cities"
          >
            {country}
          </Text>
        </Box>

        <Box
          w="30px"
          h="30px"
          bgImage={`url(${flagUrl})`}
          bgSize="contain"
          bgPosition="center"
          bgRepeat="no-repeat"
          borderRadius="full"
        />
      </Flex>
    </Box>
  )
};