// components/Header.tsx

import React from "react";
import Link from "next/link";

import UserButton from "@/components/user-button";

const Header = () => {
  return (
    <header className="p-5">
      <div className="mx-auto text-center">
        <UserButton />
        <Link className="mx-5 underline " href={"/"}>
          Home
        </Link>
        <Link className="mx-5 underline " href={"/dashboard"}>
          dashboard
        </Link>
      </div>
    </header>
  );
};

export default Header;
