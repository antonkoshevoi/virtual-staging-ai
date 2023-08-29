import React from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "./Container";

const Header = () => {
  return (
    <header className="h-24 w-full bg-black flex items-center">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" className="w-48 h-16 relative block">
            <Image src="./logo.svg" fill alt="logo" />
          </Link>
          <div className="flex h-10">
            <Link
              href="/create"
              className="text-white flex items-center p-1 hover:text-red-600 transition-colors after:w-[1px] after:h-full after:bg-red-600 after:ml-2"
            >
              Create new
            </Link>
            <Link
              href="/results"
              className="text-white flex items-center p-1 hover:text-red-600 transition-colors"
            >
              My Results
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
