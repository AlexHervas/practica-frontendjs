import { productsController } from "./products/products-controller.js";
import { sessionController } from "./session/session-controller.js";

document.addEventListener("DOMContentLoaded", () => {

  const productsContainer = document.querySelector("#products-container");
  const sessionContainer = document.querySelector("#session");

  sessionController(sessionContainer)
  productsController(productsContainer)

})