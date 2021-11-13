/** 
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente 
e desenvolva
conforme solicitado. Veja abaixo os requisitos do projeto:
- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida 
com seus respectivostempos pré-definidos.
1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão);
- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
Se o tempo informado for
maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabum”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". 
*/



function menuMicroondas (comida, tempo){

  let tempoPadrao;

  switch (comida) {
    case "pipoca":
      tempoPadrao = 10;
      break;
    
    case "macarrao":
    case "brigadeiro":
      tempoPadrao = 8;
      break;
  
    case "carne":
      tempoPadrao = 15;
      break;
    
    case "feijao":
      tempoPadrao = 12;
      break;

    default:
      break;
  }

  if (comida != "pipoca" && comida != "macarrao" && comida != "brigadeiro" && comida != "carne" && comida != "feijao") {
    console.log("Prato inexistente.");
  } else if (tempo < tempoPadrao){
    console.log("Tempo insuficiente");
  } else if (tempo > (3 * tempoPadrao)){
    console.log("Kabum!!!")
  } else if (tempo > (2 * tempoPadrao)){
    console.log("A comida queimou!");
  } else {
    console.log("Prato pronto, bom apetite!!!");
  }

}

// Testando prato pronto
menuMicroondas("pipoca", 12);

// Testando prato inexistente
menuMicroondas("peixe", 10);

// Testando tempo insuficiente
menuMicroondas("macarrao", 5);

// Testando 2x tempo padrão
menuMicroondas("carne", 31);

// Testando 3x tempo padrão
menuMicroondas("feijao", 40);