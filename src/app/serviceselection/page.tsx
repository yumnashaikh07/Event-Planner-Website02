import Head from "next/head"
import ServiceselectionCards from "@/components/serviceselectioncard"
import Link from "next/link"
const services = [
    {image:"/eventfullpackage1.jpg", title:"Full Package" , rate:"300"},
    {image:"/eventfull.jpg",title:"Partial Package" , rate:"150"},
    {image:"/eventtttt.jpg", title:"On Day Event" , rate:"250"},
    {image:"/eventaward.jpeg", title:"Award Ceremonies" , rate:"700"},
    {image:"/eventcorp.jpg", title:"Confrences", rate:"500"},
    {image: "/eventlaunch.png", title:"Launch Parties" , rate:"700"},
    {image:"/event11.png", title:"Private Event" , rate:"200"}
]
export default function ServiceSelection(){
    return(
    <>
        <Head><title>Book Event Planning Service</title>
        <meta name="description" content="Select an event planning package that suits your needs." />
     </Head>
       <main className="p-4 md:p-20">
       <h1 className="text-5xl text-[#c0a249] font-thin text-center items-center my-9">
        SELECT  YOUR  SERVICE 
      </h1>
        <div className="mt-4 space-y-3">
            {services.map((service ,index)=>(
            <div key={index} >
            <ServiceselectionCards
            key={index} 
            image={service.image}
            title={service.title}
            rate={`$${service.rate}/hour`}
          />
          <Link href={"/datetimeselection"}><button 
                className="bg-[#c0a249] text-white items-center flex justify-center mx-auto mt-3  px-7 py-3 rounded-lg hover:bg-white border-2 border-[#c0a249] hover:text-[#c0a249] "
                >
                    BOOK
                </button></Link>
        </div>
            ))}
        </div>
       </main>
    </>
    )
}





