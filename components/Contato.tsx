import { useState } from "react";

export function Contact() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  function sendEmail() {
    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      /* const name = (<HTMLInputElement>document.getElementById("name")).value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value; */

      fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
        .then((response) => {
          alert("E-mail enviado com sucesso");
        })
        .catch((error) => {
          alert("Erro ao enviar e-mail");
        });
    });
  }

  return (
    <div
      id="contato"
      className="w-full mt-24 bg-third-blue rounded-xl font-poppins"
    >
      <div className=" font-raj max-w-screen-8xl  px-4 py-12 text-white flex flex-col items-center">
        <h3
          className=" font-semibold text-6xl pb-12
            max-sm:text-5xl"
        >
          Fale Conosco
        </h3>
        <p className="text-white text-lg font-medium text-center">
          Neste formulário você pode solicitar informações sobre nossos
          serviços, enviar sua sugestão, crítica ou elogio.
        </p>
        <form
          id="form"
          className="md:w-8/12 flex flex-col space-y-4 mt-6 w-full"
        >
          <div
            className="flex justify-between md:space-x-4 
            flex-col md:flex-row space-x-0 md:space-y-0 space-y-4 text-first-blue"
          >
            <input
              type="text"
              id="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" md:w-6/12 py-2 px-4 rounded w-full outline-none text-main font-bold"
            />
            <input
              type="text"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-full md:w-6/12 py-2 px-4 rounded w-full outline-none text-main font-bold"
            />
          </div>
          <textarea
            name=""
            id="message"
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="py-2 px-4 h-64 rounded outline-none text-main text-lg font-medium text-first-blue"
          />
          <button
            onClick={sendEmail}
            className="bg-green-500 flex justify-center items-center md:w-4/12 px-6 py-3 rounded w-5/12 sm:w-full font-semibold text-xl"
          >
            <span>Enviar</span>
          </button>
        </form>
      </div>
    </div>
  );
}
