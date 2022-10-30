import { createContext, ReactNode, useState } from 'react';

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
}

type UserProps = {
  id: string;
  name: string;
  email: string;
}

type SignInProps = {
  email: string;
  password: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user;


  function signIn(){
    alert("CLICOU NO LOGIN")
  }

  return(
    <AuthContext.Provider value={{ }}>
      {children}
    </AuthContext.Provider>
  )
}