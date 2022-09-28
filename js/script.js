// ativar linsk do menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const href = link.href;
  const url = location.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orcamento

const paramentros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
    console.log(elemento);
  }
}

paramentros.forEach(ativarProduto);


// Evento Galeria

const galeria = document.querySelectorAll(".bicicletas-imagens img");

const galeriaContainer = document.querySelector(".bicicletas-imagens");

function eventoGaleria(img) {
    img.addEventListener('click', (event) => {
        const imagem = event.currentTarget;
        const media = matchMedia("(min-width: 920px)").matches;
        if(media) {
            galeriaContainer.prepend(imagem)
        }
    })
}

galeria.forEach(eventoGaleria)