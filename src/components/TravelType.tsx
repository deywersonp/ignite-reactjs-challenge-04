import Image, { StaticImageData } from "next/image";

import { Flex, Text } from "@chakra-ui/react";

interface TravelTypeProps {
  title: string;
  src: string | StaticImageData;
  alt: string;
};

export const TravelType = ({ title, src, alt }: TravelTypeProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
    >
      <Image
        src={src}
        width={85}
        height={85}
        alt={alt}
      />
      <Text
        fontWeight="semibold"
        lineHeight="9"
        mt="6"
      >
        {title}
      </Text>
    </Flex>
  )
};