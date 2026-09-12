import React, { createContext, useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperClass, SwiperProps } from 'swiper/react';
import cn from 'classnames';
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
  length: number;
  activeIndex: number;
  swiperConfig: SwiperProps;
}

const SliderContext = createContext<Context>({} as Context);

interface ContainerProps {
  swiperConfig: SwiperProps;
  children: React.ReactNode;
}

function Container({ swiperConfig, children }: Readonly<ContainerProps>) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(true);
  const [length, setLength] = useState(0);
  const [activeIndex, setActiveIndex] = useState(swiperConfig.initialSlide || 0);

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
    setLength(swiperRef.current.slides.length);
    setActiveIndex(swiperRef.current.realIndex);
  }

  return (
    <SliderContext
      value={{ onNext, onPrev, onSwiper, isBeginning, isEnd, length, activeIndex, swiperConfig }}>
      {children}
    </SliderContext>
  );
}

interface SliderProps {
  slides: React.ReactNode[];
  className?: string;
  classSlide?: string;
}

export function Slider({ slides, className, classSlide }: Readonly<SliderProps>) {
  const { swiperConfig, onSwiper } = useContext(SliderContext);

  return (
    <Swiper
      className={className}
      onSwiper={onSwiper}
      onSlideChange={onSwiper}
      style={{ width: '100%' }}
      {...swiperConfig}>
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
  const { onNext, isEnd, swiperConfig } = useContext(SliderContext);
  return <button className={className} onClick={onNext} disabled={!swiperConfig.loop && isEnd} />;
}

function ButtonPrev({ className }: Readonly<ButtonProps>) {
  const { onPrev, isBeginning, swiperConfig } = useContext(SliderContext);
  return (
    <button className={className} onClick={onPrev} disabled={!swiperConfig.loop && isBeginning} />
  );
}

interface PaginationProps {
  className: string;
  classBullet: string;
  classBulletActive: string;
}

function Pagination({ className, classBullet, classBulletActive }: Readonly<PaginationProps>) {
  const { length, activeIndex } = useContext(SliderContext);

  return (
    <div className={className}>
      {Array.from({ length: length }, (_, index) => (
        <div
          className={cn(classBullet, { [classBulletActive]: index === activeIndex })}
          key={index}
        />
      ))}
    </div>
  );
}

Slider.Container = Container;
Slider.ButtonNext = ButtonNext;
Slider.ButtonPrev = ButtonPrev;
Slider.Pagination = Pagination;
