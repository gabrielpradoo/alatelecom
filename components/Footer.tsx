export default function Footer() {
  return (
    <footer className="bg-third-blue mt-16 flex flex-col">
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:flex-wrap font-poppins font-semibold text-white justify-between p-9">
        <div>
          <p>Rua Ciríaco de Tolêdo, Sala X no Atacadista Pantaneiro</p>
          <p>Nova Corumbá - Corumbá, Mato Grosso do Sul</p>
        </div>

        <div className="hidden md:block border-l-2" />

        <div>
          <p>contato@alatelecom.com.br</p>
          <p>suporte@alatelecom.com.br</p>
        </div>

        <div className="hidden md:block border-l-2" />

        <div>
          <p>(67) 3231-9999</p>
          <p>(67) 9 9999-8888</p>
        </div>

        <div className="hidden md:block border-l-2" />

        <div className="mt-3 xl:mt-0">
          <p>Nos siga nas Redes Sociais</p>

          <p className="flex items-center my-2">
            <img
              src="/img/facebook.png"
              alt="Facebook logo"
              className="w-8 h-8 mr-2"
            />{" "}
            alatelecom
          </p>
          <p className="flex items-center">
            <img
              src="/img/instagram.png"
              alt="Instagram logo"
              className="w-8 h-8 mr-2"
            />{" "}
            alatelecom
          </p>
        </div>
      </div>

      <div className="text-white flex justify-center items-center font-poppins font-semibold mt-4 border-t-2">
        <p className="p-2">Desenvolvido por Gabriel do Prado</p>
      </div>
    </footer>
  );
}
