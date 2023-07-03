import Contato from "@/components/Contato";
import Depoimentos from "@/components/Depoimentos";
import Main from "@/components/Main";
import Relatos from "@/components/Relatos";
import Sobre from "@/components/Sobre";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Main />
      <Sobre />

      <Relatos />
      <Depoimentos />
      <script>AOS.init();</script>
    </>
  );
}
