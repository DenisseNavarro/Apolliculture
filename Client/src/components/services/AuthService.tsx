export const getUserRole = async () => {
  try {
    const token = localStorage.getItem('token'); // Get token from local storage
    if (!token) throw new Error('Token not found');
    
    const response = await fetch('/api/user/role', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Failed to fetch user role');
    
    const data = await response.json();
    return data.role; // Return user role
  } catch (error) {
    console.error('Error fetching user role:', error);
    throw error;
  }
};
