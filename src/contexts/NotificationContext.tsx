import { createContext, ReactNode, useContext, useState } from "react";

type Notification = {
  id: number;
  message: string;
  type: "info" | "success" | "warning" | "error";
}

type NotificationContextProps = {
  notifications: Notification[];
  addNotification: (message: string, type: Notification["type"]) => void;
  removeNotification: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextProps | null>(null);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string, type: Notification["type"]) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  const value = { notifications, addNotification, removeNotification };

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};