"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "~/images/logo-heraldos-de-cristo.png";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { RiFacebookCircleFill, RiYoutubeFill } from "react-icons/ri";
import { NavItem, mainMenu } from "@/data/main-menu";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ModeToggle } from "./toggle-mode";

const Navbar = () => {
  const pathName = usePathname();
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);

  function openSideMenu() {
    setSideMenue(true);
  }

  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="flex justify-between md:justify-center items-center p-4 lg:pt-9 w-full mx-auto">
      <nav
        ref={animationParent}
        className="flex flex-col xl:flex-row justify-around items-center gap-4 xl:gap-4 lg:w-full"
      >
        <div className="w-24">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Heraldos Cristo C.L.A"
              width={96}
              height={96}
              className="w-20 h-20 md:w-24 md:h-24 mx-auto cursor-pointer"
            />
          </Link>
        </div>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <ul className="hidden md:flex items-center gap-2 transition-all font-body text-white">
          {mainMenu.map((d, i) => (
            <li
              key={i}
              className={`relative group px-3 lg:px-4 xl:px-5 py-2 transition-all hover:bg-orange-bg hover:rounded-[60px] ${
                pathName.replace(/\/[^/]+$/, "") === d.link
                  ? "bg-orange-bg rounded-[60px] text-white"
                  : ""
              }`}
            >
              <Link key={i} href={d.link ?? "#"}>
                <p className="flex cursor-pointer items-center gap-1 group-hover:text-white mb-0">
                  <span>{d.label}</span>
                  {d.children && (
                    <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                  )}
                </p>
              </Link>

              {/* dropdown */}
              {d.children && (
                <ul className="absolute z-50 left-0 top-10 py-4 hidden w-auto flex-col gap-1 rounded-lg bg-white shadow-md transition-all group-hover:flex">
                  {d.children.map((ch, i) => (
                    <li
                      key={i}
                      className="bg-white text-foreground dark:text-blue-title"
                    >
                      <Link
                        href={ch.link ?? "#"}
                        className="flex justify-start cursor-pointer items-center py-2 px-4 hover:text-gray-bg hover:bg-orange-bg transition-all"
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
        <div className="hidden lg:flex items-center gap-4 text-gray-txt">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="hidden lg:block"
          >
            <RiFacebookCircleFill className="w-8 h-8 hover:scale-110 hover:text-orange-bg" />
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            className="hidden lg:block"
          >
            <RiYoutubeFill className="w-8 h-8 hover:scale-110 hover:text-orange-bg" />
          </Link>
          <ModeToggle />
        </div>
      </nav>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden text-white"
      />
    </div>
  );
};

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[70%] sm:w-[50%] md:w-[45%] bg-gray-bg px-4 pt-12 pb-4 font-body overflow-auto">
        <div className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </div>
        <ul className="flex flex-col text-base gap-2 transition-all">
          {mainMenu.map((d, i) => (
            <li key={i} className="relative px-4 py-2 transition-all">
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
              className="flex cursor-pointer items-center py-2 px-4 transition-all"
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
