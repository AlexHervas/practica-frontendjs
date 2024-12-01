export async function getProducts() {
    try {
      const response = await fetch("http://localhost:8000/api/products");
      const products = await response.json();
      
      if (!response.ok) {
        throw new Error("Recurso no existente");
        }
  
      return products;
  
    } catch (error) {
      alert(error.message)
      throw new Error(error.message)
    }
}