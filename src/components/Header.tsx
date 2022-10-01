import { Box, Link as ChakraLink, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from 'next/image';
import logoImg from '/public/images/logo.png';
import backButtonImg from '/public/images/back.svg';

interface HeaderProps {
  isHome?: boolean;
};

export const Header = ({ isHome = false }: HeaderProps) => {
  return (
    <Flex
      as="header"
      w="100%"
      h="25"
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
            left="35"
          >
            <Image
              width={32}
              height={32}
              src={backButtonImg}
              alt="Back"
            />
          </ChakraLink>
        </Link>
      )}

      <Image
        src={logoImg}
        alt="World Trip"
      />
    </Flex>
  )
};