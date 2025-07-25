"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Page = () => {
    const [url, seturl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [generated, setgenerated] = useState("");

    const showtoast = () => {
        return {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        }
    };

    const generate = async () => {
        if (!url || !shortUrl) {
            toast.warn('Please fill both fields..', {
                ...showtoast()
            });
            return;
        }
        const response = await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url, shortUrl }),
        });

        const result = await response.json();
        
        if (result.success) {
            setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${result.shortUrl}`);
            seturl("");
            setShortUrl("");
            toast.success(result.message, {
                ...showtoast()
            });
        }else{
            toast.error(result.message, {
                ...showtoast()
            });
        }
    };

    return (<>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
        <div className='p-10 px-20 mx-auto my-2 max-w-fit rounded-lg bg-purple-100'>
            <h1 className="text-5xl px-5 text-center font-bold">Generate your short URLs</h1>
            <div className='p-5 flex flex-col gap-5'>
                <input
                    value={url}
                    className='generateInput'
                    onChange={e => seturl(e.target.value)}
                    type="url"
                    placeholder="Enter your long URL"
                />
                <input
                    value={shortUrl}
                    className='generateInput'
                    onChange={e => setShortUrl(e.target.value)}
                    type="text"
                    placeholder='Enter your preferred short URL text'
                />
                <button onClick={generate} className='navlinkBtn my-3'>Generate</button>
                {generated.length > 0 && (
                    <p>
                        <b className='text-lg'>Your Link:</b><br /> <Link target="_blank" href={generated}>{generated}</Link>
                    </p>
                )}
            </div>
        </div>
    </>
    );
}

export default Page;