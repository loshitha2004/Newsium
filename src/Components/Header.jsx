import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="h-16 font-Poppins bg-Primary flex items-center justify-between sticky top-0">
      <div className="text-white px-2">
        <p className="font-Monoton text-2xl tracking-widest  ">Newsium <span className="text-sm">.io</span></p>
        <p className="text-[10px]">Wide catogery of news in one place</p>
      </div>
      <div className="text-white hidden md:block">
        <Link to="/" className="px-2">
          Technology
        </Link>
        <Link to="anime" className="px-2">
          Anime
        </Link>
        <Link to="space" className="px-2">
          Space
        </Link>
        <Link to="buisness" className="px-2">
          Business
        </Link>
        <Link to="stock" className="px-2">
          Stock
        </Link>
      </div>
      <div className="block md:hidden text-white ">
        <Hamburger toggled={showMenu} toggle={setShowMenu} size={25} />
      </div>
      <nav
        className={
          "bg-Primary w-2/3 h-screen md:hidden flex flex-col absolute text-white  transition-all top-16 duration-500 ease-in-out" +
          (showMenu ? " -left-0" : " -left-full")
        }
      >
        <Link
          className="px-4 my-2 py-2 text-lg active:bg-zinc-200 active:bg-opacity-35 active:rounded-lg"
          onClick={handleClick}
          to="/"
        >
          Technology
        </Link>
        <Link
          className="px-4 my-2 py-2 text-lg active:bg-zinc-200 active:bg-opacity-35 active:rounded-lg"
          onClick={handleClick}
          to="anime"
        >
          Anime
        </Link>
        <Link
          className="px-4 my-2 py-2 text-lg active:bg-zinc-200 active:bg-opacity-35 active:rounded-lg"
          onClick={handleClick}
          to="space"
        >
          Space
        </Link>
        <Link
          className="px-4 my-2 py-2 text-lg active:bg-zinc-200 active:bg-opacity-35 active:rounded-lg"
          onClick={handleClick}
          to="buisness"
        >
          business
        </Link>
        <Link
          className="px-4 my-2 py-2 text-lg active:bg-zinc-200 active:bg-opacity-35 active:rounded-lg"
          onClick={handleClick}
          to="stock"
        >
          Stock
        </Link>
      </nav>
    </div>
  );
};

export default Header;
