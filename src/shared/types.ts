export enum SelectedPage {
  Home = "home",
  Sobre = "sobre",
  Calculadora = "calculadora",

  SaibaMais = "saiba-mais",
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
