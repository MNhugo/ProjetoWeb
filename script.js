document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username === "admin" && password === "123") {
        window.location.href = "home.html"; // Redireciona para a página de listagem
    } else {
        errorMessage.textContent = "❌ Usuário ou senha incorretos!";
    }
});


