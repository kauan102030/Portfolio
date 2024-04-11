const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

botaoMostrarProjetos.addEventListener("click", () => {
    if (botaoMostrarProjetos.textContent.includes("Mostrar mais")) {
        mostrarProjetos();
        trocarTextoBotao();
    } else {
        mostrarProjetos();
        trocarTextoBotao();
    }
});

function trocarTextoBotao() {
    if (botaoMostrarProjetos.textContent.includes("Mostrar mais")) {
        botaoMostrarProjetos.textContent = botaoMostrarProjetos.textContent.replace("Mostrar mais", "Ocultar");
    } else {
        botaoMostrarProjetos.textContent = botaoMostrarProjetos.textContent.replace("Ocultar", "Mostrar mais");
    }
}

function mostrarProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.toggle("ativo");
    });
}
