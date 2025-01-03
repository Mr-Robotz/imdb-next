import React from "react";
import MenuItem from "@/components/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "@/components/DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" address="/" icon={<AiFillHome />} />
        <MenuItem
          title="About"
          address="/about"
          icon={<BsFillInfoCircleFill />}
        />
      </div>
      <div className="flex gap-4 items-center">
        <DarkModeSwitch />
        <Link href="/" className="flex gap-1 items-center ">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDb
          </span>
          <span className="text-2xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
