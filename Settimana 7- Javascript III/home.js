
const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc3MzVlOWMwNTgzNTAwMTg1MjJjMzQiLCJpYXQiOjE3MDIzNzIxMjAsImV4cCI6MTcwMzU4MTcyMH0.M3xwRVlQWPhO7bbGx9CS9wFqiUHTqJ9jax6PuA_Yy7Y"
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

const redirectToBackPage = () => {
    window.location.href ='back.html';
};


document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards-container');

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('card', 'm-1', 'p-3');

     const image = document.createElement('img');
        image.src = product.imageUrl;
        image.classList.add('card-img-top');
        image.alt = product.name;
        image.style.height = '200px';      
       
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerHTML = `
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">prezzo: ${product.price}€</p>          
        `;

        const detailsButton = document.createElement('button');
        detailsButton.classList.add('btn', 'btn-primary', 'mt-3');
        detailsButton.textContent = 'Dettagli';
        
        detailsButton.addEventListener('click', () => {
            // Reindirizza alla pagina dei dettagli del prodotto
            window.location.href = `detail.html?id=${product._id}`;

        });


        card.appendChild(image);
        card.appendChild(cardBody);
        cardBody.appendChild(detailsButton);
        return card;
    }

    fetch(url, {
             headers: headers
    })
    .then(response => response.json())
    .then(productsData => {
        productsData.forEach(product => {
            const card = createProductCard(product);
            cardsContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Si è verificato un errore:', error));

    const backButton = document.querySelector('.modifyButton'); // Sostituisci '.back-button' con il selettore corretto del bottone

    backButton.addEventListener('click', redirectToBackPage);

   
});


