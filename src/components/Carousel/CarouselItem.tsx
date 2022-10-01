import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface CarouselItemProps {
  title: string;
  description: string;
  href: string;
  src: string;
};

export const CarouselItem = ({ title, description, href, src }: CarouselItemProps) => {
  return (
    <Link href={href} passHref>
      <Flex
        as="a"
        w="100%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        bgImage={src}
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
          {title}
        </Heading>

        <Text
          color="info.100"
          fontWeight="bold"
          lineHeight="9"
        >
          {description}
        </Text>
      </Flex>
    </Link>
  )
};