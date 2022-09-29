import { createContext, useState } from "react";

export const DashboardContext = createContext();

export default function DashboardData({ children }) {
  const [dashboardPath, setDashboardPath] = useState(window.location.pathname);

  return (
    <DashboardContext.Provider value={{ dashboardPath, setDashboardPath }}>
      {children}
    </DashboardContext.Provider>
  );
}
