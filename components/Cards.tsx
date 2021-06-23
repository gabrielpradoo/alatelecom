import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  href: string;
  download: string;
  layoutId: string;
}

const items = [
  {
    href: "/plano10",
    download: "10",
    layoutId: "plano10Id",
  },
  {
    href: "/plano20",
    download: "20",
    layoutId: "plano20Id",
  },
  {
    href: "/plano30",
    download: "30",
    layoutId: "plano30Id",
  },
];

const Card: React.FC<CardProps> = ({ href, download, layoutId }) => {
  return (
    <Link href={href}>
      <motion.div
        className="relative h-80 md:h-80 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition
        bg-gradient-to-br from-gray-200 via-white shadow-lg text-third-blue
        flex flex-col items-center font-poppins justify-center
        "
        layoutId={layoutId}
      >
        <p className="text-3xl">PLANO</p>
        <div className="flex">
          <h2 className="text-9xl font-bold mt-2">{download}</h2>
          <span>mb</span>
        </div>
        <p>download</p>

        <p className="absolute bottom-3 text-xs">Clique e veja os detalhes</p>
      </motion.div>
    </Link>
  );
};

export default function Cards() {
  return (
    <div className="mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
      {items.map((item) => (
        <Card
          href={item.href}
          layoutId={item.layoutId}
          download={item.download}
        />
      ))}
    </div>
  );
}
