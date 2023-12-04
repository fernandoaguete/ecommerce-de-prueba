window.onload = () => {
    const productsContainer = document.getElementById("products-container");
    const products = [
        {
            name: "sueter",
            price: "5000",
        },

        {
            name: "souvenir",
            price: "3000",
        },

        {
            name: "bufanda",
            price: "2000",
        },

        {
            name: "peluche",
            price: "5000",
        },
        
        
        ];
        products.map((product) => {
            productsContainer.innerHTML +=
            <div class="product-card">
            <img class="card-img" src="img/prenda.jpg" alt="${product.name}"></img>
            <div class="card-text">
                <h3>${product.price}</h3>
                <p>${product.name}</p>
            </div>
        </div>
        });
}