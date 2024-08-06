document.addEventListener("DOMContentLoaded", function() {
    const menuItems = {
        entrees: [
            { id: "E01", image: "../images/springrolls.jpg", name: 'Spring Rolls', price: '5.00', description: 'Fresh spring rolls with shrimp, lettuce, and vermicelli noodles served with peanut sauce.' },
            { id: "E02", image: "../images/summerrolls.jpg", name: 'Summer Rolls', price: '5.50', description: 'Summer rolls with shrimp, lettuce, and vermicelli noodles.' }
            // Add more items
        ],
        mains: [
            { id: "M01", image: "../images/pho.jpg", name: 'Pho', price: '10.00', description: 'Traditional Vietnamese noodle soup with beef or chicken.' },
            { id: "M02", image: "../images/banhmi.jpg", name: 'Banh Mi', price: '7.50', description: 'Vietnamese sandwich with various fillings.' }
            // Add more items
        ],
        desserts: [
            { id: "D01", image: "../images/chebamau.jpg", name: 'Che Ba Mau', price: '4.00', description: 'Three-color dessert with mung beans, red beans, and pandan jelly.' },
            { id: "D02", image: "../images/flan.jpg", name: 'Banh Flan', price: '3.50', description: 'Vietnamese caramel flan.' }
            // Add more items
        ],
        drinks: [
            { id: "DR01", image: "../images/icedcoffee.jpg", name: 'Vietnamese Iced Coffee', price: '3.00', description: 'Strong coffee with condensed milk served over ice.' },
            { id: "DR02", image: "../images/jasminetea.jpg", name: 'Jasmine Tea', price: '2.50', description: 'Fragrant jasmine tea.' }
            // Add more items
        ]
    };

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const menuContainer = document.getElementById("menu-container");

    if (menuItems[category]) {
        const categoryItems = menuItems[category];

        categoryItems.forEach(item => {
            const menuItemTile = document.createElement("div");
            menuItemTile.className = "menu-item-tile col-md-6";

            menuItemTile.innerHTML = `
                <div class="row">
                    <div class="col-sm-5">
                        <div class="menu-item-photo">
                            <div>${item.id}</div>
                            <img class="img-responsive" width="250" height="200" src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="menu-item-price">$${item.price}</div>
                    </div>
                    <div class="menu-item-description col-sm-7">
                        <h3 class="menu-item-title">${item.name}</h3>
                        <p class="menu-item-details">${item.description}</p>
                    </div>
                </div>
                <hr class="d-md-none">
            `;

            menuContainer.appendChild(menuItemTile);
        });
    } else {
        menuContainer.innerHTML = `<p>Category not found.</p>`;
    }
});
