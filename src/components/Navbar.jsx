"use client";
import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { mobileMenu, mobileMenuItem } from "@/animation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  const openMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header className="py-6 absolute top-0 left-0 w-full z-30">
      <div className="container">
        <div className="header_inner flex justify-between items-center">
          <div className="menus_desk hidden md:flex gap-4 w-1/3">
            {navLinks.map((item, index) => (
              <Link
                className={`rounded p-1 ${
                  pathName === item.link && "bg-black text-white"
                }`}
                key={index}
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Logo */}
          <div className="flex md:hidden lg:justify-center lg:flex logo w-1/3">
            <div className="logo_main">
              <Link
                href="/"
                className="text-md bg-black rounded-md p-2 font-semibold text-white"
              >
                Krishan
              </Link>
            </div>
          </div>
          <div className=" hidden md:flex gap-4 items-center justify-end w-1/3">
            <Link href="https://github.com/Krishan17212" target="_blank">
              <Image src="/github.png" width={24} height={24} alt="github" />
            </Link>
            <Link
              href="https://www.instagram.com/kkprabhakar1008/"
              target="_blank"
            >
              <Image
                src="/instagram.png"
                width={24}
                height={24}
                alt="instagram"
              />
            </Link>
            <Link href="www.linkedin.com/in/krishan-kumar04" target="_blank">
              <Image
                src="/linkedin.png"
                width={24}
                height={24}
                alt="linkedin"
              />
            </Link>
          </div>
          {/* Responsive Menu */}
          <div className=" block md:hidden">
            {/* Menu Button */}
            <button
              onClick={openMenu}
              className={`text-4xl leading-none z-30 relative flex items-center justify-center ${
                open ? "text-white" : ""
              }`}
            >
              {open ? <IoClose /> : <LuMenu />}
            </button>

            {/* Menu Items */}
            {open && (
              <motion.div
                variants={mobileMenu}
                initial="closed"
                animate="opened"
                className={`menu_holder flex md:hidden flex-col z-20 justify-center items-center gap-4 fixed top-0 left-0 bg-black w-full h-full`}
              >
                {navLinks.map((item, index) => (
                  <motion.div variants={mobileMenuItem}>
                    <Link
                      className="font-medium text-4xl p-2 text-white"
                      key={index}
                      href={item.link}
                      onClick={openMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
