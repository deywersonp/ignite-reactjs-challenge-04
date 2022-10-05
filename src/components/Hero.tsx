import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface HeroProps {
  url: string;
  title: string;
};

export const Hero = ({ url, title }: HeroProps) => {
  return (
    <Flex
      as="section"
      w="100%"
      h={500}
      align="flex-end"
      bgImage={`url(${url})`}
      bgSize="cover"
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
          pb="59"
        >
          {title}
        </Heading>
      </Box>
    </Flex>
  )
};