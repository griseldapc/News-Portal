import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar } from "flowbite-react";

function Nav() {
  const router = useRouter();
  const handleCategoryClick = (category) => {
    router.push(`/category/${category}`);
  };

  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="/images/cute.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Berita Kosong
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>

          <Navbar.Link >
            <button
              className="nav"
              onClick={() => handleCategoryClick("Style")}
            >
              Style
            </button>
          </Navbar.Link>
          <Navbar.Link>
          <button
              className="nav"
              onClick={() => handleCategoryClick("Travel")}
            >
              Travel
            </button>
          </Navbar.Link>
          <Navbar.Link>
          <button
              className="nav"
              onClick={() => handleCategoryClick("Sports")}
            >
              Sports
            </button>
          </Navbar.Link>
          <Navbar.Link>
          <button
              className="nav"
              onClick={() => handleCategoryClick("Health")}
            >
              Health
            </button>
          </Navbar.Link>
          <Navbar.Link>
          <button
              className="nav"
              onClick={() => handleCategoryClick("Entertainment")}
            >
              Entertainment
            </button>
          </Navbar.Link>
          <Navbar.Link>
          <button
              className="nav"
              onClick={() => handleCategoryClick("Politik")}
            >
              Politik
            </button>
          </Navbar.Link>
          <button className="uppercase text-sm border-[1px] border-black hover:border-secondaryColor px-4 py-1 font-semibold hover:text-violet-800 rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-violet-400">
            <Link href ="/contact">Join Us</Link>
          </button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav;
