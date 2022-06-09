import React from "react";
import AuthContextProvider from "./context/AuthContextProvider";
import ContactContextProvider from "./context/ContactContextProvider";
import MyRoutes from "./MyRoutes";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        {/* <ContactContextProvider> */}
        <MyRoutes />
        {/* </ContactContextProvider> */}
      </AuthContextProvider>
    </div>
  );
};

export default App;
