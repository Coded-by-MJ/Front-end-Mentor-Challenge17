import MoonIcon from "./MoonIcon"
import useDarkMode from "./useDarkMode";
import { Link }  from "@tanstack/react-router";

const NavBar = () => {

  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };




  return (
    <header className="flex mb-[3px] translate-all justify-between shadow-md shadow-slate-500/10 dark:shadow-slate-800/10
    items-center w-full p-5 h-[80px] bg-white dark:bg-dark-blue"
    >
        <Link to="/"
        className="text-very-dark-blue-text text-md font-extrabold dark:text-white no-underline">
            Where in the world?
        </Link>
         <button className="flex gap-2 items-center"
          onClick={toggleDarkMode}
         >
            <MoonIcon />
             <span
             className="text-very-dark-blue-text text-sm font-semibold dark:text-white"
             >Dark Mode</span>
         </button>
    </header>
  )
}

export default NavBar