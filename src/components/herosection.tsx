import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
export default function HeroSection() {
  return (
<main>
<section className="grid grid-cols-1 md:grid-cols-2 md:px-32 mx-auto  ">
        <div className="bg-[#6a6044] md:w-[400px] md:h-[590px] p-9 md:my-28  text-black font flex flex-col items-center justify-center ">
          <h1 className="text-5xl text-[#6a6044] bg-[#d1cccc]">SERVICES</h1>
            <Image 
            src={"/RAYS (8).png"}
            width={500}
            height={500}
            alt=""
            />
            <h3 className="text-white md:text-2xl text-xl font">Turn your Dreams into Reality</h3>
            <Link href={"/contact"}><Button className='md:px-24 px-20 py-9 md:py-7 md:mt-7 bg-[#c0a249] text-white  hover:bg-white hover:text-[#c0a249] font text-2xl'>For Queries</Button></Link>
           
        </div>
        <div className="  mx-auto  md:mt-14 md:mb-16 text-black font flex flex-col items-center justify-center  ">
        <Image
        src={"/eventhome.jpg"}
        width={549}
        height={599}
        alt=""
        className="md:w-[549px] mx-auto md:h-[599px] "
        />
        </div>
        </section>

        <section className="md:mt-3 mt-9">
          <h1 className=" text-3xl md:text-5xl font-thin flex flex-col ml-16 md:ml-0 md:text-center md:mb-9 text-[#c0a249]" >T E S T I M O N A L S</h1>
        <Carousel className="md:p-5 my-3 mx-28 md:mx-48">
  <CarouselContent >
    
    <CarouselItem>
    <h1 className="md:text-9xl text-5xl font-serif  ml-[83px] mt-3 md:mt-0 md:ml-[390px]">&quot;</h1>
    <div  className="flex flex-col text-center items-center font">
      <h1 className="md:text-5xl text-3xl md:my-5">Exceptional service! </h1>
      <h1 className="md:text-5xl text-3xl">Made our event unforgettable.</h1>
      <h1 className="md:text-5xl text-3xl md:my-5">Highly recommend them!</h1>
      <h3 className="md:text-2xl text-xl  text-[#c0a249] my-9">Sarah Miller</h3> 
    </div>  
    </CarouselItem> 


    <CarouselItem> <h1 className="md:text-9xl text-5xl font-serif  ml-[83px] mt-3 md:mt-0 md:ml-[390px]">&quot;</h1>
    <div  className="flex flex-col text-center items-center font">
      <h1 className="md:text-5xl text-3xl md:my-5 ">Amazing attention to detail!</h1>
      <h1 className="md:text-5xl text-3xl  ">They turned our vision into reality </h1>
      <h1 className="md:text-5xl text-3xl md:my-5 ">perfectly</h1>
      <h3 className="md:text-2xl text-xl text-[#c0a249] my-9">James Thompson</h3>
    </div>
    </CarouselItem>


    <CarouselItem>  <h1 className="md:text-9xl text-5xl font-serif  ml-[83px] mt-3 md:mt-0 md:ml-[390px]">&quot;</h1>
    <div  className="flex flex-col text-center items-center font">
      <h1 className="md:text-5xl text-3xl md:my-5 ">Professional, creative, and organized. </h1>
      <h1 className="md:text-5xl text-3xl">Truly exceeded our expectations</h1>
      <h1 className="md:text-5xl text-3xl md:my-5">for the event</h1>
      <h3 className="md:text-2xl text-xl  text-[#c0a249] my-9"> Emily Johnson</h3> 
    </div></CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="hover:bg-[#c0a249] hover:text-white md:px-9 px-3 py-4 md:py-7 rounded-full  " />
  <CarouselNext className="hover:bg-[#c0a249] hover:text-white  md:px-9 px-3 py-4 md:py-7 rounded-full " />
</Carousel>

        </section>
</main>
  
);}
    
  

