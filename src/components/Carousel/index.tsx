import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CarouselItem } from "./CarouselItem";

export const Carousel = () => {
  return (
    <Box
      width="100%"
      maxWidth={1240}
      mx="auto"
      mb="20px"
    >
      <Flex
        align="center"
        justify="center"
        mb="13"
      >
        <Heading
          as="h2"
          textAlign="center"
          lineHeight="13"
          fontWeight="medium"
        >
          Vamos nessa?
          <Text>
            Então escolha seu continente
          </Text>
        </Heading>
      </Flex>

      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination,
          Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
};