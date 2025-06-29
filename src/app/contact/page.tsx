import Image from "next/image";
import ContactForm from "@/components/contactform";
import { FaArrowDown } from "react-icons/fa";
export default function Contact() {
  return (
    <main className="mx-auto">
<section className="  grid grid-cols-1 md:grid-cols-2 md:px-28 ">
        <div className="bg-[#6a6044] p-5 md:w-96">
          <div className="flex flex-col text-white font font-extralight text-3xl  justify-center items-center">
            <Image src={"/RAYS (8).png"} width={300} height={300} alt="" />
            <h3 className="mb-3 ">CONTACT HERE</h3><FaArrowDown/>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
</section>

<section className="  grid grid-cols-1 md:grid-cols-2 md:p-[137px]">
    <div className="md:w-[500px] md:h-[527px] md:p-9 p-10 md:mt-0 mt-5 flex flex-col text-[#6a6044] font text-center bg-[#d7d5d5]">
          <h1 className="text-5xl">S E R E N I T Y</h1>
          <h1 className="text-3xl">P L A N N E R S</h1>
         <p className="text-xl mt-14">RAYS EVENTS is your go-to event planning agency, turning every celebration into a masterpiece. We provide customized solutions, ensuring flawless execution and unforgettable experiences for any occasion, big or small.</p>
    </div>
    <div className="mx-auto">
          <Image
            src={"/event11.png"}
            width={485}
            height={600}
            alt=""
            className="mx-auto"/>
    </div>
</section>
    </main>
  );
}
