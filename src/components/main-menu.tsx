"use client"
import { useMediaQuery } from '@/hooks/use-media-query'
import React from 'react'
import Link from 'next/link';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { MenuIcon } from 'lucide-react';
import Navbar from '@/app/components/navbar';

const MainMenu = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? (
  <div><Navbar/></div>
  ) : (
  <div>
    <Drawer direction='right'>
        <DrawerTrigger>
            <MenuIcon/>
        </DrawerTrigger>
        <DrawerContent>
        <div className='bg-[#000] flex items-center text-[#fafafa] h-full rounded-lg'>
            <ul className="flex flex-col gap-12 ml-3">
                <li className='hover:bg-slate-300 rounded-md p-1'><Link className="hover:text-[#007580]" href={"/"}>Home</Link></li>       
                <li className='hover:bg-slate-300 rounded-md p-1'><Link className="hover:text-[#007580]" href={"/"}>Shop</Link></li>       
                <li className='hover:bg-slate-300 rounded-md p-1'><Link className="hover:text-[#007580]" href={"/"}>Product</Link></li>          
                <li className='hover:bg-slate-300 rounded-md p-1'><Link className="hover:text-[#007580]" href={"/"}>Pages</Link></li>        
                <li className='hover:bg-slate-300 rounded-md p-1'><Link className="hover:text-[#007580]" href={"/"}>About</Link></li>        
            </ul>
          </div>
        </DrawerContent>
    </Drawer>
  </div>
  ); 
}

export default MainMenu