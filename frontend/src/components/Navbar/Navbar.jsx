import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import AnimateBtn from "../Buttons/AnimateBtn";
import Menu from "./Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsMenuOpen(true)}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 w-fit h-10 p-1 flex items-center justify-end gap-2 bg-[#f4efe7] rounded-4xl z-50 cursor-pointer group transition-all duration-500"
      >
        <div>
          <div className="pl-4 text-[#2a2725]">
            <AnimateBtn btnName="Menu" />
          </div>
        </div>
        <div className="bg-[#2a2725] rounded-full p-2">
          <IoMdMenu className="text-[#b1a696] transition-transform duration-500 group-hover:rotate-[360deg]" />
        </div>
      </div>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
