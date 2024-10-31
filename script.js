
function postar() {
    const postText = document.getElementById("post-text").value;
    
    if (postText === "") {
        alert("Por favor, escreva algo antes de postar!");
        return;
    }
    
    const novaPostagem = document.createElement("section");
    novaPostagem.classList.add("postagem");
    
    novaPostagem.innerHTML = `
        <div class="post-content">
            <h4>Usuário</h4>
            <p>${postText}</p>
            <img src="img/dog-example.jpg" alt="Seu bichinho" class="post-img">
        </div>
    `;
    
    document.querySelector("main").appendChild(novaPostagem);
    
    
    document.getElementById("post-text").value = "";
}
 
