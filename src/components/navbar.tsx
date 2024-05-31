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

interface MobileNavProps {
  closeSideMenu: () => void;
}

interface SingleNavItemProps {
  label: string;
  iconImage?: string;
  link?: string;
  children?: NavItem[];
  closeSideMenu?: () => void;
}

const Navbar = () => {
  const pathName = usePathname();
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);

  function toggleSideMenu() {
    setSideMenu(!isSideMenuOpen);
  }

  return (
    <div className="flex justify-between md:justify-center items-center p-4 lg:pt-9 w-full mx-auto">
      <nav
        ref={animationParent}
        className="flex flex-col xl:flex-row justify-around items-center gap-4 xl:gap-4 lg:w-full"
      >
        <div className="w-24">
          <Link href="/">
            <Image
              src={Logo}
              alt="Heraldos Cristo C.L.A"
              width={96}
              height={96}
              className="w-20 h-20 md:w-24 md:h-24 mx-auto cursor-pointer"
            />
          </Link>
        </div>
        {isSideMenuOpen && <MobileNav closeSideMenu={toggleSideMenu} />}
        <ul className="hidden md:flex items-center gap-2 transition-all font-body text-white">
          {mainMenu.map((item, index) => (
            <li
              key={index}
              className={`relative group px-3 lg:px-4 xl:px-5 py-2 transition-all hover:bg-orange-bg hover:rounded-[60px] ${
                pathName.replace(/\/[^/]+$/, "") === item.link
                  ? "bg-orange-bg rounded-[60px] text-white"
                  : ""
              }`}
            >
              <Link href={item.link ?? "#"}>
                <p className="flex cursor-pointer text-white items-center gap-1 group-hover:text-white mb-0">
                  <span>{item.label}</span>
                  {item.children && (
                    <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                  )}
                </p>
              </Link>

              {/* dropdown */}
              {item.children && (
                <ul className="absolute z-50 left-0 top-10 py-4 hidden w-auto flex-col gap-1 rounded-lg bg-white shadow-md transition-all group-hover:flex">
                  {item.children.map((child, idx) => (
                    <li
                      key={idx}
                      className="bg-white text-foreground dark:text-blue-title"
                    >
                      <Link
                        href={child.link ?? "#"}
                        className="flex justify-start cursor-pointer items-center py-2 px-4 hover:text-gray-bg hover:bg-orange-bg transition-all"
                      >
                        {child.iconImage && (
                          <Image src={child.iconImage} alt="item-icon" />
                        )}
                        <span className="whitespace-nowrap">{child.label}</span>
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
        onClick={toggleSideMenu}
        className="cursor-pointer text-4xl md:hidden text-white"
      />
    </div>
  );
};

function MobileNav({ closeSideMenu }: MobileNavProps) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-full bg-blue-bg px-4 pt-12 pb-4 font-body overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="w-24">
            <Link href="/" onClick={closeSideMenu}>
              <Image
                src={Logo}
                alt="Heraldos Cristo C.L.A"
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 mx-auto cursor-pointer"
              />
            </Link>
          </div>
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl text-white"
          />
        </div>
        <ul className="flex flex-col text-base gap-2 transition-all mt-4 text-white">
          {mainMenu.map((item, index) => (
            <li
              key={index}
              className="relative px-4 py-2 transition-all"
              onClick={item.children ? () => {} : closeSideMenu}
            >
              <SingleNavItem
                label={item.label}
                iconImage={item.iconImage}
                link={item.link}
              >
                {item.children}
              </SingleNavItem>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-4 py-8">
          <Link href="https://www.facebook.com" target="_blank">
            <RiFacebookCircleFill className="text-3xl text-white" />
          </Link>
          <Link href="https://www.youtube.com" target="_blank">
            <RiYoutubeFill className="text-3xl text-white" />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

function SingleNavItem({
  label,
  iconImage,
  link,
  children,
  closeSideMenu,
}: SingleNavItemProps) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItemOpen] = useState(false);

  function toggleItem() {
    setItemOpen(!isItemOpen);
  }

  function closeItem() {
    setItemOpen(!isItemOpen);
  }

  function closeMenu() {
    closeSideMenu!();
  }

  return (
    <>
      <Link ref={animationParent} onClick={closeItem} href={link ?? "#"}>
        <p className="flex cursor-pointer items-center gap-2 group-hover:text-red-500 mb-0">
          <span>{label}</span>
          {children && (
            <IoIosArrowDown
              className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}
            />
          )}
        </p>
      </Link>
      {isItemOpen && children && (
        <div className="w-auto flex-col gap-2 rounded-lg py-3 transition-all flex">
          {children.map((child, index) => (
            <Link
              key={index}
              onClick={closeMenu}
              href={child.link ?? "#"}
              className="flex cursor-pointer items-center py-2 px-4 transition-all"
            >
              {child.iconImage && (
                <Image src={child.iconImage} alt="item-icon" />
              )}
              <span className="whitespace-nowrap">{child.label}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
