import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import img2048 from "../../assets/projects/2048.png";
import imgDoodleDo from "../../assets/projects/DoodleDo.png";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="container"></div>

      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect="fade"
        speed={800}
        slidesPerView={1}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img2048} alt="2048" className="carousel-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgDoodleDo} alt="DoodleDo" className="carousel-image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
