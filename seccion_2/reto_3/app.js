// Inventario de productos
let products = [];

// Función para generar un nuevo ID único
function generateId() {
    return products.length > 0 ? products[products.length - 1].id + 1 : 1;
}

// Función para agregar un nuevo producto
function addProduct(name, price, quantity, description) {
    const id = generateId();
    products.push({ id, name, price, quantity, description });
    console.log(`Producto "${name}" agregado al inventario.`);
}

// Función para duplicar un producto existente
function duplicateProduct(id) {
    const productToDuplicate = products.find(product => product.id === id);
    if (productToDuplicate) {
        const { name, price, quantity, description } = productToDuplicate;
        const newName = `${name} Copy`;
        const newId = generateId();
        products.push({ id: newId, name: newName, price, quantity, description });
        console.log(`Producto "${name}" duplicado como "${newName}".`);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Función para mostrar todos los productos
function displayProducts() {
    console.log("Productos en el inventario:");
    products.forEach(product => console.log(product));
}

// Función para buscar productos por nombre
function searchByName(name) {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    console.log("Resultados de la búsqueda por nombre:");
    filteredProducts.forEach(product => console.log(product));
}

// Función para buscar productos por precio
function searchByPrice(minPrice, maxPrice) {
    const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    console.log("Resultados de la búsqueda por precio:");
    filteredProducts.forEach(product => console.log(product));
}

// Función para actualizar un producto existente
function updateProduct(id, updatedProduct) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
        console.log(`Producto actualizado.`);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Función para eliminar un producto existente
function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    console.log("Producto eliminado.");
}

// Función para verificar la existencia y cantidad de un producto
function checkAvailability(id, quantity) {
    const product = products.find(product => product.id === id);
    if (!product) {
        console.log("Producto no encontrado.");
        return false;
    }
    if (product.quantity < quantity) {
        console.log("Cantidad insuficiente.");
        return false;
    }
    return true;
}

// Función para vender un producto y actualizar la cantidad disponible
function sellProduct(id, quantity) {
    if (checkAvailability(id, quantity)) {
        const index = products.findIndex(product => product.id === id);
        products[index].quantity -= quantity;
        console.log(`Venta realizada. Cantidad disponible actualizada.`);
    }
}

// Función para comprar un producto y actualizar la cantidad disponible
function buyProduct(id, quantity) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index].quantity += quantity;
        console.log(`Compra realizada. Cantidad disponible actualizada.`);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Función para calcular el valor total del inventario
function calculateTotalValue() {
    const totalValue = products.reduce((total, product) => total + (product.price * product.quantity), 0);
    console.log(`Valor total del inventario: ${totalValue}`);
}

// Función para ordenar los productos por precio de forma ascendente o descendente
function sortProductsByPrice(order = "asc") {
    const sortedProducts = [...products].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
    console.log(`Productos ordenados por precio (${order}):`);
    sortedProducts.forEach(product => console.log(product));
}

// Función para identificar productos con posibles malas palabras en la descripción
function identifyBlacklistedProducts() {
    const blacklistedWords = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'];
    const blacklistedProducts = products.filter(product => blacklistedWords.some(word => product.description.toLowerCase().includes(word)));
    console.log("Productos con posibles malas palabras en la descripción:");
    blacklistedProducts.forEach(product => console.log(product));
}

// Función para generar un reporte general de productos
function generateReport() {
    const totalProducts = products.length;
    const totalInventoryValue = products.reduce((total, product) => total + (product.price * product.quantity), 0);
    const mostExpensiveProducts = products.filter(product => product.price === Math.max(...products.map(p => p.price)));
    const cheapestProducts = products.filter(product => product.price === Math.min(...products.map(p => p.price)));
    const mostAvailableProducts = products.filter(product => product.quantity === Math.max(...products.map(p => p.quantity)));
    const leastAvailableProducts = products.filter(product => product.quantity === Math.min(...products.map(p => p.quantity)));
    console.log("Reporte General de Productos:");
    console.log(`Cantidad de Productos: ${totalProducts}`);
    console.log(`Valor Total del Inventario: ${totalInventoryValue}`);
    console.log(`Cantidad de Productos Más Caros: ${mostExpensiveProducts.length}`);
    console.log(`Cantidad de Productos Más Baratos: ${cheapestProducts.length}`);
    console.log(`Cantidad de Productos con Mayor Cantidad Disponible: ${mostAvailableProducts.length}`);
    console.log(`Cantidad de Productos con Menor Cantidad Disponible: ${leastAvailableProducts.length}`);
    identifyBlacklistedProducts();
}

// llamando las fuciones.
addProduct("Producto 1", 100, 10, "Descripción del Producto 1");
duplicateProduct(1);
displayProducts();
searchByName("Producto");
searchByPrice(50, 150);
updateProduct(1, { price: 200 });
deleteProduct(2);
sellProduct(1, 5);
buyProduct(1, 20);
calculateTotalValue();
sortProductsByPrice("desc");
generateReport();
