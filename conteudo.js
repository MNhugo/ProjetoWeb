function logoff() {
    window.location.href = "login.html"; // Redireciona para a página de login
}
const items = [
    { id: 1, name: "The Legend of Zelda: Breath of the Wild", category: "Aventura" },
    { id: 2, name: "Elden Ring", category: "RPG" },
    { id: 3, name: "Cyberpunk 2077", category: "Ação" },
    { id: 4, name: "Red Dead Redemption 2", category: "Mundo Aberto" },
    { id: 5, name: "Minecraft", category: "Criativo" },
    { id: 6, name: "God of War Ragnarok", category: "Ação/Aventura" }
];


function displayItems() {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
    
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - <i>${item.category}</i> <button onclick="removeItem(${index})">❌</button>`;
        itemList.appendChild(li);
    });
}

function removeItem(index) {
    items.splice(index, 1);
    displayItems();
}

document.getElementById("addItem").addEventListener("click", () => {
    const newItemName = prompt("Nome do novo item:");
    const newItemCategory = prompt("Categoria do item:");
    
    if (newItemName && newItemCategory) {
        items.push({ id: items.length + 1, name: newItemName, category: newItemCategory });
        displayItems();
    }
});

document.getElementById("searchBar").addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
    
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
    
    filteredItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - <i>${item.category}</i> <button onclick="removeItem(${index})">❌</button>`;
        itemList.appendChild(li);
    });
});

// Exibir os itens ao carregar a página
displayItems();


window.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    
    // Verifica se o usuário chegou ao fim da página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.display = "block"; // Exibe o rodapé
    } else {
        footer.style.display = "none"; // Esconde se não estiver no fim
    }
});

