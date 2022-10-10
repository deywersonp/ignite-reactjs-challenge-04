import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { CarouselItem } from "./CarouselItem";
import { CONTINENTS } from "./data";

export const Carousel = () => {
  return (
    <Box
      width="100%"
      maxWidth={1240}
      mx="auto"
    >
      <Flex
        align="center"
        justify="center"
        mb={["5", "13"]}
      >
        <Heading
          as="h2"
          textAlign="center"
          lineHeight={["5", "13"]}
          fontWeight="medium"
          fontSize={["xl", "3xl"]}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
      </Flex>

      <Box
        w="100%"
        h={["250px", "450px"]}
      >
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination,
            Navigation]}
          className="mySwiper"
        >
          {
            CONTINENTS.map(continent => (
              <SwiperSlide key={continent.title}>
                <CarouselItem
                  title={continent.title}
                  description={continent.description}
                  href={continent.href}
                  src={continent.src}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Box>
    </Box>
  )
};