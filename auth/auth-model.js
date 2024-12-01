export async function getCurrentUserInfo() {
    const token = localStorage.getItem('jwt');
  
    try {
      const response = await fetch(`http://localhost:8000/auth/me`, {
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      const user = await response.json();
  
      return user;
  
    } catch (error) {
      throw new Error(error.message)
    }
  }