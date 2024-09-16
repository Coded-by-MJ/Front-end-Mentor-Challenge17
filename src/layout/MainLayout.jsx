import { Outlet } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SearchCountryProvider from "../provider/SearchCountryProvider";

const MainLayout = () => {
  return (
    <SearchCountryProvider>
      <NavBar />
      <Outlet />
    </SearchCountryProvider>
  );
};

export default MainLayout;
