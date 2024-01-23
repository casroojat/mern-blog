import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';
import logo from '../assets/images/logo.png'


export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Navbar.Brand href="/">
            <img src={logo} className="mr-4 h-7 sm:h-10" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">SEKRETARIAT DAERAH KOTA BANJAR</span>
        </Navbar.Brand>
        <form>
            <TextInput
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch/>
        </Button>
        <div className="flex gap-2 md:order-2">
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon/>
            </Button>
            <Link to='/signin'>
                <Button gradientDuoTone='purpleToBlue' outline>
                    Sign In
                </Button>
            </Link>
            <Navbar.Toggle />
        </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/'>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/projects"} as={'div'}>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  )
}
