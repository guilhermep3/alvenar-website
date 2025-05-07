"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectCube, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { ratingData } from '@/data/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import { useEffect, useState } from 'react';

export default function Slide() {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth < 768);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return (
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]} effect="cube"
         slidesPerView={1}
         pagination={{ clickable: true }}
         navigation={!isMobile ? true : false}
         spaceBetween={0}
         className='max-w-5xl mx-auto'
      >
         {ratingData.map((item) => (
            <SwiperSlide key={item.id} >
               <div className="max-w-3xl mx-auto text-black bg-white p-4 sm:p-6 mb-8 sm:mb-10 shadow-lg rounded-xl">
                  <p className="text-base sm:text-lg">"{item.assessment}"</p>
                  <div className="flex gap-3 sm:gap-6 mt-10">
                     <img src={`./persons/${item.img}`}
                        alt={item.img}
                        className='size-14 sm:size-20 rounded-full object-cover'
                     />
                     <div className="flex flex-col gap-2">
                        <div className="flex">
                           <div className="flex items-center">
                              <p className="text-xl sm:text-2xl font-bold text-orange-950 mr-4">{item.name}</p>
                              <FontAwesomeIcon icon={faStar} size='lg' className='text-yellow-500 mr-1' />
                              <span className='text-xl font-bold'>{item.stars.toFixed(1)}</span>
                           </div>
                        </div>
                        <div className="text-zinc-800">{item.profession}</div>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};
