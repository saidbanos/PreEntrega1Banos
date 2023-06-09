import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <h1>Electronics</h1>

      <ul>
        <li>Resistencias</li>
        <li>Capacitores</li>
        <li>PCBS</li>
        <li>Modulos</li>
      </ul>
    
      <CartWidget/>
      </header>
  )
}

export default NavBar