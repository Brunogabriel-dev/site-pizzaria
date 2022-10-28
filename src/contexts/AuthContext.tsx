import { createContext, ReactNode } from 'react';

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean
}

type UserProps = {
  id: string;
  name: string;
  email: string;
}

const AuthContext = createContext({})