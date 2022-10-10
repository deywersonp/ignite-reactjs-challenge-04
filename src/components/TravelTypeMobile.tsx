import Image from "next/image";

import { Flex, Text } from "@chakra-ui/react";

interface TravelTypeMobileProps {
  title: string;
};

export const TravelTypeMobile = ({ title }: TravelTypeMobileProps) => {
  return (
    <Flex
      width="100%"
      direction="row"
      align="center"
      justify={"center"}
      gap={2}
    >
      <Image
        width="8px"
        height="8px"
        src="/images/yellow-ball.svg"
        alt="yellow circle"
      />
      <Text
        fontWeight="semibold"
        lineHeight="9"
      >
        {title}
      </Text>
    </Flex>
  )
};