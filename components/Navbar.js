import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-700 px-4 flex items-center justify-between text-white'>
            <div className='text-2xl font-bold'>
                <Link href="/">Url Shortener</Link>
            </div>
            <ul className='flex items-center justify-center gap-6 h-full'>
                <Link href="/"><li className='navlink'>Home</li></Link>
                <Link href="/about"><li className='navlink'>About</li></Link>
                <Link href="/shorten"><li className='navlink'>Shorten URL</li></Link>
                <Link href="/contact"><li className='navlink'>Contact Us</li></Link>
                <li className='flex items-center gap-4'>
                    <Link href="/shorten"><button className='navlinkBtn'>Try Now</button></Link>
                    <Link href="/github"><button className='navlinkBtn'>GitHub</button></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;