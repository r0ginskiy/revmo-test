"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

import ReviewCard from "./ReviewCard/ReviewCard";
import styles from "./Reviews.module.css";
import { useMediaQuery } from "@mantine/hooks";

type Props = {
  slider: {
    title: string;
    description: string;
    data: {
      id: number;
      photo: string;
      name: string;
      date: string;
      text: string;
    }[];
  };
};

export default function Reviews({ slider }: Props) {
  const isSmallMobile = useMediaQuery("(max-width: 376px)");
  return (
    <div className={styles.reviews}>
      <div className={styles.header}>
        <h1>{slider.title}</h1>
        <h2>{slider.description}</h2>
      </div>

      <div className={styles.blurCircle}></div>

      <Swiper
        modules={[Scrollbar]}
        spaceBetween={16}
        slidesPerView="auto"
        grabCursor={true}
        freeMode={true}
        slidesOffsetBefore={0}
        slidesOffsetAfter={0}
        scrollbar={{ draggable: true }}
        className={styles.slider}
      >
        {slider.data.map((review) => (
          <SwiperSlide
            key={review.id}
            style={!isSmallMobile ? { width: "auto" } : undefined}
          >
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
