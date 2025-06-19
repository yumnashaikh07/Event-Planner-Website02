import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa"
import { Button } from "./ui/button"
export default function Footer (){
    return(
        <main className=" bg-[#8d7632]  md:my-9 my-0 h-[390px] md:h-56 ">
            <section className="grid grid-cols-1 md:grid-cols-4  md:space-x-3 space-x-0 md:space-y-0 space-y-3 text-center font px-9   md:px-12 md:py-11">
<div className=" text-white md:mt-0 mt-3 flex-col" >
<h1>500 Terry Francine</h1>
<h2>Street San Francisco</h2>
<h3>CA 94158</h3>
</div>

<div className="  md:hidden flex  h-[1px]  bg-white"></div>

<div className=" text-white  flex-col">
<h1>Tel: +92 2134570307</h1>
<h1>info@mysite.com</h1>
<h1>Fax: 123-456-7890</h1>
</div>

<div className=" md:hidden flex  h-[1px]  bg-white"></div>

<div className=" text-white flex-col">
   <h5>&copy; {new Date().getFullYear()} by <em>Serenity Planners</em></h5>  
    <h5>Powered and secured by</h5>  
<a href="https://raysportfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
  <h5>RAYS Tech & Design</h5> 
</a>

</div>
<div className="flex flex-col">
<div className="text-white flex md:justify-between justify-center space-x-5 md:space-x-0 ">
    <a
        href="https://www.instagram.com/rays._.digital/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github">
        <FaInstagram size={21} />
    </a>
    <a
        href="https://www.instagram.com/rays._.digital/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github">
        <FaGithub size={21} />
    </a>
    <a
        href="https://www.instagram.com/rays._.digital/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn">
        <FaLinkedin size={21} />
    </a>
    <a
        href="https://www.instagram.com/rays._.digital/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pintrest">
        <FaPinterest size={21} />
    </a>
    </div>
    <Button className="text-xl md:mx-0 mx-9 md:py-5 px-4 py-7 text-white mt-3 md:mt-9 md:px-2 hover:text-[#c0a249] hover:bg-white  bg-[#c0a249]">BOOK NOW
    </Button>
</div>
    </section>
        </main>
    )
}