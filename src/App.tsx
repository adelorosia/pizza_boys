import { NavLink, Outlet } from "react-router-dom"
const App = () => {
  return (
<div className="wrapper">
<header>
     <NavLink to="/home">go to home</NavLink>
     <NavLink to="/about">go to about</NavLink>
  </header>
  <main>
    <Outlet />
  </main>
</div>
  )
}

export default App