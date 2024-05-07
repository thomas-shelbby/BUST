import React, { useEffect, useState } from 'react'
import './App.css'

function Index() {

    const [copied, setCopied] = useState(false);

    const wallerAddress = '0xdC3838E50bC1854dfB4A169FB81320bD009966F7';

    useEffect(() => {
        const items = document.querySelectorAll(".timeline li");

        const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            const screenWidth = window.innerWidth || document.documentElement.clientWidth;
            return (
                rect.top >= 0 &&
                rect.right <= screenWidth &&
                screenWidth >= 576 && screenWidth <= 768
            );
        };

        const callbackFunc = () => {
            for (let i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                    items[i].classList.add("in-view");
                } else {
                    items[i].classList.remove("in-view");
                }
            }
        };

        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);

        return () => {
            window.removeEventListener("load", callbackFunc);
            window.removeEventListener("resize", callbackFunc);
            window.removeEventListener("scroll", callbackFunc);
        };
    }, []);





    const handleCopyAddress = () => {
        const address = '0xdC3838E50bC1854dfB4A169FB81320bD009966F7';
        navigator.clipboard.writeText(address)
            .then(() => {
                console.log('Address copied to clipboard:', address);
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 3000); // Reset copied state after 3 seconds
            })
            .catch((error) => {
                console.error('Error copying address:', error);
                // Handle error if needed
            });
    };

    return (
        <>
            <div className='container-xxl my-5'>
                <div>
                    <div className='text-center mb-4'>
                        <h1 className='text-white'>Token Insights</h1>
                    </div>
                    <div className='text-center d-flex justify-content-center mb-5'>
                        <h5 className='poppins-regular color-grey token-details-p-width'>
                            $REZ has a total supply of 10 billion tokens, with 150 million designated for airdrop rewards, 50 million for community pre-sale, and 1 million for team & future projects.
                        </h5>
                    </div>
                    {copied && (
                        <div className="alert alert-success copy-alert-pos transition-right" data-aos="fade-left"
                            data-aos-offset="50"
                            data-aos-duration="50" role="alert">
                            <p className='poppins-regular mb-0'>  Copied to clipboard!</p>
                        </div>
                    )}
                    <div className="timeline">
                        <ul>
                            <li>
                                <div className="reveal p-3 px-4 rounded-3">
                                    <h5 className='poppins-regular color-grey'><phase className="text-white poppins-regular fw-bold">Token Symbol</phase>BUSD</h5>
                                </div>
                            </li>
                            <li>
                                <div className="reveal p-3 px-4 rounded-3">
                                    <h5 className='poppins-regular color-grey'><phase className="text-white poppins-regular fw-bold">Token Name</phase>  BUSD</h5>
                                </div>
                            </li>
                            <li>
                                <div className="reveal p-3 px-4 rounded-3" onClick={handleCopyAddress}>
                                    <h5 className='poppins-regular color-grey address-details'><phase className="text-white poppins-regular fw-bold">Contact Address</phase> {wallerAddress.substring(0, 6)}...{wallerAddress.substring(38, 42)} <p className='mt-2 mb-0 fs-6'>(click to copy) </p></h5>
                                </div>
                            </li>
                            <li>
                                <div className="reveal p-3 px-4 rounded-3">
                                    <h5 className='poppins-regular color-grey'><phase className="text-white poppins-regular fw-bold">Decimals</phase> 18</h5>
                                </div>
                            </li>
                            <li>
                                <div className="reveal p-3 px-4 rounded-3">
                                    <h5 className='poppins-regular color-grey'><phase className="text-white poppins-regular fw-bold">Blockchain</phase>  BscScan Tesnet(BEP-20)</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index