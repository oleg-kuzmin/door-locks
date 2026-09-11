import React, { createContext, useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperClass, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Context {
  onNext: VoidFunction;
  onPrev: VoidFunction;
  onSwiper: (swiper: SwiperClass) => void;
  isBeginning: boolean;
  isEnd: boolean;
}

const SliderContext = createContext<Context>({} as Context);

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: Readonly<ContainerProps>) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(true);

  function onNext() {
    if (swiperRef) swiperRef.current?.slideNext();
  }

  function onPrev() {
    if (swiperRef) swiperRef.current?.slidePrev();
  }

  function onSwiper(swiper: SwiperClass) {
    swiperRef.current = swiper;
    setIsBeginning(swiperRef.current.isBeginning);
    setIsEnd(swiperRef.current.isEnd);
  }

  return (
    <SliderContext value={{ onNext, onPrev, onSwiper, isBeginning, isEnd }}>
      {children}
    </SliderContext>
  );
}

interface SliderProps {
  slides: React.ReactNode[];
  swiperConfig: SwiperProps;
  className?: string;
  classSlide?: string;
}

export function Slider({ slides, swiperConfig, className, classSlide }: Readonly<SliderProps>) {
  const { onSwiper } = useContext(SliderContext);

  return (
    <Swiper className={className} onSwiper={onSwiper} onSlideChange={onSwiper} {...swiperConfig}>
      {slides.map((slide, index) => (
        <SwiperSlide className={classSlide} key={index}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

interface ButtonProps {
  className: string;
}

function ButtonNext({ className }: Readonly<ButtonProps>) {
  const { onNext, isEnd } = useContext(SliderContext);
  return <button className={className} onClick={onNext} disabled={isEnd}></button>;
}

function ButtonPrev({ className }: Readonly<ButtonProps>) {
  const { onPrev, isBeginning } = useContext(SliderContext);
  return <button className={className} onClick={onPrev} disabled={isBeginning}></button>;
}

Slider.Container = Container;
Slider.ButtonNext = ButtonNext;
Slider.ButtonPrev = ButtonPrev;
