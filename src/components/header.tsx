import Image from "next/image";
import Link from "next/link";
import HeaderSheet from "./headersheet";
export default function Header() {
  return (
    <main className="bg-white shadow-lg h-20 md:h-28 mx-auto">
      <section className=" flex justify-between items-center text-[#c0a249]">
        <div className="rounded-lg">
          <Image
            src={"/RAYS (7).png"}
            className="ml-5  h-[80px] w-[80px] md:h-[110px] md:w-[110px]  "
            width={110}
            height={110}
            alt="logo"
          />
        </div>
        <div className="text-xl md:text-3xl font-extralight   md:ml-60">
          RAYS EVENTS
        </div>
        <nav className="md:flex md:justify-between md:items-center hidden flex-items-end justify-end ">
          <ul className="flex space-x-9 text-lg  font-semibold mr-11 ">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/gallery" className="hover:underline">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <HeaderSheet />
      </section>
    </main>
  );
}
