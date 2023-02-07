function start() {
  var buttonCalculate = document.querySelector('#button-calculate');
  buttonCalculate.addEventListener('click', handleButtonClick);

  //var inputnumeroA = document.querySelector('#input-A');
  //var inputnumeroB = document.querySelector('#input-B');

  inputnumeroA.addEventListener('input', handleButtonClick);
  inputnumeroB.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function soma(numeroA, numeroB) {
  return numeroA + numeroB;
}

function subtracaoAB(numeroA, numeroB) {
  return numeroA - numeroB;
}

function subtracaoBA(numeroA, numeroB) {
  return numeroB - numeroA;
}

function multiplicacao(numeroA, numeroB) {
  return numeroA * numeroB;
}

function divisaoAB(numeroA, numeroB) {
  return numeroA / numeroB;
}

function divisaoBA(numeroA, numeroB) {
  return numeroB / numeroA;
}

function potenciaAB(numeroA, numeroB) {
  return numeroA ** numeroB;
}

function potenciaBA(numeroA, numeroB) {
  return numeroB ** numeroA;
}

function raizQuadradaA(numeroA) {
  return Math.sqrt(numeroA);
}

function raizQuadradaB(numeroB) {
  return Math.sqrt(numeroB);
}

function fatorialA(numeroA) {
  if (numeroA === 0 || numeroA === 1) return 1;
  for (var i = numeroA - 1; i >= 1; i--) {
    numeroA *= i;
  }
  return numeroA;
}

function fatorialB(numeroB) {
  if (numeroB === 0 || numeroB === 1) return 1;
  for (var i = numeroB - 1; i >= 1; i--) {
    numeroB *= i;
  }
  return numeroB;
}

function porcentagemAB(numeroA, numeroB) {
  return (numeroB * 100) / numeroA;
}

function porcentagemBA(numeroA, numeroB) {
  return (numeroA * 100) / numeroB;
}

function media(numeroA, numeroB) {
  return (numeroA + numeroB) / 2;
}

function handleButtonClick() {
  var inputnumeroA = document.querySelector('#input-A');
  var inputnumeroB = document.querySelector('#input-B');
  var Result = document.querySelector('#soma');
  var Result2 = document.querySelector('#subtracaoAB');
  var Result3 = document.querySelector('#subtracaoBA');
  var Result4 = document.querySelector('#multiplicacao');
  var Result5 = document.querySelector('#divisaoAB');
  var Result6 = document.querySelector('#divisaoBA');
  var Result7 = document.querySelector('#potenciaAB');
  var Result8 = document.querySelector('#potenciaBA');
  var Result9 = document.querySelector('#raizQuadradaA');
  var Result10 = document.querySelector('#raizQuadradaB');
  var Result11 = document.querySelector('#fatorialA');
  var Result12 = document.querySelector('#fatorialB');
  var Result13 = document.querySelector('#porcentagemAB');
  var Result14 = document.querySelector('#porcentagemBA');
  var Result15 = document.querySelector('#media');

  var numeroA = Number(inputnumeroA.value);
  var numeroB = Number(inputnumeroB.value);

  var calculo = soma(numeroA, numeroB);

  var calculo2 = subtracaoAB(numeroA, numeroB);

  var calculo3 = subtracaoBA(numeroA, numeroB);

  var calculo4 = multiplicacao(numeroA, numeroB);

  var calculo5 = divisaoAB(numeroA, numeroB).toFixed(2);

  var calculo6 = divisaoBA(numeroA, numeroB).toFixed(2);

  var calculo7 = potenciaAB(numeroA, numeroB);

  var calculo8 = potenciaBA(numeroA, numeroB);

  var calculo9 = raizQuadradaA(numeroA).toFixed(2);

  var calculo10 = raizQuadradaB(numeroB).toFixed(2);

  var calculo11 = fatorialA(numeroA);

  var calculo12 = fatorialB(numeroB);

  var calculo13 = porcentagemAB(numeroA, numeroB).toFixed(0);

  var calculo14 = porcentagemBA(numeroA, numeroB).toFixed(0).replace('%');

  var calculo15 = media(numeroA, numeroB);

  Result.textContent = calculo;
  Result2.textContent = calculo2;
  Result3.textContent = calculo3;
  Result4.textContent = calculo4;
  Result5.textContent = calculo5;
  Result6.textContent = calculo6;
  Result7.textContent = calculo7;
  Result8.textContent = calculo8;
  Result9.textContent = calculo9;
  Result10.textContent = calculo10;
  Result11.textContent = calculo11;
  Result12.textContent = calculo12;
  Result13.textContent = calculo13;
  Result14.textContent = calculo14;
  Result15.textContent = calculo15;
}

start();
