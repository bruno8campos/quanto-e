![Caxi, um dos gatinhos do Quanto é](src/assets/gatinhomd.png)

# Quanto é

Uma calculadora de orçamentos para tatuadores.

## Como funciona

É feita a soma de quantos **custos fixos** e **custos variáveis** forem inseridos.
Vamos chamar esse valor de **custos**.

Depois, é calculado o valor de **mão de obra**. Esse valor é calculado multiplicando o valor
**base** pelo **número de horas estimado** e pelos modificadores **complexidade do desenho** e
**complexidade do local do corpo**. Eles podem adicionar 10% do valor **base** a cada _tick_ habilitado.

Além disso, é multiplicado o valor de **custos fixos** pelo **número de sessões**, já que eles
simbolizam custos fixos para cada vez que o tatuador vai até o estúdio e monta bancada.

Por fim, é somado o valor de **custos** e **mão de obra** para resultar no **orçamento final**.

A **porcentagem do estúdio** é calculada a partir do **orçamento final**.

O **lucro real** simboliza o valor do **orçamento final** menos a **porcentagem do estúdio** e os **custos**.

Importante: Vale ressaltar que os **custos variáveis** representam os custos variáveis que o tatuador teria
para realizar TODAS as sessões. Também é importante notar que o **número de horas estimado** simboliza
o número de horas totais, independente do **número de sessões** especificado.
