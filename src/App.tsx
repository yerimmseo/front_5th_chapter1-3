import React, { useState } from "react";
import { generateItems } from "./utils";
import { NotificationProvider, ThemeProvider, UserProvider, useTheme } from "./contexts";
import { ComplexForm, Header, ItemList, NotificationSystem } from "./components";

// 메인 App 컴포넌트
const App: React.FC = () => {
  const [items, setItems] = useState(generateItems(1000));

  // provider로 둘러싸져있어야 훅을 호출할 수 있음...!!
  const { theme } = useTheme();

  const addItems = () => {
    setItems((prevItems) => [
      ...prevItems,
      ...generateItems(1000, prevItems.length),
    ]);
  };

  return (
    <NotificationProvider>
      <UserProvider>
          <div
            className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}
          >
            <Header />
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-4">
                  <ItemList items={items} onAddItemsClick={addItems} />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <ComplexForm />
                </div>
              </div>
            </div>
            <NotificationSystem />
          </div>
      </UserProvider>
    </NotificationProvider>
  );
};

// Provider들 끼리 묶을 수 있을 거 같음
const Root: React.FC = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default Root;
