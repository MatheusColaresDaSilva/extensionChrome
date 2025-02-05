function adicionarCampo() {
    const container = document.querySelector(".task-details"); 

    if (!container) return;
    if (document.getElementById("campo-extra-kanbanize")) return;

    const novoCampo = document.createElement("input");
    novoCampo.id = "campo-extra-kanbanize";
    novoCampo.placeholder = "Novo Campo";
    novoCampo.style.margin = "10px 0";
    novoCampo.style.padding = "5px";
    novoCampo.style.width = "100%";

    container.appendChild(novoCampo);
}
