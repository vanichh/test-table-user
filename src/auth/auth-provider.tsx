import { FC, ReactNode, createContext, useState, Dispatch } from 'react';

interface IProps {
  children: ReactNode;
}

type TContext = [boolean, Dispatch<React.SetStateAction<boolean>>];

export const AuthContext = createContext([] as unknown as TContext);

export const AuthProvider: FC<IProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('auth') || 'false'));

  return <AuthContext.Provider value={[isAuth, setIsAuth]}>{children}</AuthContext.Provider>;
};
