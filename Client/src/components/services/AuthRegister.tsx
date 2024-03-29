interface User {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
    admin: boolean;
  }
  
  const registerUser = async (user: User): Promise<boolean> => {
    try {
      const response = await fetch ("http://localhost:3000/Users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      
      });
  
      if (response.ok) {
        return true; // Registro exitoso
      } else {
        return false; // Error en el registro
      }
    } catch (error) {
      console.error("Error registering user:", error);
      return false; // Error en la solicitud
    }
  };
  
  export default registerUser;