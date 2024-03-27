import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.Calculadora)}
      href={`#${SelectedPage.Calculadora}`}
      className="rounded-xl bg-primary-100 px-4 py-2 text-gray-50 transition duration-100 hover:cursor-pointer hover:bg-lime-200 hover:text-primary-300 active:bg-gray-300"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
