"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const WebNav = ({ toggleNav,openNav}) => {
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
    <section
      className={`top-0 w-full px-6 py-3 hidden md:block ${
        isSticky
          ? "fixed top-0 z-50 transparentNavbar text-white shadow-lg"
          : "absolute top-0 z-50 glassyNavbar text-white"
      } transition-colors duration-300`}
    >
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src="/assets/Images/energize-1.png"
            alt="Logo"
            width={150}
            height={150}
            objectFit="contain"
          />
        </Link>

        <ul className="hidden md:flex justify-between items-center w-1/4">
          {[
            ["Events", "/events", 1],
            ["Host an event", "/hostings", 2],
          ].map(([title, url, id]) => {
            return (
              <Link
                key={id}
                href={url}
                className="hover:text-yellow hover:ease-in duration-300 font-bold cursor-pointer"
              >
                {title}
              </Link>
            );
          })}
          <button
            onClick={() => router.push("/sponsorship")}
            className="font-bold px-4 py-3 bg-yellow text-white rounded-full hover:border-2 hover:bg-black hover:text-yellow hover:ease-in duration-300 border border-yellow"
          >
            Sponsorship
          </button>
        </ul>

        <button onClick={toggleNav} className="block lg:hidden font-bold">
          Menu
        </button>
      </div>
    </section>
  );
};

export default WebNav;
