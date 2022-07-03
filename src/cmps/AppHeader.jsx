import logo from '../assets/imgs/check.png';
import { Link, NavLink } from 'react-router-dom';


export function AppHeader() {
   return <header className='main-layout'>
      <div className='app-header'>
         <Link className='logo-container' to='/'>
            <img src={logo} className="logo" alt="logo" />
            <span>ColorMania</span>
         </Link>

         <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
         </nav>
      </div>
   </header>
}