interface User {
  id: string;
  username: string;
  password: string;
  admin: boolean;
}

const AuthLogin = {
  login: async (username: string, password: string): Promise<User | null> => {
    try {
      const response = await fetch("http://localhost:3000/Users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to authenticate");
      }

      const data = await response.json();
      const token = data?.data?.token;

      if (!token) {
        throw new Error("Token not found in response");
      }

      // Store the token in local storage
      localStorage.setItem("token", token);

      // Return user details if needed
      return data?.data as User;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  },
};

export default AuthLogin;
