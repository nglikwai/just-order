export interface User {
  id: string;
  name?: string;
  email?: string;
  image?: string;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  notes: string;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
