const url = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc3MzVlOWMwNTgzNTAwMTg1MjJjMzQiLCJpYXQiOjE3MDIzNzIxMjAsImV4cCI6MTcwMzU4MTcyMH0.M3xwRVlQWPhO7bbGx9CS9wFqiUHTqJ9jax6PuA_Yy7Y";
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
};




document.addEventListener('DOMContentLoaded', () => {
    function getProductId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    const productId = getProductId();
    if (productId) {
        fetch(`${url}${productId}`, {
            headers: headers
        })
        .then(response => response.json())
        .then(product => {
            const productDetailsContainer = document.getElementById('productDetails');
            const viewProduct = `
                <div class="product-container d-flex">
                    <img src="${product.imageUrl}" alt="${product.name}" class="product-image detail-img">
                    <div class="product-details ">
                        <h2>${product.name}</h2>
                        <p><strong>Descrizione:</strong> ${product.description}</p>
                        <p><strong>Prezzo:</strong> ${product.price} €</p>
                        <a href="homepage.html" class="btn btn-primary mt-3">Torna alla Home</a>
                    </div>
                </div>
            `;
            productDetailsContainer.innerHTML = viewProduct;
        })
        .catch(error => console.error('Errore nel recupero dei dettagli del prodotto:', error));
    } else {
        console.error('ID del prodotto non trovato nella URL');
    }
});