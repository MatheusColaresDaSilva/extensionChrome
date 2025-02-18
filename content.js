function adicionarBotao() {
    const headerIcons = document.querySelector(".modal-header-icons");
    if (!headerIcons) return;
    if (document.getElementById("botao-extra-kanbanize")) return;

    const novoBotao = document.createElement("button");
    novoBotao.id = "botao-extra-kanbanize";
    novoBotao.className = "js-icon custom-kanbanize-button";
    novoBotao.title = "Copiar nome do Card {ID-DESC}";

    const icone = document.createElement("span");
    icone.className = "material-symbols-rounded";
    icone.innerText = "fork_right";

    novoBotao.appendChild(icone);
    headerIcons.appendChild(novoBotao);

    novoBotao.addEventListener("click", () => {
        const url = window.location.pathname;
        const match = url.match(/\/ctrl_board\/\d+\/cards\/(\d+)\/details\//);
        const cardId = match ? match[1] : "ID não encontrado";

        const div2 = document.querySelector(".card-title");
        if (!div2) return;

        let tituloFormatado = div2.innerText
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove acentos
            .replace(/-+/g, "") // Substitui 'ç' por 'c'
            .replace(/ç/g, "c") // Substitui 'ç' por 'c'
            .replace(/\s+/g, "-") // Substitui espaços por traço
            .replace(/[^a-zA-Z0-9-]/g, "") // Remove caracteres especiais
            .toLowerCase(); // Converte para minúsculas

        const resultado = `${cardId}-${tituloFormatado}`;

        navigator.clipboard.writeText(resultado).then(() => {
            alert(`Copiado para a área de transferência:\n${resultado}`);
        }).catch(err => {
            console.error("Erro ao copiar texto", err);
        });
    });
}

const observer = new MutationObserver(() => {
    adicionarBotao();
});

observer.observe(document.body, { childList: true, subtree: true });
document.addEventListener("DOMContentLoaded", adicionarBotao);
