import Drawer from "./drawer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex p-2 bg-white gap-2">
      <Drawer />
      <div className="w-4/5 h-full p-5 flex flex-col rounded-[15px] bg-gray-200">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
