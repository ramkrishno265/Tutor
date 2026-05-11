import Header from "../src/assets/component/header"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout