import Logo from "../../assets/svg/logo.svg";
import Burger from "../../assets/svg/burger.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
const navData = [
  {
    id: 1,
    text: "Bosh Sahifa",
    path: "/",
  },
  {
    id: 2,
    text: "Loyihalarim",
    path: "/projects",
  },
  {
    id: 3,
    text: "Men Haqimda",
    path: "/about",
  },
  {
    id: 4,
    text: "Bog'lanish",
    path: "/contacts",
  },
];

const Header = () => {
  const [nav, setNav] = useState(false);
  let close = () => {
    document.body.style.overflow = "scroll";
    setNav(false);
  };

  return (
    <>
      <header className="flex max-w-[1120px] w-full justify-between p-[32px_0_8px_0] select-none flex-shrink-0">
        <Link to="/">
          <div className="flex items-center justify-center gap-2">
            <Logo className="w-[16px] h-[16px] fill-[#fff]" />
            <h1 className="font-bold text-white text-[16px]">Ergash Ali</h1>
          </div>
        </Link>
        <nav className="flex items-center justify-center gap-2">
          <ul className="flex items-center justify-center gap-8 max-[802px]:hidden">
            {navData.map(({ id, text, path }) => {
              return (
                <li key={id} className="font-medium text-primary text-[16px]">
                  #
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-[#999]"
                        : isActive
                        ? "text-white font-medium"
                        : "text-gray font-normal"
                    }
                    to={path}
                  >
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div
            onClick={() => close()}
            className={
              (nav ? "flex" : "hidden") +
              " w-full flex-col h-screen fixed top-0 left-0 bg-background z-20 items-start"
            }
          >
            <div className="p-5 flex justify-between items-center w-full">
              <Link to="/">
                <div className="flex items-center justify-center gap-2 ">
                  {" "}
                  <Logo className="w-[36px] h-[36px] fill-[#fff]" />
                  <h1 className="font-bold text-white text-3xl">Ergash Ali</h1>
                </div>
              </Link>
              <IoCloseSharp
                fill="#fff"
                className="w-9 h-9"
                onClick={() => close()}
              />
            </div>
            <ul className="p-4 flex flex-col gap-8" onClick={() => close()}>
              {navData.map(({ id, text, path }) => {
                return (
                  <li key={id} className="font-medium text-primary  text-4xl">
                    #
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "text-[#999]"
                          : isActive
                          ? "text-white font-medium text-4xl"
                          : "text-gray font-normal text-4xl"
                      }
                      to={path}
                    >
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <Burger
            className="min-[803px]:hidden"
            onClick={() => {
              setNav(true);
              document.body.style.overflow = "hidden";
            }}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
