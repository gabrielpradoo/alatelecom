import { motion } from "framer-motion";
import Link from "next/link";

export default function Plano30Page() {
  return (
    <motion.div
      className="h-screen flex justify-center font-poppins "
      layoutId="plano10Id"
    >
      <div className="flex flex-col justify-between items-center w-full md:w-1/2 h-3/4  bg-gradient-to-br from-gray-200 via-white rounded-xl shadow-2xl py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center text-first-blue"
        >
          <div className="flex items-center flex-col mb-6">
            <p className="text-xl md:text-5xl">PLANO</p>
            <div className="flex items-baseline">
              <h2 className="text-6xl md:text-9xl font-bold mt-2">30</h2>
              <span>mb</span>
            </div>
          </div>

          <p className="text-xl font-semibold">30 Mb de Download</p>
          <p className="text-xl font-semibold">15 Mb de Upload</p>

          <div className="flex justify-between mt-4 items-baseline">
            <p className="text-xl">R$</p>
            <h3 className="text-5xl font-bold"> 170,00</h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link href="/">
            <a className="bg-second-blue text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:border-gray-700 transition">
              Saiba mais
            </a>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link href="/">
            <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:border-gray-700 transition">
              Voltar para a Home
            </a>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
