import Info from "./Info/Info"
import Logo from "./Logo/Logo"
import Nav from "./Nav/Nav"


function Header({wish , cart , otherChangeamount , delpro}) {
  return (
    <div className='Header'>
      <Info/>
      <Logo delpro={delpro} otherChangeamount={otherChangeamount} cart={cart}/>
       <Nav wish={wish} /> 
    </div>
  )
}


export default Header
