import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



interface ServiceCardsProps {
    image: string ,
    title: string,
    description: string

}
export default function ServiceCards({image , title , description}: ServiceCardsProps) {
  return (
    <main >
      <Card className="md:w-[370px] mx-auto">
        <CardHeader>
            <Image
            src={image}
            alt={title} 
            width={300}
            height={300}
            className="rounded-lg mx-auto md:ml-0"/>
          <CardTitle className=" text-2xl  text-[#484845] font-semibold mb-11 flex items-center justify-center">{title}</CardTitle>
          <CardDescription className=" text-xl text-[#484845] font-extralight flex items-center justify-center">{description}</CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
