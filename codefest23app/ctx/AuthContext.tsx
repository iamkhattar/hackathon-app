import { createContext, useState, PropsWithChildren, useContext } from 'react';
import { User } from '../types';

export type UserContextProps = {
  user?: User;
  setUser?: (user?: User) => void
}

export const AuthContext = createContext<UserContextProps>({user: undefined, setUser: undefined});

export function AuthContextProvider({children}: PropsWithChildren){

  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>
  )
} 

export const useAuthContext = () => useContext(AuthContext);