import Image from "next/image";
import amanPNG from "../images/amanlogo.png";
import { Link } from "react-scroll";
export default function Nav() {
  return (
    <header className="   py-4   w-full">
      <nav className=" flex items-center justify-between">
        <div className="flex items-center">
          <Link
            className="navLink"
            to="main"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Image src={amanPNG} width={100} height={100} />
          </Link>
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="sm:block hidden navLink"
          >
            <h1 className="text-xl ">Aman Seguros</h1>
          </Link>
        </div>
        <div className=" flex justify-between ">
          <Link
            className="mr-6 navLink"
            to="sobre"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Sobre
          </Link>

          <Link
            className="mr-6 navLink"
            to="relatos"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Relatos
          </Link>
          <Link
            className="mr-6 navLink"
            to="depoimentos"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Depoimentos
          </Link>
        </div>
      </nav>
    </header>
  );
}
