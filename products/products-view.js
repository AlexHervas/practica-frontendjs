export const buildProduct = (product) => {
    const newProduct = document.createElement('a');
    newProduct.setAttribute("href", `/product-detail.html?id=${product.id}`);
    const createdAt = new Date(product.updatedAt)
    newProduct.innerHTML = `
      <div>
        <span>usuario: ${product.user.username} - ${createdAt.toLocaleDateString()}</span>
        <p>${product.image}</p>
        <p>${product.price}</p>
        <p>${product.name}</p>
        <p>${product.description}</p>
        <p>${product.type}</p>
      </div>
    `;
    return newProduct;
  }
  
  export function buildEmptyProductList() {
    return '<h2>No hay productos disponibles</h2>';
  }
  