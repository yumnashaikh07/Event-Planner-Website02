import Link from "next/link";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetDescription,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "./ui/button";

 export default function HeaderSheet (){
    return(
        <main className=" md:hidden">
            <Sheet>
  <SheetTrigger><Menu className=" flex items-center justify-between mx-5 " size={24}/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="text-[#c0a249]  font-thin text-3xl flex justify-center">RAYS EVENTS</SheetTitle>
      <SheetDescription className="flex flex-col">
        <Button><Link href={"/serviceselection"} className="text-xl font text-white mt-9 px-16 hover:text-[#c0a249] hover:bg-white py-5 bg-[#c0a249]">
        Book Your Slot Now
        </Link>
        </Button>
      </SheetDescription>
    </SheetHeader>
    <ul className=" mt-24 text-white text-3xl space-y-3 ">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <div className=" border-t w-full bg-black"></div>
        <li><Link href="/services" className="hover:underline">Services</Link></li>
        <div className=" border-t w-full bg-black"></div>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        <div className=" border-t w-full bg-black"></div>
        <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
        <div className=" border-t w-full bg-black"></div> 
        <li><Link href="/about" className="hover:underline">About</Link></li>   
        </ul>
  </SheetContent>
</Sheet>

        </main>
    )
 }  