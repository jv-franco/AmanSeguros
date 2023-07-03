import Image from "next/image";
import teezer from "../images/teezer.png";
import dep1 from "../images/dep1.png";
import dep2 from "../images/dep2.jpeg";
import dep3 from "../images/dep3.png";
import { useState } from "react";
export default function Depoimentos() {
  return (
    <div className="depoimentos" id="depoimentos">
      <h1 className="text-center text-3xl mb-10 font-bold ">Depoimentos</h1>

      <div
        data-aos="fade-top"
        className=" flex md:px-10 px-3 items-center justify-center flex-wrap w-full  h-auto gap-4 "
      >
        <div className="depoimento">
          <div className="mb-5">
            <h2 className="font-bold text-2xl">Nicolas Barros</h2>

            <div>
              <h3>
                Cliente Aman <span className="font-bold">7 meses</span>.
              </h3>
            </div>
          </div>
          <div className="imageContainer ">
            <div class="bubble bubble-bottom-left">
              <Image src={dep1} width={400} />
            </div>
          </div>
        </div>
        <div className="depoimento">
          <div className="mb-5">
            <h2 className="font-bold text-2xl">Eduardo Melo</h2>

            <div>
              <h3>
                Cliente Aman <span className="font-bold">12 meses</span>.
              </h3>
            </div>
          </div>
          <div className=" ">
            <div className="imageContainer ">
              <div class="bubble bubble-bottom-left">
                <Image src={dep2} width={400} />
              </div>
            </div>
          </div>
        </div>
        <div className="depoimento">
          <div className="mb-5">
            <h2 className="font-bold text-2xl">Ana Luísa</h2>

            <div>
              <h3>
                Cliente Aman <span className="font-bold">4 meses</span>.
              </h3>
            </div>
          </div>
          <div className="imageContainer ">
            <div class="bubble bubble-bottom-left">
              <Image src={dep3} width={400} />
            </div>
          </div>
        </div>
        <div className="depoimento">
          <div className="mb-5">
            <h2 className="font-bold text-2xl">Arnaldo Sacomani</h2>

            <div>
              <h3>Youtuber Destaque</h3>
              <h3>
                Cliente Aman <span className="font-bold">6 meses</span>.
              </h3>
            </div>
          </div>
          <div className="imageContainer ">
            <div class="bubble bubble-bottom-left">
              <Image src={dep1} width={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
