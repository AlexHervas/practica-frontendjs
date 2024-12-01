export function buildProductDetail(product) {
    const createdAt = new Date(product.updatedAt);
  
    return `
      <div>
        <span>usuario: ${product.userId} - ${createdAt.toLocaleDateString()}</span>
        <p>${product.image}</p>
        <p>${product.price}</p>
        <p>${product.name}</p>
        <p>${product.description}</p>
        <p>${product.type}</p>
      </div>
    `
}
  
export function buildDeleteButton() {
    const removeButton = document.createElement('button');
    removeButton.textContent = "Borrar anuncio";

    return removeButton;
}