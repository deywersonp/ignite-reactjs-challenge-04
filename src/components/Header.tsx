import { Link as ChakraLink, Flex, Img } from "@chakra-ui/react";
import Link from "next/link";
interface HeaderProps {
  isHome?: boolean;
};

export const Header = ({ isHome = false }: HeaderProps) => {
  return (
    <Flex
      as="header"
      w="100%"
      h={["50px", "25"]}
      mx="auto"
      position="relative"
      align="center"
      justify="center"
    >
      {!isHome && (
        <Link href="/" passHref>
          <ChakraLink
            as="a"
            position="absolute"
            left={["4", "4", "10", "35"]}
          >
            <Img
              src="/images/back.svg"
              alt="Back"
              width={["16px", "32px"]}
            />
          </ChakraLink>
        </Link>
      )}

      <Img
        src="/images/logo.png"
        alt="World Trip"
        width={["81px", "184px"]}
      />
    </Flex>
  )
};