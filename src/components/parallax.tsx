"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';
const Parallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-75">
        <Image
        src={"/event.png"}
        layout="fill"
        objectFit="cover"
        alt=''
        />
      </div>
        <div
        className="relative z-10 flex mt-32 flex-col items-center justify-center text-white h-full "
        style={{
          transform: `translateY(${-scrollPosition * 1}px)`
        }}
      >  <h1 className="text-3xl md:text-6xl font font-thin mb-9">C r e a t i n g</h1>
        <h1 className="text-3xl md:text-6xl font font-thin mb-9">U n f o r g e t t a b l e</h1>
        <h1 className="text-3xl md:text-6xl font font-thin">M e m o r i e s</h1>
        <Link href={"/serviceselection"}><button className=' md:px-24 px-10 py-3 md:py-5 mt-7 bg-[#c0a249] border-2  hover:bg-white hover:text-[#c0a249] border-white  font text-xl md:text-2xl'>BOOK YOUR SLOT</button></Link>
        <FaArrowDown className='mt-2 md:h-20' size={37}/>
        </div>
    </div>
    



  );
};

export default Parallax;
