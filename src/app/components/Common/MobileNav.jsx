import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const MobileNav = ({toggleNav, openNav}) => {
  return (
    <section className={"block md:hidden "}>
      <div
        className={
          openNav
            ? "hidden"
            : "flex justify-between fixed items-center top-0 z-50 transparentNavbar w-full px-6 py-3 "
        }
      >
        <Image
          src="/assets/Images/icons/harmbuger-menu.png"
          alt="harmbuger"
          width={40}
          height={40}
          objectFit="contain"
          onClick={toggleNav}
        />
        <Link href={"/"}>
          <Image
            src="/assets/Images/energize-1.png"
            alt="Logo"
            width={150}
            height={150}
            objectFit="contain"
          />
        </Link>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-black text-white z-50 pl-8 pt-8 transform ${
          openNav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center w-11/12 justify-between">
          <Image
            src="/assets/Images/icons/back-arrow.png"
            alt="harmbuger"
            width={50}
            height={50}
            objectFit="contain"
            onClick={toggleNav}
            className=""
          />
          <Link href={"/"}>
            <Image
              src="/assets/Images/energize-1.png"
              alt="Logo"
              width={150}
              height={150}
              objectFit="contain"
              className=""
            />
          </Link>
        </div>

        <ul className="flex flex-col mt-12 space-y-8">
          {[
            ["Home", "/", 1],
            ["Events", "/events", 2],
            ["Host an event", "/hostings", 3],
          ].map(([title, url, id]) => {
            return (
              <Link
                key={id}
                href={url}
                className="hover:text-yellow hover:ease-in duration-300 font-bold text-xl cursor-pointer"
              >
                {title}
              </Link>
            );
          })}
          <button
            onClick={() => router.push("/sponsorship")}
            className="font-bold text-xl px-2 py-3 w-[70%] bg-yellow text-white rounded-full hover:border-2 hover:bg-black hover:text-yellow hover:ease-in duration-300 border border-yellow"
          >
            Sponsorship
          </button>
        </ul>
      </div>
    </section>
  );
};

export default MobileNav