import { auth } from "@/auth";

import Drawer from "./drawer";
import Header from "./header";
import BottomNavigation from "./bottomNavigation";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  return (
    <div className="w-screen h-screen flex lg:p-3 bg-white lg:gap-3">
      <Drawer />
      <div className="w-full lg:w-4/5 h-full lg:p-5 flex flex-col lg:rounded-[15px] lg:bg-gray-200 lg:gap-3">
        <Header email={session?.user.email!} />
        <div className="w-[100%] h-[100%] lg:bg-brand-white lg:rounded-[20px] lg:p-1 text-black flex overflow-y-auto">
          {children}
        </div>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default MainLayout;
