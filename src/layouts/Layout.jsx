import { Outlet } from 'react-router-dom'
import MainNav from '../components/mainMenu/MainNav' 
import Footer from '../components/mainMenu/Footer'
const Layout = () => {
  return (
    <div>
      <MainNav />
      <Outlet />
      <Footer />
    </div>
  )
}
export default Layout