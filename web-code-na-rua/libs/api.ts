// import { ApiPaginateQuery } from '@/types/api';
import axios from 'axios';
// import type { AxiosError, InternalAxiosRequestConfig } from 'axios';

// ** Set Base URL for the API
export const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// ** Create and export axios instance with base url use interceptors here
export const apiClient = axios.create({ baseURL, withCredentials: true });

/*
type RetryableRequest = InternalAxiosRequestConfig & { _retry?: boolean };
type RefreshResponse = { access_token: string; refresh_token?: string };

let refreshPromise: Promise<string> | null = null;

export const clearAuthStorage = () => {
  if (typeof window === 'undefined') return;

  ['accessToken', 'refreshToken', 'userEmail', 'userData', 'storeData'].forEach(key => {
    window.localStorage.removeItem(key);
  });
};

export const refreshAccessToken = async (): Promise<string> => {
  if (typeof window === 'undefined') throw new Error('A sessão só pode ser renovada no navegador.');

  const refreshToken = window.localStorage.getItem('refreshToken');
  if (!refreshToken) throw new Error('Refresh token não encontrado.');

  if (!refreshPromise) {
    refreshPromise = axios
      .post<RefreshResponse>(`${baseURL}/auth/refresh-token`, { refreshToken }, { withCredentials: true })
      .then(({ data }) => {
        window.localStorage.setItem('accessToken', data.access_token);
        if (data.refresh_token) window.localStorage.setItem('refreshToken', data.refresh_token);
        return data.access_token;
      })
      .finally(() => {
        refreshPromise = null;
      });
  }

  return refreshPromise;
};

// ** Request Interceptor
apiClient.interceptors.request.use(config => {
  // ** Get Access Token from LocalStorage
  const storedToken = typeof window !== 'undefined' ? window.localStorage.getItem('accessToken')! : null;
  if (storedToken && baseURL === config.baseURL) {
    // ** Inclui o withCredentials em todas as requisições
    config.headers.Authorization = `Bearer ${storedToken}`;
  }
  return config;
});

//* Response Interceptor to logout the user if token expired
apiClient.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const request = error.config as RetryableRequest | undefined;
    const isAuthenticationRequest =
      request?.url?.includes('/auth/login') || request?.url?.includes('/auth/refresh-token');

    if (error.response?.status !== 401 || !request || request._retry || isAuthenticationRequest) {
      return Promise.reject(error);
    }

    request._retry = true;

    try {
      const accessToken = await refreshAccessToken();
      request.headers.Authorization = `Bearer ${accessToken}`;
      return apiClient(request);
    } catch (refreshError) {
      clearAuthStorage();
      if (typeof window !== 'undefined') {
        const currentPath = `${window.location.pathname}${window.location.search}`;
        const loginUrl = `/auth/login?returnUrl=${encodeURIComponent(currentPath)}`;
        window.location.assign(loginUrl);
      }
      return Promise.reject(refreshError);
    }
  }
);

// ** Function to convert query params to string
export const apiPaginateQuery = (query?: ApiPaginateQuery) => {
  const queryArray: string[] = [];

  if (query?.filter)
    Object.entries(query?.filter).forEach(([key, value]) => {
      queryArray.push(`${key}=${value}`);
    });

  if (query?.limit) queryArray.push(`limit=${query?.limit}`);
  if (query?.page) queryArray.push(`page=${query?.page}`);
  if (query?.sortBy) queryArray.push(`sortBy=${query?.sortBy}`);
  if (query?.search) queryArray.push(`search=${query?.search}`);
  if (query?.select) queryArray.push(`select=${query?.select.join(',')}`);

  return queryArray.join('&');
};
*/