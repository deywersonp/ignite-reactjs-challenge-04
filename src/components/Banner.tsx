import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const Banner = () => {
  return (
    <Flex
      w="100%"
      h={335}
      position="relative"
      maxWidth={1440}
      align="center"
      bgImage="url('/images/night-sky-cover.png')"
      bgPosition="top center"
      bgRepeat="no-repeat"
      px="35"
      mx="auto"
    >
      <Box>
        <Heading
          as="h1"
          maxWidth={424}
          color="heading.50"
          lineHeight="13"
          mb="20px"
        >
          5 Continentes, infinitas possibilidades.
        </Heading>
        <Text
          maxWidth={524}
          color="info.100"
          lineHeight="7.5"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Box
        w={417.15}
        h={270.74}
        position="absolute"
        right="35"
        top="19"
        bgImage="url('/images/airplane.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
      />
    </Flex>
  )
};