import ServiceCards from "@/components/cards";
const Cards01 = [
  {
    image: "/eventfullpackage1.jpg",
    title: "Full Package",
    description: "I provide complete Full Package service, overseeing every detail of your event from start to finish, including vendor coordination, time management, logistics, entertainment, and more, ensuring a smooth, stress-free, and memorable experience."},
  {
    image: "/eventfull.jpg",
    title: "Partial Package",
    description: "I offer a flexible Partial Package service, providing assistance with specific event aspects like vendor coordination or timeline management, while you handle the rest. This ensures professional support where needed, ensuring a smooth event.",
  },
  {
    image: "/eventtttt.jpg",
    title: "On Day Event",
    description:
      "I specialize in managing all the details on your event day, ensuring everything runs smoothly and stress-free. From coordinating timelines to handling logistics, I make sure your event unfolds perfectly, so you can relax and enjoy the moment.",
  },
];

const Cards02 = [
  {
    image: "/eventcorp.jpg",
    title: "Confrences",
    description: "I specialize in managing all aspects of conference planning, from venue selection to vendor coordination, logistics, and on-site execution. I ensure a smooth, professional event, allowing you to focus on content and networking."},
  {
    image: "/eventlaunch.png",
    title: "Launch Parties",
    description: "I specialize in organizing unforgettable launch parties, handling all details from venue selection to décor, entertainment, and vendor coordination, ensuring a seamless and exciting event that creates lasting impact.",
  },
  {
    image: "/eventaward.jpeg",
    title: "Award Ceremonies",
    description: "I specialize in organizing memorable award ceremonies, handling venue selection, event flow, guest coordination, entertainment, logistics, and designing personalized experiences, ensuring seamless transitions, impeccable service, and a prestigious atmosphere that honors, celebrates, and elevates your awardees in style."
  },
];
export default function Services() {
  return (
    <main className="mx-auto" >
      <h1 className="font-extralight text-[#c0a249]  text-xl text-center items-center mt-11">
        SERVICES
      </h1>
      <h1 className="text-5xl text-[#c0a249]  font-thin text-center items-center my-9">
        W E D D I N G S
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:space-y-7 md:space-y-0 md:space-x-7  ">
        {Cards01.map((Card01, index) => (
          <ServiceCards
            key={index}
            image={Card01.image}
            title={Card01.title}
            description={Card01.description}
          />
        ))}
      </div> 
<section>
    <div className="flex flex-col ">
        <h1 className="text-4xl font-thin text-center text-[#c0a249]  items-center mt-9">C O R P O R A T E</h1>
        <h1 className="text-4xl font-thin text-center text-[#c0a249]  items-center mb-7 mt-5">E V E N T S</h1>
    </div>
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mb-0 mb-9 space-y-7 md:space-y-0 md:space-x-7 ">
        {Cards02.map((Card02, index) => (
          <ServiceCards
            key={index}
            image={Card02.image}
            title={Card02.title}
            description={Card02.description}
          />
        ))}
      </div>
      </section>
    </main>
  );
}
