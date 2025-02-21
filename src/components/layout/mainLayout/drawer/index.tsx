"use client";
import { useRouter } from "next/navigation";
import Pages from "../../menuItems/page";
import { useState } from "react";

const Drawer = () => {
  const router = useRouter();
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleNavigation = (url: string, index: number) => {
    setSelectedButton(index);
    router.push(url);
  };

  return (
    <div
      className={`w-1/5 h-full hidden lg:block p-5 rounded-[15px] bg-gray-200`}
    >
      <div className="flex w-4/4 h-[100px] overflow-hidden justify-center items-center">
        <img src="/waffle-logo.png" alt="Waffle Logo" />
      </div>
      <nav className="flex flex-col space-y-6">
        {Pages.map((section) => (
          <div key={section.id}>
            <h2 className="text-sm font-bold mb-3">{section.title}</h2>

            <ul className="space-y-2">
              {section.children.map((item, index) => {
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleNavigation(item.url, index)}
                      className={`flex items-center space-x-2 p-2 rounded-md ${
                        selectedButton === index
                          ? "bg-brand-pink/10"
                          : "bg-gray-200 text-gray-400"
                      } hover:bg-brand-pink/10 transition-colors w-full text-left`}
                    >
                      <div
                        className={`bg-brand-pink ${
                          selectedButton === index ? "block" : "hidden"
                        } w-[5px] h-[40px] rounded-tr-lg rounded-br-lg`}
                      ></div>
                      <div
                        className={`${
                          selectedButton === index ? "text-pink-600" : ""
                        }`}
                      >
                        <item.icon />
                      </div>
                      <span
                        className={`${
                          selectedButton === index ? "text-pink-600" : ""
                        } text-sm`}
                      >
                        {item.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Drawer;
