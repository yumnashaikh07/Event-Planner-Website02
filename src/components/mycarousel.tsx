import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function MyCarousel() {
  return (
    <main className="p-14 mx-auto md:p-0 bg-gray-100 flex flex-col justify-center items-center">
      <section className="md:mt-24">
        <h1 className="text-3xl md:text-5xl font-thin flex flex-col text-center mb-9 text-[#c0a249]">
          G A L L E R Y
        </h1>
        <Carousel className="my-3 md:p-16   md:mx-20">
          <CarouselContent>
            <CarouselItem>
              <Image
                src={"/eventcaro03.png"}
                width={1100}
                height={100}
                alt=""
                
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={"/eventcaro01.png"}
                width={1100}
                height={100}
                alt=""
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={"/eventcaro02.png"}
                width={1100}
                height={300}
                alt=""
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}
