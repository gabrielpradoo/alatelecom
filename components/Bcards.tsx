import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

interface BcardsProps {
  img: string;
  title: string;
  content: string;
}

export default function Bcards() {
  return (
    <AnimateSharedLayout>
      <motion.ul
        className="w-full flex flex-col bg-white p-5 rounded-3xl"
        layout
        initial={{ borderRadius: 25 }}
      >
        {items.map((item) => (
          <Item
            key={item.title}
            img={item.img}
            title={item.title}
            content={item.content}
          />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

const Item: React.FC<BcardsProps> = ({ img, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      className="bg-third-blue rounded-xl p-5 mb-5 overflow-hidden cursor-pointer"
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
    >
      <div className="flex items-center">
        <motion.img src={img} className="w-12 h-12" layout />
        <div className="w-full flex justify-between">
          <h1 className="ml-4 text-white font-semibold text-2xl">{title}</h1>
          {isOpen ? <img src="/img/up.svg" /> : <img src="/img/down.svg" />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="ml-14 text-white font-normal text-lg">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

const items = [
  {
    img: "/img/fiber.svg",
    title: "100% fibra óptica",
    content:
      "Nossa fibra ótica chega até sua casa, permitindo uma transmissão de qualidade",
  },
  {
    img: "/img/server.svg",
    title: "Ultra servidores",
    content: "Utilizamos o que existe de melhor e mais moderno em equipamentos",
  },
  {
    img: "/img/key.svg",
    title: "Rede segura",
    content:
      "Os dados que tráfegam em nossa rede são criptografados de ponta a ponta",
  },
  {
    img: "/img/headphone.svg",
    title: "Suporte especial",
    content: "Atendimento humanizado e sempre disposto a sanar suas dúvidas",
  },
];
