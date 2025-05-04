"use client"
import { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { containerStyle } from '@/utils/container-style';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
   'bg1.jpg',
   'bg2.jpg',
   'bg3.jpg'
];

export function Hero() {
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true,
      });
   }, []);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex(prev => (prev + 1) % images.length);
      }, 6000);

      return () => clearInterval(interval);
   }, []);

   return (
      <div id='hero' className="relative w-full h-screen overflow-hidden text-white">
         {images.map((src, index) => (
            <div key={index}
               className={`absolute flex min-w-full min-h-full bg-center bg-cover transition duration-1000
                  ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
               style={{ backgroundImage: `url(arq/${src})` }}
            />
         ))}
         <div className="absolute z-30 top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-900/50">
            <div className={containerStyle + " w-full max-w-5xl text-start"}>
               <h1 data-aos="zoom-in" className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-4">Projetando espaços com propósito</h1>
               <h2 data-aos="zoom-in" className="text-base sm:text-lg mt-5 mb-10">
                  Bem-vindo à Alvenar Architecture, onde criatividade, precisão e sustentabilidade se unem para
                  projetar espaços excepcionais que inspiram, perduram e redefinem o futuro da arquitetura.
               </h2>
               <Button 
                  label="Contato"
                  size={1}
                  link="#"
                  icon={<FontAwesomeIcon icon={faArrowRight} />}
               />
               <div className='absolute right-10 bottom-10 sm:right-20 xl:right-32 flex items-center gap-4'>
                  <p>Siga-nos</p>
                  <div className='flex gap-2'>
                     <FontAwesomeIcon icon={faFacebook} size='1x' className='p-3 border border-white/50 rounded-full hover:text-[var(--primary)] hover:bg-white transition cursor-pointer' />
                     <FontAwesomeIcon icon={faInstagram} size='1x' className='p-3 border border-white/50 rounded-full hover:text-[var(--primary)] hover:bg-white transition cursor-pointer' />
                     <FontAwesomeIcon icon={faTiktok} size='1x' className='p-3 border border-white/50 rounded-full hover:text-[var(--primary)] hover:bg-white transition cursor-pointer' />
                     <FontAwesomeIcon icon={faX} size='1x' className='p-3 border border-white/50 rounded-full hover:text-[var(--primary)] hover:bg-white transition cursor-pointer' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
