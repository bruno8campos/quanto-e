import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
/* import useMediaQuery from "@/hooks/useMediaQuery"; */
import Gato1 from "@/assets/gatinho1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  /*   const isAboveMediumScreens = useMediaQuery("(min-width: 600px)"); */
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
};

export default Home;
