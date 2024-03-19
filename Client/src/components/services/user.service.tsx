import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/Users';

export const getAdminBoard = async (): Promise<Response> => {
    const response = await fetch(API_URL + "admin", {
      headers: authHeader(),
    });
    return response;
  };