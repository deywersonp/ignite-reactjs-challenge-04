import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const Banner = () => {
  return (
    <Flex
      as="section"
      w="100%"
      h={[163, 335]}
      position="relative"
      align="center"
      bgImage="url('/images/night-sky-cover.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      px={["4", "35"]}
      mx="auto"
    >
      <Box>
        <Heading
          as="h1"
          fontSize={["xl", "3xl"]}
          color="heading.50"
          lineHeight={["30px", "13"]}
          mb={["8px", "20px"]}
        >
          5 Continentes, <br />infinitas possibilidades.
        </Heading>
        <Text
          maxWidth={524}
          color="info.100"
          lineHeight={["21px", "7.5"]}
          fontSize={["sm", "xl"]}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Box
        display={["none", "none", "block"]}
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