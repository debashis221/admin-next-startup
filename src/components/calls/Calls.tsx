import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import CallCard from "./components/CallCard";
import "swiper/css";
import "swiper/css/effect-cards";
import CallModal from "./components/CallModal";
import { Heading, useDisclosure } from "@chakra-ui/react";

const Calls: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CallModal isOpen={isOpen} onClose={onClose} />
      <Heading size={"sm"} m={3}>
        Incoming Calls
      </Heading>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        style={{ padding: "0 15px", backgroundColor: "transparent" }}
      >
        <SwiperSlide style={{ boxShadow: "none", borderRadius: "30px" }}>
          <CallCard onOpen={onOpen} />
        </SwiperSlide>
        <SwiperSlide style={{ boxShadow: "none", borderRadius: "30px" }}>
          <CallCard onOpen={onOpen} />
        </SwiperSlide>
        <SwiperSlide style={{ boxShadow: "none", borderRadius: "30px" }}>
          <CallCard onOpen={onOpen} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Calls;
