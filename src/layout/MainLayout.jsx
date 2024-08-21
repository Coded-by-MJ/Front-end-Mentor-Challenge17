import { Outlet } from "@tanstack/react-router"
import NavBar from "../components/NavBar"

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default MainLayout