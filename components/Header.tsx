import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header
      className="
      flex justify-center py-2
      md:py-4 md:justify-between
      items-center
    
      "
    >
      <Image
        src="/img/Ala-Telecom.png"
        alt="Ala Telecom Logo"
        width={180}
        height={100}
      />

      <nav className="hidden md:block font-medium font-poppins text-xl text-first-blue space-x-8">
        <Link href="/#empresa">
          <a className="tracking-wide hover:text-second-blue  transition delay-1000">
            Empresa
          </a>
        </Link>
        <Link href="/#planos">
          <a className="tracking-wide hover:text-second-blue">Planos</a>
        </Link>
        <Link href="/#contato">
          <a className="tracking-wide hover:text-second-blue">Fale Conosco</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
