import { useState } from 'react';
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button"
import "../app/styles/components/header.css";

// HOOK TO OPEN AND CLOSE THE MENU IN MOBILE VERSION
import useMobileMenuToggle from '../hooks/useMobileMenuToggle';
import useHeaderSearchValidation from '../hooks/useHeaderSearchValidation';

const Header = () => {
  // Functionality for main menu in responsive version
  useMobileMenuToggle();

  // Data validation in search form
  const [isInvalid, setIsInvalid] = useState(false);
  useHeaderSearchValidation(setIsInvalid);

  return (
    <header id="mainMenuHeader">
      <div className='headerContainer'>
        <div>
          <Link href="/">
            <Image src='/images/logo.svg' alt="In The Know YYC - Logo" width={83} height={54} />
          </Link>
        </div>
        <button className='onlyMobile toggleMenu' id="toggleMobileMenu"><Image src={'/images/icons/menu.svg'} width={37} height={27} alt='' /></button>
        <form action='/events' method='get' id="headerEventSearchForm">
          <div className='headerInputContainer'>
            <Input 
              id='inputSearchHeader' 
              name="search" 
              label="" 
              labelPlacement={'inside'} 
              placeholder="Search Event" 
              type="text" 
              isRequired={true}
              isInvalid={isInvalid}
              errorMessage="This is a required field"
            />
          </div>
          {/* 
        <div className='headerInputContainer'>
          <input id='inputLocationHeader' type='text' placeholder='Calgary, AB' />
        </div>
        */}
          <Button type="submit"></Button>
        </form>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/events">All Events</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            {/*
            <li><Link href="/login">Log In</Link></li>
            <li><Link href="/signup" className='button'>Sign Up</Link></li>
            */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 