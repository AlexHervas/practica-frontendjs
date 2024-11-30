import { createProduct } from "./create-product-model.js";

export function createProductController(createProductForm) {
  // 1- escuchar al evento submit para obtener los datos de creacion del producto
  createProductForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const image = createProductForm.querySelector("#image");
    const price = createProductForm.querySelector("#price");
    const name = createProductForm.querySelector("#name");
    const description = createProductForm.querySelector("#description");
    const selectedType = createProductForm.querySelector('input[name="purchaseorsale"]:checked');
    const type = selectedType ? selectedType.value : null;

    const product = {
        image: image.value,
        name: name.value,
        description: description.value,
        price: price.value,
        type
    }

    handleProductCreation(product)
  })

  async function handleProductCreation(product) {
    // 2- crear producto
    try {
      await createProduct(product)
      alert("Anuncio creado con éxito.")
      window.location.href = "/"
    } catch (error) {
      alert(error.message)
    }
  }
}