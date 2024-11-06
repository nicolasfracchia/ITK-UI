import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Input} from "@nextui-org/input";
import {Checkbox} from "@nextui-org/checkbox";


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
                <h1>Log In</h1>
                <form action="/">
                    <Input label="Email" labelPlacement={'outside'} placeholder="Enter your email" className="formInput" type="email" />
                    <Input label="Password" labelPlacement={'outside'} placeholder="Enter your password" className="formInput" type={isVisible ? "text" : "password"} 
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
                    <div className="frmCols">
                        <Checkbox className="inputCheckbox">Keep me logged in</Checkbox>
                        <Link href={'/#'}>Forgot Password</Link>
                    </div>
                    <button type="submit">Log In</button>
                </form>
                
                <p>or</p>
                
                <Link href={'/#'} className="socialLoginButton"><Image src={'/images/social/google-color.svg'} width={18} height={18} alt="" /> Log in with Google </Link>
                <Link href={'/#'} className="socialLoginButton"><Image src={'/images/social/facebook-color.svg'} width={16} height={30} alt="" /> Log in with Facebook </Link>
                <Link href={'/#'} className="socialLoginButton"><Image src={'/images/social/linkedin-color.svg'} width={24} height={24} alt="" /> Log in with LinkedIn </Link>
                
                <div className="changeForm">
                    Don&apos;t have an account? <Link href={'/signup'}>Sign Up</Link>
                </div>
            </section>
        </main>
    );
};