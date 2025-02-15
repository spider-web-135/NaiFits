import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Link } from 'react-router-dom'

import { Autoplay, EffectFade } from 'swiper/modules';

import { heroData } from '../../constants';

import styles, { design } from '../../styles';

import { BsArrowDownShort } from "react-icons/bs";


const Hero = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

  return (
    <>
      <Swiper
        effect={'fade'}
        effectOptions={{
            fadeEffect: {
              crossFade: true,
              speed: 500,
            },
        }}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-[calc(100vh-80px)] relative mt-20"
      >

        {heroData.map((item, index) => (
            <SwiperSlide key={index} className='h-[calc(100vh-80px)]'>
                <div className={`${styles.flexColCenter} h-full`} style={{ backgroundImage: `url(${item.image})` }}>
                    <h4 className={`${design.heroHead}`}>{item.header}</h4>
                    <div className="describe">
                        <p className={`${design.heroSubhead}`}>{item.text}</p>
                    </div>
                </div>
            </SwiperSlide>
        ))}

        <Link to='/shop' className={`flex items-center justify-center w-60 h-16 rounded-sm white center bottom-40 z-10`}>View Our Shop</Link>

        <a href="#trending" className={`${styles.flexEnd} w-10 h-20 explore rounded-full border-slate-50 center absolute bottom-10 z-10`}>
            <BsArrowDownShort className="text-4xl text-white ico float"/>
        </a>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent} className='text-white'></span>
        </div>
      </Swiper>
    </>
  )
}

export default Hero