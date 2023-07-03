import Image from "next/image";
import wave from "../images/wave.svg";
import { Button } from "./Button";
export default function Main() {
  return (
    <div className="fundo">
      <div className="main" id="main">
        <h1
          data-aos="fade-left"
          className=" md:text-4xl text-2xl font-bold mb-4"
        >
          Você está prestes a mudar a vida da sua família !
        </h1>
        <h2 data-aos="fade-left" className=" md:text-xl text-lg mb-4">
          Assista o vídeo para mais detalhes.
        </h2>
        <div className="div_video " data-aos="fade-left">
          <div className="container_video">
            <iframe
              className="responsive-iframe"
              frameborder="0"
              allowFullScreen="1"
              title="CUIDE DO SEU PET E TRANSFORME A VIDA DELE"
              src="https://www.youtube.com/embed/QhEI-YXGrzY?controls=1&loop=1 "
            ></iframe>
          </div>
        </div>

        <Button props={"Clique aqui "} />
      </div>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150 wave wave1"
      >
        <defs>
          <linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="5%" stop-color="#33c5ff96"></stop>
            <stop offset="95%" stop-color="#33c5ff96"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 69.67502576434214,234.28100309172106 139.35005152868428,268.5620061834421 199,257 C 258.6499484713157,245.4379938165579 308.2748196496049,188.0329783579526 382,153 C 455.7251803503951,117.9670216420474 553.5506698728959,105.30608038474747 633,141 C 712.4493301271041,176.69391961525253 773.5225008588113,260.7427001030574 840,260 C 906.4774991411887,259.2572998969426 978.3593266918585,173.723119203023 1039,158 C 1099.6406733081415,142.276880796977 1149.0401923737547,196.36482308485057 1214,215 C 1278.9598076262453,233.63517691514943 1359.4799038131227,216.81758845757471 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    </div>
  );
}
