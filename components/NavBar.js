import Image from "next/image";
import Link from "next/link";
import logoDark from "../public/images/cute.png";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";


function Header  ()  {
  const router = useRouter();
  const handleCategoryClick = (category) => {
    router.push(`/category/${category}`);
  };


  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4 ">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={150} height={130} src={logoDark} alt="cute" />
          </div>
        </Link>
        <div>
          <ul className="hidden lg:inline-flex gap-8  text-sm font-semibold">
            <li className="">
            <Link href="/" >Home</Link>
            </li>
            
            <li className="">
            <button
                  className="nav"
                  onClick={() => handleCategoryClick("Style")}
                >
                  Style
                </button>
            </li>

            <li className="">
            <button
                  className="nav"
                  onClick={() => handleCategoryClick("Travel")}
                >
                  Travel
                </button>
            </li>
            <li className="headerLi">
            <button
                  className="nav"
                  onClick={() => handleCategoryClick("Sports")}
                >
                  Sports
                </button>
            </li>
            
            <li className="headerLi">
            <button
                  className="nav"
                  onClick={() => handleCategoryClick("Health")}
                >
                  Health
                </button>
            </li>
            <li className="headerLi">
            <button
                  className="nav"
                  onClick={() => handleCategoryClick("Entertainment")}
                >
                  Entertainment
                </button>
            </li>
            <li className="headerLi">
            <button
                  className="nav"
                  onClick={() => handleCategoryClick("Politik")}
                >
                  Politic
                </button>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-8 text-lg">
          
        <div className="flex items-center md:space-x-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                title="Search"
                className="p-1 focus:outline-none focus:ring"
              >
              </button>
            </span>
          </div>
          <button className="uppercase text-sm border-[1px] border-black hover:border-secondaryColor px-4 py-1 font-semibold hover:text-violet-800 rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-violet-400">
            <Link href ="/contact">Join Us</Link>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
          }

export default Header;
