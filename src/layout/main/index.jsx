import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/index.jsx";
import RightBar from "./rightbar/index.jsx";

function MainLayout() {
  return (
    <>
      <div className="w-[1265px] mx-auto flex">
        <Sidebar />
        <main className="flex-1 flex gap-[30px]">
          <main className="flex-1 maxw-[600px] border-x border-[#2f3336]">
            <Outlet />
          </main>
          <RightBar />
        </main>
      </div>
    </>
  );
}

export default MainLayout;
