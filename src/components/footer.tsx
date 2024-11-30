import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa"
export default function Footer (){
    return(
        <main className=" flex justify-center  bg-[#8d7632]  mx-auto p-5 md:mx-9 md:my-9 h-[450px] md:h-72 ">
            <section className="md:flex md:justify-between font  md:p-11">
<div className=" text-white  md:mx-10  flex-col" >
<h1>500 Terry Francine</h1>
<h2>Street San Francisco</h2>
<h3>CA 94158</h3>
</div>

<div className=" md:h-[100px] md:w-[0.25px]  bg-white"></div>

<div className=" text-white my-5 md:my-0  md:mx-10  flex-col">
<h1>Tel: +92 3132570307</h1>
<h1>info@mysite.com</h1>
<h1>Fax: 123-456-7890</h1>
</div>

<div className=" md:h-[100px]  md:w-[0.25px]  bg-white"></div>

<div className=" text-white my-5 md:my-0  md:mx-10 flex-col">
    <h1>©2024 by RAYS Events.</h1>
    <h1>Powered and secured by </h1>
    <h1><Link href={"PERSONAL PORTFOLIO LINK"} className="hover:underline font-thin ">RAYS Tech & Design</Link></h1>
</div>
<div className="flex flex-col  ">
<div className="text-white flex md:justify-between my-3  space-x-11 md:space-x-5">
    <a
        href="https://github.com/yumnashaikh07"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github">
        <FaInstagram size={21} />
    </a>
    <a
        href="https://github.com/yumnashaikh07"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github">
        <FaGithub size={21} />
    </a>
    <a
        href="https://www.linkedin.com/in/yumna-shaikh-b90191337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn">
        <FaLinkedin size={21} />
    </a>
    <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pintrest">
        <FaPinterest size={21} />
    </a>
    </div>
    <Link href={"/serviceselection"} className="text-xl  px-12 py-5  text-white mt-3 md:mt-9 md:px-20 hover:text-[#c0a249] hover:bg-white md:py-5 bg-[#c0a249]">BOOK NOW</Link>
</div>
    </section>
        </main>
    )
}