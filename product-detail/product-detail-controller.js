import { getCurrentUserInfo } from "../auth/auth-model.js";
import { getProduct, removeProduct } from "./product-detail-model.js";
import { buildProductDetail, buildDeleteButton } from "./product-detail-view.js";

export async function productDetailController(productDetailContainer, productId) {
    const spinner = document.querySelector('.spinner')
    spinner.classList.toggle('hidden');

    try {
        const product = await getProduct(productId)
        const user = await getCurrentUserInfo();

        productDetailContainer.innerHTML = buildProductDetail(product)

        if (user.id === product.user.id) {
            const removeButtonElement = buildDeleteButton();
            productDetailContainer.appendChild(removeButtonElement);
            removeButtonElement.addEventListener("click", async () => {
            const shouldRemoveProduct = confirm('¿Seguro que quieres borrar el anuncio?');
            if (shouldRemoveProduct) {
                // gestión del error
                await removeProduct(product.id);
                window.location.href = "/"
            }
            })
        }
    } catch (error) {
        alert(error.message)
        window.location.href = "/"
    }
    finally {
        spinner.classList.toggle('hidden');
    }
}