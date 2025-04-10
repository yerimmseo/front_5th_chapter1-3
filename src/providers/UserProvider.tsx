import { ReactNode, useState } from "react";
import { useNotification, UserContext } from "../contexts";

type User = {
  id: number;
  name: string;
  email: string;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { addNotification } = useNotification();

  // context 같이 써도 되나? 함수 단일 원칙에 위배되나 결합이 느슨해서 괜찮...??
  const login = (email: string) => {
    setUser({ id: 1, name: "홍길동", email });
    addNotification("성공적으로 로그인되었습니다.", "success");
  };

  const logout = () => {
    setUser(null);
    addNotification("로그아웃되었습니다.", "success");
  };

  const value = { user, login, logout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
