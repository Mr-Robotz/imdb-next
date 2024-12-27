import React from "react";
import Link from "next/link";

const MenuItem = ({ title, address, icon }) => {
  return (
    <Link href={address} className="hover:text-amber-500"> 
      <p className="text-2xl sm:hidden">{icon}</p>
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
};

export default MenuItem;
