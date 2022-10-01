import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export const CarouselItem = () => {
  return (
    <Link href="/" passHref>
      <Flex
        as="a"
        w="100%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        bgImage="url('/images/europe-cover-1.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Heading
          as="h3"
          color="heading.50"
          fontSize="5xl"
          fontWeight="bold"
          lineHeight="18"
        >
          Europa
        </Heading>

        <Text
          color="info.100"
          fontWeight="bold"
          lineHeight="9"
        >
          O continente mais antigo.
        </Text>
      </Flex>
    </Link>
  )
};