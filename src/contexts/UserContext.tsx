import { createContext, useContext } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type UserContextProps = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextProps | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};
