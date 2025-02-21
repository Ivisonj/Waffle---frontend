"use client";
import { useRouter } from "next/navigation";

import Pages from "../../menuItems/page";
import { useState } from "react";

const BottomNavigation = () => {
  const router = useRouter();
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleNavigation = (url: string, index: number) => {
    setSelectedButton(index);
    router.push(url);
  };

  return (
    <div
      className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-200 rounded-[50px] p-2 flex justify-around w-4/5 max-w-md z-50
    sm:flex md:flex lg:hidden xl:hidden 2xl:hidden"
    >
      {Pages[0].children.map((item, index) => (
        <button
          key={item.id}
          type="button"
          onClick={() => handleNavigation(item.url, index)}
          className={`flex flex-col items-center space-y-1 p-2 rounded-md ${
            selectedButton === index ? "text-pink-600" : "text-gray-400"
          }  transition-colors`}
        >
          <item.icon className="text-xl" />
          <span className="text-xs">{item.title}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNavigation;
