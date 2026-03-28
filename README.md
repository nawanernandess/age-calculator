# Calculadora de Idade

Uma aplicação web que calcula a idade de uma pessoa a partir da data de nascimento informada, exibindo o resultado em anos, meses e dias — além de indicar quantos dias faltam para o próximo aniversário.

## Funcionalidades

- Cálculo preciso da idade em **anos**, **meses** e **dias**
- Exibição de quantos **dias faltam para o próximo aniversário**
- Seletor dinâmico de dias que se atualiza automaticamente conforme o mês e o ano escolhidos (incluindo suporte a anos bissextos)
- Validação do campo de ano com feedback visual de erro
- Interface responsiva, adaptada para dispositivos móveis

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

## Como usar

1. Selecione o **dia** e o **mês** de nascimento nos seletores
2. Digite o **ano** de nascimento (4 dígitos, entre 1900 e o ano atual)
3. Clique em **Calcular**
4. Os resultados aparecem à direita: idade completa e dias até o próximo aniversário

## Estrutura do projeto

```
age-calculator/
├── index.html           # Estrutura da página
├── style.css            # Estilos visuais
├── calculator.js        # Lógica pura de cálculo de idade e aniversário
├── index.js             # Manipulação do DOM e gerenciamento de eventos
└── assets/
    └── images/          # Ícones e imagens
```
