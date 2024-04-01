export enum SelectedPage {
  Home = "home",
  Sobre = "sobre",
  Calculadora = "calculadora",
}

export type CustoFixo = {
  id: number;
  value: number;
};

export type CustoVar = {
  id: number;
  value: number;
  qtd: number;
};
