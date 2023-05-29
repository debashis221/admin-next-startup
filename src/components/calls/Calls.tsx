import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import CallCard from "./components/CallCard";
import "swiper/css";
import "swiper/css/effect-cards";
import CallModal from "./components/CallModal";
import { useDisclosure } from "@chakra-ui/react";

const Calls: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CallModal isOpen={isOpen} onClose={onClose} />
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
        <SwiperSlide style={{ boxShadow: "none" }}>
          <CallCard onOpen={onOpen} />
        </SwiperSlide>
        <SwiperSlide style={{ boxShadow: "none" }}>
          <CallCard onOpen={onOpen} />
        </SwiperSlide>
        <SwiperSlide style={{ boxShadow: "none" }}>
          <CallCard onOpen={onOpen} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Calls;
