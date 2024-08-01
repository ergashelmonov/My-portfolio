import Logo from "../../assets/svg/logo.svg";
import { NavLink } from "react-router-dom";

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
  return (
    <>
      <header className='flex max-w-[1120px] w-full justify-between p-[32px_0_8px_0] select-none'>
        <div className="flex items-center justify-center gap-2">
          <Logo className="w-[16px] h-[16px] fill-[#fff]" />
          <h1 className="font-bold text-white text-[16px]">Ergash Ali</h1>
        </div>
        <nav className="flex items-center justify-center gap-2">
          <ul className="flex items-center justify-center gap-8">
            {navData.map(({ id, text, path }) => {
              return (
                <li key={id} className='font-medium text-primary text-[16px]'>
                  #<NavLink className={({ isActive, isPending }) =>
                    isPending ? "text-[#999]" : isActive ? "text-white font-medium" : "text-gray font-normal"} to={path}>{text}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
