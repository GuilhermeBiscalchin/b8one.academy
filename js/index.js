//Input-Header
function search() {
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("change", () => {
    const value = event.target.value;
    console.log({ value });
  });
}

//Trocar HTML nas cores.
function corSelecionada() {
  const corPrimaria = document.querySelector(".colors-one");
  const corSecundaria = document.querySelector(".colors-two");
  const corTerceiro = document.querySelector(".colors-there");

  corPrimaria.addEventListener("click", () => {
    const textSelector = document.querySelector(".main-btn-text");
    textSelector.innerHTML = "Color: Space Gray";
    console.log(corPrimaria);
  });

  corSecundaria.addEventListener("click", () => {
    const textSelector = document.querySelector(".main-btn-text");
    textSelector.innerHTML = "Color: Rosé";
    console.log(corSecundaria);
  });

  corTerceiro.addEventListener("click", () => {
    const textSelector = document.querySelector(".main-btn-text");
    textSelector.innerHTML = "Color: Silver";
    console.log(corTerceiro);
  });
}

//contador
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const counterSpan = document.querySelector(".counterSpan");

function decreaseHandler() {
  let counterValue = +counterSpan.innerHTML;
  counterValue--;
  if (counterValue >= 1) {
    counterSpan.innerHTML = counterValue;
  }
}

function increaseHandler() {
  let counterValue = +counterSpan.innerHTML;
  counterValue++;
  counterSpan.innerHTML = counterValue;
}

//Contador
function contadorProduto(operation) {
  let counterValue = +counterSpan.innerHTML;

  switch (operation) {
    case "+":
      counterValue++;
      counterSpan.innerHTML = counterValue;
      break;
    case "-":
      counterValue--;
      if (counterValue >= 1) {
        counterSpan.innerHTML = counterValue;
      }
      break;
    default:
      break;
  }

  const cartAdd = document.querySelector(".addCart");
  cartAdd.addEventListener("click", () => {
    const cartAddSpan = document.querySelector(".span-header");
    cartAddSpan.innerHTML = counterValue;
    console.log("clicou aqui");
  });
}

decrease.addEventListener("click", () => contadorProduto("-"));
increase.addEventListener("click", () => contadorProduto("+"));

//Botão Size.

function selectSize() {
  const sizeSpan1 = document.querySelector(".size-um");
  const sizeSpan = document.querySelector(".size-dois");

  sizeSpan1.addEventListener("click", () => {
    const selectUm = document.querySelector(".size-um");
    selectUm.classList.add("teste");
    console.log({ selectUm }, "clicou no 13.3");
  });

  sizeSpan.addEventListener("click", () => {
    const selectDois = document.querySelector(".size-dois");
    selectDois.classList.add("teste");
    console.log({ selectDois }, "clico no 18");
  });
}


function main() {
  search();
  corSelecionada();
  contadorProduto();
  selectSize();
}

main();

//Fazer o modal do 'buy now', arrumar o span do carrinho
//Verificar responsividade.
