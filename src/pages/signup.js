import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Input} from "@nextui-org/input";


import "../app/styles/pages/signInUp.css";

export default function LogIn() {
    
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <main className="signInUpPage">
            <section className="formContainer">
                <div className="logo">
                    <Image src="/images/logo-black.svg" alt="In The Know YYC - Logo Black" width={100} height={100} />
                </div>
                <h1>Sign Up</h1>
                <form action="/">
                    <Input label="Full Name *" labelPlacement={'outside'} placeholder="Enter your full name" className="formInput" type="text" />
                    <Input label="Email *" labelPlacement={'outside'} placeholder="Enter your email" className="formInput" type="email" />
                    <Input label="Password *" labelPlacement={'outside'} placeholder="Enter your password" className="formInput" type={isVisible ? "text" : "password"} 
                        endContent={
                            <button className="togglePasswordVisibilityButton" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                {isVisible ? (
                                    <Image src={'images/icons/eye-visibility.svg'} width={24} height={24} alt='' />
                                ) : (
                                    <Image src={'images/icons/eye-visibility-off.svg'} width={24} height={24} alt='' />
                                )}
                            </button>
                        }
                    />
                    <Input label="Phone No" labelPlacement={'outside'} placeholder="Enter your phone number (optional)" className="formInput" type="phone" />
                    <Input label="Organization Name" labelPlacement={'outside'} placeholder="Enter your organization (optional)" className="formInput" type="text" />
                    <Input label="LinkedIn *" labelPlacement={'outside'} placeholder="Enter your LinkedIn (optional)" className="formInput" type="text" />
                    <button type="submit">Sign Up</button>
                </form>
                
                <div className="changeForm">
                    Already have an account? <Link href={'/login'}>Log In</Link>
                </div>
            </section>
        </main>
    );
};