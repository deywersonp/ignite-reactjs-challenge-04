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
      h={[150, 500]}
      align={["center", "flex-end"]}
      justify={["center", "flex-start"]}
      bgImage={`url(${url})`}
      bgSize="cover"
      bgPosition="top center"
      bgRepeat="no-repeat"
      px={["4", "10", "35"]}
      mx="auto"
    >
      <Box>
        <Heading
          as="h1"
          maxWidth={424}
          color="heading.50"
          lineHeight="13"
          pb={["0", "59"]}
        >
          {title}
        </Heading>
      </Box>
    </Flex>
  )
};