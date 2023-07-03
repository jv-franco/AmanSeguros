import Image from "next/image";
import sobre from "../images/sobreAman.png";
import Zap from "../images/whatsapp.svg";
import Insta from "../images/instagram.svg";
export default function Sobre() {
  return (
    <>
      <section id="sobre" className="sobre  w-full  py-10">
        <div
          data-aos="fade-up"
          className="md:flex block lg:items-start items-center  flex-col lg:flex-row "
        >
          <div className=" h-full w-full  md:mx-10 mx-auto">
            <Image className="sobre_img" src={sobre} width={700} height={700} />
          </div>
          <div className="flex flex-col h-auto  items-center md:items-start justify-center">
            <div className=" cardSobre ">
              <h1 className="text-4xl font-bold mb-6">SOBRE NÓS </h1>
              <p className="text-lg text-justify pr-0    ">
                Nós somos a Aman seguros (
                <span className=" font-medium">CNPJ: 49045220000120</span>) uma
                empresa fundada em 2021 por duas sócias (Manuela e Alana). Mesmo
                sendo nova no mercado nosso negocio conseguiu nesses 2 anos
                trazer uma forma diferençiada de atendimento e relacionamento
                com o cliente o auxiliando a econtrar o melhor e mais economico
                plano de saude para uso empresarial, pessoal ou familiar sempre
                prezando por um serviço que lhe permita se consultar em bons
                medicos particulares e fazer o uso da melhor redes de hospitais
                disponiveis da sua cidade. Nossa cede fisica se econtra em
                Salvador-BA porem trabalhamos com todo o Brasil.
              </p>
            </div>

            <div className="contato w-2/3 flex rounded-xl justify-between   ">
              <div className="contatoCard ">
                <Image className="contatoImg" width={80} src={Insta} />
                <h2 className="w-full text-center">@amanAlgumaCoisa</h2>
              </div>
              <div className="contatoCard">
                <Image className="contatoImg" width={80} src={Zap} />
                <h2 className="w-full text-center break-normal">
                  34 99999-0000
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        className="wave wave2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#eeeded "
          fillOpacity="1"
          d="M0,224L40,208C80,192,160,160,240,149.3C320,139,400,149,480,170.7C560,192,640,224,720,213.3C800,203,880,149,960,117.3C1040,85,1120,75,1200,85.3C1280,96,1360,128,1400,144L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
