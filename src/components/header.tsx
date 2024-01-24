'use client'

import { useState } from "react"
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from "next/image";
import { Button } from "./ui/button";

export default function HeaderComponent() {

  const [open, setOpen] = useState(false)

  const Links = [
    { name: "Home", link: "#home" },
    { name: "Contact Us", link: "#appointment" },
    { name: "Services", link: "#services" },
    { name: "About Us", link: "#about" },
  ];

  const handleScrollTopTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }  

  return (
    <div className='sticky w-full top-0 left-0 text-zinc-200 font-poppins z-[9] shadow-lg'>
      <div className='md:flex items-center justify-between bg-stone-600 py-2 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <Image src={'/logo.png'} alt="Angela" width={60} height={60} className="rounded-full" onClick={handleScrollTopTop}  />
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {
            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>
        {/* linke items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? 'top-24 bg-stone-600' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li className='md:ml-8 md:my-0 my-7 text-md' key={link.name}>
                <a href={link.link} className=''>{link.name}</a>
              </li>))
          }
        </ul>
        {/* button */}
        <Button className={`border-[1px] border-white bg-stone-600 md:ml-8 font-medium text-sm px-5 py-1 rounded-3xl md:static ${open ? 'absolute mt-[16.2rem] ml-1' : 'hidden md:block'} `}>
          <a target="_blank" href={'https://wa.me/+351925390389?text=Olá%2C%20queria%20mudar%20meu%20visual%2C%20dar%20um%20Slay%20em%20mim!'}>
            Appointment
          </a>
        </Button>
      </div>
    </div>
  )
}