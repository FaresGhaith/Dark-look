import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'

function Layout({wish , cart , otherChangeamount , delpro}) {
  return (
<>
<Header delpro={delpro} otherChangeamount={otherChangeamount} wish={wish} cart={cart} />
<Outlet/>
<Footer/>
</>
  )
}

export default Layout
