import { NavLink } from 'react-router-dom';
import Logo from '../assets/green_logo.png';


interface NavLinks{
    name: string
    route: string
}

const navs: NavLinks[] = [
    {name : 'Home', route: '/'},
    {name: 'About', route: '/about'},
    {name: 'Services', route: '/services'},
    {name: 'Gardens', route: '/routes'},
    {name: 'Plants', route: '/plants'},
    {name: 'Leased', route: '/lease'}
]

export default function NavBar(){
    return(
        <nav className='bg-white z-100 sticky w-5/6 font-text font-medium mx-auto p-2.5 px-8 items-center rounded-4xl mt-8 flex justify-between' id='navbar'>
            <img src={Logo} className='h-10'/>

            <ul className='flex mx-auto gap-6.5 outline-0 cursor-pointer'>
                {
                    navs.map(({name, route}: NavLinks)=><li className='hover:text-green-600 text-bgGreen' id={name}>
                        <NavLink className={({ isActive }) => isActive ? 'text-green-600' : ''} to={route}>{name}</NavLink>
                    </li>)
                }
            </ul>

            <div className='flex gap-5'>
                <button className='text-bgGreen cursor-pointer '>Login</button>
                <button className='bg-bgGreen cursor-pointer text-limeTxt px-6 py-2 font-btnText rounded-tl-3xl rounded-br-3xl'>Sign up</button>
            </div>
        </nav>
    )
}