import logo from '../assets/imgs/pallete.ico';
import { Link, NavLink } from 'react-router-dom';


export function AppHeader() {
   return <header className='main-layout'>
      <div className='app-header'>
         <Link className='logo-container' to='/'>
            <img src={logo} className="logo" alt="logo" />
            <span>Color Mania</span>
         </Link>

         {/* <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
         </nav> */}
      </div>
   </header>
}