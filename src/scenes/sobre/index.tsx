import Eu from "@/assets/perfil_eu.jpg";
import iconIg from "@/assets/instagram.svg";
import iconGh from "@/assets/github.svg";

const Sobre = () => {
  return (
    <section id="sobre" className="bg-gray-50 py-20 md:h-full md:pb-0">
      <div className=" mx-auto w-5/6 items-center rounded-3xl bg-gray-100 p-10 md:flex md:w-3/5 md:gap-10">
        <div className=" mb-5 shrink-0">
          <img
            className="my-5 w-32 rounded-full border-4 border-gray-500"
            src={Eu}
            alt="foto de perfil Camposal Tattoo"
          />
          <div className=" mx-auto flex justify-start gap-10 ps-3">
            <a
              href="https://www.instagram.com/camposaltattoo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className=" w-8" src={iconIg} alt="Ícone do Instagram" />
            </a>
            <a
              href="https://github.com/bruno8campos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-8" src={iconGh} alt="Ícone do GitHub" />
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-5xl">
            Sobre mim<span className="text-primary-100">.</span>
          </h1>
          <p className="mt-5">
            Olá! Me chamo Bruno <span className="font-bold"> "Camposal" </span>
            Almeida. Sou desenvolvedor e tatuador. Criei o{" "}
            <span className="font-bold text-primary-100">Quanto é</span> para
            ajudar tatuadores que, assim como eu, podem ter dificuldade em fazer
            orçamentos de maneira padronizada e eficiente.
          </p>
          <div>
            <span className="font-bold">Ajude</span> a manter esse projeto
            gratuito, vivo e se atualizando.
          </div>
          <div className="mt-2">
            <span className="font-bold text-primary-100">
              {"\n"}Faça uma doação. :)
            </span>
          </div>

          <div className="mt-4">
            Minha chave pix:{" "}
            <span className="font-bold">
              2919717e-9060-4e95-aea6-9fd9b6dca478
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
