import { motion } from "framer-motion";
import Bcards from "../components/Bcards";
import Cards from "../components/Cards";
import { Contact } from "../components/Contato";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <div className="w-full relative">
        <img
          src="/img/capa.png"
          alt="Ala Telecom Logo"
          className="max-w-5xl w-full rounded-lg"
        />
      </div>
      <h1
        className="
        text-4xl mt-10 leading-none font-semibold tracking-tight text-second-blue
        sm:text-6xl lg:text-7xl md:mt-24 font-poppins text-center
        "
      >
        A Melhor Internet de FIBRA da região PANTANEIRA.
      </h1>

      <div id="empresa" className="mx-1 my-8 text-justify">
        <p className="text-xl">
          Somos um provedor de internet ultra rápida com tecnologia 100% fibra
          óptica de ponta a ponta, modernas redes próprias e equipamentos de
          última geração.
        </p>
        <br /> <br />
        <p className="text-lg mb-4">
          Oferecemos as melhores soluções em conexão de alta velocidade para
          residências e empresas. Nosso foco sobrepõem a questão tecnológica e
          se volta para as possibilidades múltiplas que uma conexão à internet
          deve oferecer como diversão, estudo, negócios, entre outras e
          disponibilizar o meio para que as milhares de aplicações disponíveis
          possam ser utilizadas em diferentes formas de se relacionar online.
        </p>
        <Bcards />
      </div>

      <div id="planos" className="mx-1 my-8 text-justify">
        <h1
          className="
        text-4xl mt-10 leading-none font-semibold tracking-tight text-second-blue
        sm:text-6xl lg:text-7xl md:mt-24 font-poppins text-center
        "
        >
          Conheça nossos planos
        </h1>

        <Cards />
      </div>
      <Contact />
    </div>
  );
}
