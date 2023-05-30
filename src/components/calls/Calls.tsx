import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import CallCard from "./components/CallCard";
import "swiper/css";
import "swiper/css/effect-cards";
import { Heading, Stack } from "@chakra-ui/react";

const Calls: React.FC = () => {
  return (
    <Stack>
      <Heading size={"sm"} m={3}>
        Incoming Calls
      </Heading>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        style={{
          backgroundColor: "transparent",
          marginRight: "15px",
        }}
      >
        <SwiperSlide style={{ boxShadow: "none", borderRadius: "30px" }}>
          <CallCard />
        </SwiperSlide>
        <SwiperSlide style={{ boxShadow: "none", borderRadius: "30px" }}>
          <CallCard />
        </SwiperSlide>
        <SwiperSlide style={{ boxShadow: "none", borderRadius: "30px" }}>
          <CallCard />
        </SwiperSlide>
      </Swiper>
    </Stack>
  );
};

export default Calls;
