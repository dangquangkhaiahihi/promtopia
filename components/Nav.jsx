"use client"
// nếu ko note file này là "use client" (làm cho component này là Client Component)
// => mặc định nó là Server Component
// => mà useEffect chỉ dùng được trong Client Component thôi 
// => lỗi

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, Component } from 'react';
import { signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
    const isUserLoggedIn = true;
    
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(()=>{
        const setProviderAsync = async () => {
            const response = await getProviders();
            setProviders(response);
        }

        setProviderAsync();
    },[]);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link className='flex gap-2 flex-center' href="/" >
            <Image 
                src="/assets/images/logo.svg"
                alt="Promptopia logo"
                width={30}
                height={30}
                className="object-contain"
            />
            <p className="logo_text"> Promptopia</p>
        </Link>

        {/* Desktop navigation */}
        <div className='sm:flex hidden'>
            {
                isUserLoggedIn ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href="/create-prompt" className='black_btn'>
                            Create prompt
                        </Link>

                        <button className='outline_btn' type='button' onClick={signOut}>
                            Sign out
                        </button>

                        <Link href="/profile" >
                            <Image
                                src="/assets/images/logo.svg"
                                width={37}
                                height={37}
                                className='rounded-full'
                                alt='profile'
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {
                            providers && Object.values(providers).map((provider)=>{
                                <button type='button'
                                    key={provider.name}
                                    className='black_btn'
                                    onClick={()=>{
                                        signIn(provider.div)
                                    }}
                                >
                                    Sign In
                                </button>
                            })
                        }
                    </>
                )
            }
        </div>
        
        {/* Mobile navigation */}
        <div className='sm:hidden flex relative'>
            {
                isUserLoggedIn ? (
                    <div className='flex'>
                        <Image
                            src="/assets/images/logo.svg"
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='profile'
                            onClick={()=>{setToggleDropdown((prev) => {return !prev})}}
                        />
                        {
                            toggleDropdown && (
                                <div className='dropdown'>
                                    <Link href="/profile" className='dropdown_link'
                                        onClick={() => {setToggleDropdown(false)}}
                                    >
                                        My profile
                                    </Link>
                                    <Link href="/create-prompt" className='dropdown_link'
                                        onClick={() => {setToggleDropdown(false)}}
                                    >
                                        Create prompt
                                    </Link>
                                    <button type='button' className='mt-5 w-full black_btn'
                                        onClick={() => {setToggleDropdown(false); signOut();}}
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <>
                        {
                            providers && Object.values(providers).map((provider)=>{
                                <button type='button'
                                    key={provider.name}
                                    className='black_btn'
                                    onClick={()=>{
                                        signIn(provider.div)
                                    }}
                                >
                                    Sign In
                                </button>
                            })
                        }
                    </>
                )
            }
        </div>
    </nav>
  )
}

export default Nav