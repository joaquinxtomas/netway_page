import React from 'react'
import logo from '../assets/img/solo_logo.png'

import logoAndName from '../assets/img/logue_and_name.png'
import { AiOutlineWhatsApp } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className='bg-gray-100 w-full h-16'>
            <aside className='navbar-container items-center h-full'>
                <div className='pl-2'>
                    <img className='w-16' src={logo} />
                </div>
                <div>
                    <div className='container-navbar-menu'>
                        <ul className='flex justify-around items-center'>
                            <li className='mr-2'>
                                <a className='links' href='#'>Inicio</a>
                            </li>
                            <li className='mr-2'>
                                <a className='links' href='#'>Planes</a>
                            </li>
                            <li className='mr-2'>
                                <a className='links' href='#'>Ayuda</a>
                            </li>
                            <li className='mr-2'>
                                <a className='links' href='#'>Inicio</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pr-2 w-20 wpp-logo-container'>
                    <a href='#'>
                        <AiOutlineWhatsApp className='text-4xl bg-gray-200 fixed top-3 right-2 whatsapp_logo' />
                    </a>
                </div>
            </aside>
        </nav>
    )
}

export default Navbar