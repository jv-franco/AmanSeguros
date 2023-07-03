import Image from "next/image";
import alana from "../images/alana.png";
import manuela from "../images/manuela.png";
import icon from "../images/amanlogo.png";
import { AOS } from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Relatos() {
  return (
    <>
      <div className="relatos" id="relatos">
        <div className="flex flex-col items-center  mx-0 md:mx-auto">
          <div className="relato " data-aos="fade-up">
            <Image className="relatoIMG" src={alana} width={400} height={400} />
            <div>
              <div className="relatoText">
                <h2 className="text-center ">Alana</h2>
                <div className="relatoP">
                  <p>
                    Vida de mãe provedora é matar um leão por dia! Me chamo
                    Alana e a minha energia vital de gladiadora do século XXI
                    provém dos meus 3 filhos, que me dão resiliência e foco para
                    garantir qualidade de vida àqueles de quem amo !
                  </p>
                  <p>
                    Foi com minha experiência de 16 anos na área de vendas, que
                    adquiri expertise nas relações cliente-empresa,
                    solidificando o relacionamento com a minha clientela,
                    consequência do meu vasto currículo que foi enriquecido
                    através dos inúmeros treinamentos e capacitações durante a
                    minha jornada, mais precisamente na @bluetec_telecom, onde
                    passei boa parte da atividade.
                  </p>
                  <p>
                    Não bastando, me aventurei no campo do Direito e recebi o
                    meu diploma de Bacharel ainda neste ano de 2020, realizando
                    mais um sonho Tenho certeza de que nada disso teria sido
                    realizado sem uma fé inabalável em Deus, que me tornou uma
                    mãe forte e uma vendedora ímpar. A minha missão na Aman é
                    prezar pelo vínculo fiel e priorizar o compromisso com você,
                    de maneira respeitosa, com seriedade, transparência e ética.
                  </p>
                </div>
                <Image
                  className="absolute opacity-10 right-0 bottom-1 rotate-12"
                  width={350}
                  src={icon}
                />
              </div>
            </div>
          </div>
          <div className="relato" data-aos="fade-up">
            <Image
              className="relatoIMG "
              src={manuela}
              width={400}
              height={400}
            />

            <div className="relatoText">
              <h2 className="text-center ">Manuela</h2>
              <div className="relatoP">
                <p>
                  Olá, eu sou Manuela. Profissional, mãe, mulher, filha, amiga,
                  verdadeira e segura, essas qualidades que carrego são o que me
                  fazem levar para nossos clientes toda uma rede de apoio, onde
                  a transparência nas prioridades individuais são minha base
                  para alcançar seus objetivos.
                </p>
                <p>
                  Formada em turismo, sendo Coordenadora de Reservas e
                  Recepcionista dos Hotéis Transamerica ( favor não contabilizar
                  minha idade ) e Blue Tree, Executiva de Contas da Claro e da
                  Vivo e hoje no segmento de Seguros, a comunicação e o
                  atendimento ao cliente são as ferramentas que mantenho com os
                  nossos clientes.
                </p>
                <p>
                  A fidelização de um relacionamento se baseia em verdade e
                  transparência, por isso alguns clientes de outros segmentos
                  escolheram mais uma vez estar conosco nessa nova rede de
                  apoio. Na Aman a prioridade é você.
                </p>
              </div>
              <Image
                className=" absolute opacity-10 right-0 bottom-0 rotate-12"
                src={icon}
                width={350}
              />
            </div>
          </div>
        </div>
      </div>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150 wave1"
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
    </>
  );
}
