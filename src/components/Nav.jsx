import { navLinks } from "../constants";
import { ARlogo } from "../assets";
import Switcher from "./Switcher";

const Nav = () => {
  return (
    <header
      data-aos="fade-down"
      data-aos-duration="1000"
      className="fixed top-0 left-0 right-0 padding-x py-5 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-sm"
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={ARlogo} className="md:ml-10" width={50} alt="Ayush" />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg hover:text-red-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-5">
          <Switcher />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
