import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="w-full h-[300px] lg:h-[60px] bg-gray-200 lg:bg-brand-white lg:rounded-[50px] lg:p-1 text-white flex flex-col lg:flex-row items-center justify-center lg:justify-end lg:px-4">
      <div className="w-full flex items-center justify-between lg:justify-start lg:px-0">
        <img
          className="lg:hidden block h-12 w-auto"
          src="/waffle-logo.png"
          alt="Waffle Logo"
        />
        <Avatar style={{ marginRight: "13px" }}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-auto lg:block hidden text-black">
          <p className="text-base">Olá,</p>
          <h1 className="text-lg font-bold">ivison@test.com</h1>
        </div>
      </div>
      <div className="w-full px-4 py-3 lg:hidden block text-black">
        <p className="text-base">Olá,</p>
        <h1 className="text-lg font-bold">ivison@test.com</h1>
      </div>
    </header>
  );
};

export default Header;
