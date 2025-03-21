import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://ocr-n7wk.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleError = (error: unknown): Error => {
  if (axios.isAxiosError(error)) {
    return new Error(error.response?.data?.message || error.message);
  }
  return new Error('Erro desconhecido');
};

export const getRequest = async (endpoint: string): Promise<any> => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const postRequest = async (endpoint: string, data: any): Promise<any> => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const uploadFile = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await apiClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};


export const login = async (email: string, password: string): Promise<any> => {
  try {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const register = async (username: string, email: string, password: string): Promise<any> => {
  try {
    const response = await apiClient.post('/auth/register', {username, email, password });
    return response.data;
  } catch (error) {
    throw handleError(error);
  }

  // export const verifyLogin = async (email: string, password: string): Promise<any> => {
  //   try {
     
  //     const isRegisteredResponse = await apiClient.post('/auth/is-registered', { email });
  //     if (!isRegisteredResponse.data.isRegistered) {
  //       throw new Error('Usuário não registrado!');
  //     }
  
     
  //     const response = await apiClient.post('/auth/login', { email, password });
  //     return response.data;
  //   } catch (error) {
  //     throw handleError(error);
  //   }
};