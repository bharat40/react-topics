import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="bg-zinc-800 h-screen">
      <Header />
      <Outlet />
    </div>
  );
};
export default AppLayout;
