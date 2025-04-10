import { ReactNode, useCallback, useMemo, useState } from "react";
import { NotificationContext } from "../contexts";

type Notification = {
  id: number;
  message: string;
  type: "info" | "success" | "warning" | "error";
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((message: string, type: Notification["type"]) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  }, [setNotifications]);

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  }, [setNotifications]);

  // context 값 객체도 useMemo로 메모이제이션 할 수 있다.
  // 이 세 변수 중 어느 것도 변경되지 않았을 때 context 값 객체의 참조 동일성이 유지되어 소비자 컴포넌트의 불필요한 재렌더링을 방지할 수 있다.
  const value = useMemo(() => ({ 
    notifications, 
    addNotification, 
    removeNotification 
  }), [notifications, addNotification, removeNotification]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
