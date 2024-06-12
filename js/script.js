var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
  maior();

});


//Função somar
function maior() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let primeiroNumero = Number(document.getElementById("primeiroNumero").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let segundoNumero= Number(document.getElementById("segundoNumero").value);

  //Realiza a soma do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //E a variável "resultado_soma" recebe o valor da soma
  let resultado_maior = primeiroNumero > segundoNumero;

  if (primeiroNumero > segundoNumero) {
    document.getElementById("resultado").value = "primeiro Numero e maior";
  } else {
      document.getElementById("resultado").value = "segundo Numero e maior";
  }

}
