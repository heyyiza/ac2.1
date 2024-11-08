const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg"
];

let imageIndex = 0;

function cadastrar() {
    const titulo = document.getElementById("titulo").value;
    if (titulo === "") {
        alert("título");
        return;
    }

    const cardContainer = document.getElementById("card-container");

    const card = document.createElement("div");
    card.className = "col-md-3";
    
    const imageUrl = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;

    card.innerHTML = `
        <div class="card">
            <img src="${imageUrl}" class="card-img-top" alt="Imagem">
            <div class="card-body text-center">
                <h5 class="card-title">${titulo}</h5>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-danger-custom" onclick="apagarCard(this)">Apagar</button>
                </div>
            </div>
        </div>
    `;
    
    cardContainer.appendChild(card);

    document.getElementById("titulo").value = "";
}

function apagarCard(button) {
    button.parentElement.parentElement.parentElement.remove();
}

function apagarTodos() {
    document.getElementById("card-container").innerHTML = "";
}
