import Image from "next/image"
export default function About (){
    return (
    <main className=" mx-auto ">
        <div className="flex  justify-center text-[#c0a249] font-thin mt-20 text-center items-center text-5xl">
        <h1>About us</h1>
        </div>
    <section className="grid  grid-cols-1 md:grid-cols-2 mt-5 md:mt-14 mb-20  md:mx-28 md:space-x-11">
        <div>
            <Image
            src={"/eventabout1.png"}
            width={500}
            height={900}
            alt="picture"
            className="mx-auto "
            />
        </div>
        <div className=" bg-[#efeded] md:w-[500px] md:h-[630px] p-28 md:p-20  text-black font flex flex-col items-center justify-center  ">
        <h1 className=" text-8xl font">&quot;</h1>
           <h1 className="text-5xl">Making Dreams</h1>
           <h1 className=" my-5 text-5xl"> Come True</h1> 
           <p>As Founder & CEO, I am passionate about creating unforgettable experiences by transforming your vision into reality with attention to detail and expert planning.</p>
           <h3 className="text-[#c0a249] mt-16 text-2xl font-extralight">ABC</h3>
           <h3 className="text-[#c0a249] font-extralight">Founder & CEO</h3>
           </div>
    </section>


    <div className="border-t  bg-[#d8d7d7] "></div>


    <section className="grid  grid-cols-1 md:grid-cols-2  mx-auto  mt-24 md:mx-28 ">
    <div className=" bg-[#efeded]  md:w-[500px]  md:h-[590px] p-28 md:p-20  text-black font flex flex-col items-center justify-center  ">
        <h1 className=" text-8xl font">&quot;</h1>
           <h1 className="text-5xl">Turning Vision </h1>
           <h1 className=" my-5 text-5xl"> into Reality</h1> 
           <p>As CTO and Co-Founder, I use technology to ensure flawless event execution, bringing your vision to life with precision and creativity</p>
           <h3 className="text-[#c0a249] mt-16 text-2xl font-extralight">XYZ</h3>
           <h3 className="text-[#c0a249] font-extralight">Co-Founder & CTO</h3>
        </div>
        <div>
            <Image
            src={"/eventabout.png"}
            width={500}
            height={900}
            alt="picture"
            className=" mx-auto md:mb-0 mb-5"
            />
        </div>
       
    </section>
    </main>
    )
} 