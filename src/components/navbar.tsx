"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "~/logo.jpeg";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { RiFacebookCircleFill, RiYoutubeFill } from "react-icons/ri";
import { NavItem, mainMenu } from "@/data/main-menu";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ModeToggle } from "./toggle-mode";

const Navbar = () => {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);

  function openSideMenu() {
    setSideMenue(true);
  }

  function closeSideMenu() {
    setSideMenue(false);
  }
  return (
    <div className="flex justify-between md:justify-center items-center p-4 container w-full mx-auto">
      <nav
        ref={animationParent}
        className="flex flex-col lg:flex-row justify-around items-center gap-4 xl:gap-8 lg:w-full"
      >
        <div className="flex-1 w-28">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              width={120}
              height={120}
              className="w-auto h-auto"
            />
          </Link>
        </div>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <ul className="hidden md:flex items-center gap-2 xl:gap-4 transition-all font-body">
          {mainMenu.map((d, i) => (
            <li key={i} className="relative group px-2 py-3 transition-all">
              <Link key={i} href={d.link ?? "#"}>
                <p className="flex cursor-pointer items-center gap-2 group-hover:text-red-500 mb-0">
                  <span>{d.label}</span>
                  {d.children && (
                    <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                  )}
                </p>
              </Link>

              {/* dropdown */}
              {d.children && (
                <ul className="absolute left-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-secondary py-3 shadow-md transition-all group-hover:flex">
                  {d.children.map((ch, i) => (
                    <li key={i}>
                      <Link
                        href={ch.link ?? "#"}
                        className="flex justify-start cursor-pointer items-center py-1 px-4 hover:text-red-500"
                      >
                        {ch.iconImage && (
                          <Image src={ch.iconImage} alt="item-icon" />
                        )}
                        <span className="whitespace-nowrap">{ch.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <Link href="https://www.facebook.com" target="_blank">
            <RiFacebookCircleFill className="text-2xl text-primary-50 hover:text-primary-300" />
          </Link>
          <Link href="https://www.youtube.com" target="_blank">
            <RiYoutubeFill className="text-2xl text-primary-50 hover:text-primary-300" />
          </Link>
          <ModeToggle />
        </div>
      </nav>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
};

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[70%] bg-white px-4 pt-12 pb-4 font-body">
        <div className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </div>
        <ul className="flex flex-col text-base gap-2 transition-all">
          {mainMenu.map((d, i) => (
            <li key={i} className="relative p-4 transition-all">
              <SingleNavItem
                label={d.label}
                iconImage={d.iconImage}
                link={d.link}
              >
                {d.children}
              </SingleNavItem>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-4">
          <Link href="https://www.facebook.com" target="_blank">
            <RiFacebookCircleFill className="text-2xl text-primary-50 hover:text-primary-300" />
          </Link>
          <Link href="https://www.youtube.com" target="_blank">
            <RiYoutubeFill className="text-2xl text-primary-50 hover:text-primary-300" />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <>
      <Link ref={animationParent} onClick={toggleItem} href={d.link ?? "#"}>
        <p className="flex cursor-pointer items-center gap-2 group-hover:text-red-500 mb-0">
          <span>{d.label}</span>
          {d.children && (
            <IoIosArrowDown
              className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}
            />
          )}
        </p>
      </Link>
      {isItemOpen && d.children && (
        <div className="w-auto flex-col gap-2 rounded-lg py-3 transition-all flex">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center py-2 px-4 hover:text-red-500 transition-all"
            >
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              <span className="whitespace-nowrap">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
