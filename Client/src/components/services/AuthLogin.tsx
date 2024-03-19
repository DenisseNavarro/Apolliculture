const API_URL = "http://localhost:3000/Users";

interface User {
  id: string;
  username: string;
  password: string;
}

const AuthLogin = {
  login: async (username: string, password: string): Promise<User | null> => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok && data.accessToken) {
        // Save access token to local storage
        localStorage.setItem("accessToken", data.accessToken);
      }

      // Return the entire response data
      return data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  },

  logout: () => {
    localStorage.removeItem("currentUser");
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem("currentUser");
    if (userStr) return JSON.parse(userStr);

    return null;
  },
};

export default AuthLogin;
