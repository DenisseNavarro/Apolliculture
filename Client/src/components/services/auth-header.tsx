const authHeader = (): Record<string, string> => {
    const userStr = localStorage.getItem('user');
    const user = userStr ? JSON.parse(userStr) : null;
  
    if (user && user.accessToken) {
      return { Authorization: `Bearer ${user.accessToken}` };
    } else {
      return {};
    }
  };
  
  export default authHeader;
  