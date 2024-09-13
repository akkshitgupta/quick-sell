import { createContext, useContext, useEffect, useState } from "react";

export const DisplayContext = createContext(null);

export function useDisplay() {
  const context = useContext(DisplayContext);
  if (!context)
    throw new Error("useDisplay must be used within a DisplayProvider");

  return context;
}

export function DisplayProvider({ children }) {
  const store = localStorage.getItem("display");
  const [display, setDisplay] = useState(
    store
      ? JSON.parse(store)
      : {
          group: "status",
          order: "priority",
        }
  );

  useEffect(() => {
    localStorage.setItem("display", JSON.stringify(display));
  }, [display]);

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
}
