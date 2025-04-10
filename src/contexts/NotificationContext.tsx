import { createContext, useContext } from "react";

type Notification = {
  id: number;
  message: string;
  type: "info" | "success" | "warning" | "error";
};

type NotificationContextProps = {
  notifications: Notification[];
  addNotification: (message: string, type: Notification["type"]) => void;
  removeNotification: (id: number) => void;
};

export const NotificationContext =
  createContext<NotificationContextProps | null>(null);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};
