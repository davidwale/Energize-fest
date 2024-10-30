"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import WebNav from "./WebNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();

  return (
    <nav>
      <WebNav openNav={openNav} toggleNav={toggleNav} />
      <MobileNav openNav={openNav} toggleNav={toggleNav} />
    </nav>
  );
};

export default Navbar;
