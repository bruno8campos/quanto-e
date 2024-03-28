import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import Gato1 from "@/assets/gatinho1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 600px)");
  return (
    <section id="home" className={"gap-16 bg-gray-50 py-10 md:h-full md:pb-0"}>
      {/* HomePage */}
      <div className="mx-auto w-5/6 max-w-3xl items-center justify-center md:flex md:h-5/6">
        {/* Cabeçalho, texto e botões */}
        <motion.div
          className="customh:mt-32 mt-20 md:-mt-10 md:basis-3/5"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-6xl">
            Quanto é<span className="text-primary-100">?</span>
          </h1>
          <p className="mb-5">Orçamentos padronizados de maneira eficiente.</p>
          <div className="mb-6 flex items-center gap-3">
            <ActionButton setSelectedPage={setSelectedPage}>
              Quero testar!
            </ActionButton>
            <AnchorLink
              onClick={() => setSelectedPage(SelectedPage.Sobre)}
              href={`${SelectedPage.Sobre}`}
              className="transition duration-500 hover:text-gray-400"
            >
              <p>Saiba mais</p>
            </AnchorLink>
          </div>
        </motion.div>
        {/* Imagem */}
        <div className="flex basis-3/5 justify-center">
          <img
            className="w-64 md:w-72"
            src={Gato1}
            alt="Ilustração de Gato com dúvida sobre dinheiro"
          />
        </div>
      </div>
      <div>
        {isAboveMediumScreens && (
          <div className="h-[100px] w-full bg-slate-200 py-10">
            <div> </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;

/* const Home = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="home"
      className={"mx-20 py-10 md:flex md:justify-center md:gap-1 md:py-40"}
    >
      <div className="shrink-0">
        <h1 className="text-4xl md:text-7xl">
          Quanto é<span className="text-primary-100">?</span>
        </h1>
        <p className="pb-5 text-sm md:text-base">
          Orçamentos padronizados de maneira eficiente.
        </p>
        <div className="flex items-center gap-3">
          <ActionButton setSelectedPage={setSelectedPage}>
            Quero experimentar!
          </ActionButton>
          <AnchorLink
            onClick={() => setSelectedPage(SelectedPage.Sobre)}
            href={`${SelectedPage.Sobre}`}
            className="transition duration-500 hover:text-gray-400"
          >
            <p>Saiba mais</p>
          </AnchorLink>
        </div>
      </div>
      <div className="shrink-0">
        <img
          className="w-80"
          src={Gato1}
          alt="Ilustração de Gato com dúvida sobre dinheiro"
        />
      </div>
    </section>
  );
}; */
