import React from "react";
import {
  ComplexForm,
  ItemList,
} from "./components";
import { AppProviders } from "./providers";
import { Layout } from "./components/Layout";

// 메인 App 컴포넌트
const App: React.FC = () => {
  // Theme Provider로 둘러싸져있어야 훅을 호출할 수 있음...!!-> 지금 외부에서 호출중 ..
  // const { theme } = useTheme();

  return (
    <AppProviders>
      {/* <div
        className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}
      > */}
      {/* <Header /> */}
      {/* <div className="container mx-auto px-4 py-8"> */}
      <Layout>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <ItemList />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <ComplexForm />
          </div>
        </div>
      </Layout>
      {/* </div> */}
      {/* <NotificationSystem /> */}
      {/* </div> */}
    </AppProviders>
  );
};

export default App;
