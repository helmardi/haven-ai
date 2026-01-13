const API_BASE_URL = 'http://localhost:8000/api';

interface RequestConfig extends RequestInit {
  params?: Record<string, string | number | undefined>;
}

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private buildUrl(endpoint: string, params?: Record<string, string | number | undefined>): string {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.append(key, String(value));
        }
      });
    }
    
    return url.toString();
  }

  async get<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    const { params, ...fetchConfig } = config || {};
    const url = this.buildUrl(endpoint, params);
    
    const response = await fetch(url, {
      ...fetchConfig,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...fetchConfig?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }

  async post<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<T> {
    const { params, ...fetchConfig } = config || {};
    const url = this.buildUrl(endpoint, params);
    
    const response = await fetch(url, {
      ...fetchConfig,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...fetchConfig?.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }

  async put<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<T> {
    const { params, ...fetchConfig } = config || {};
    const url = this.buildUrl(endpoint, params);
    
    const response = await fetch(url, {
      ...fetchConfig,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...fetchConfig?.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }

  async delete<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    const { params, ...fetchConfig } = config || {};
    const url = this.buildUrl(endpoint, params);
    
    const response = await fetch(url, {
      ...fetchConfig,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...fetchConfig?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }
}

export const api = new ApiService(API_BASE_URL);
