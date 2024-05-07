import React, { useState, useEffect } from 'react';
import AirDropCol1Img from '../../Images/AirDrop/Air-drop-col1-img.jpg';
import './App.css';
import { db } from '../../../firebase-config';
import { collection, getDocs, addDoc, query, where } from '@firebase/firestore';
import Aos from 'aos';
import "aos/dist/aos.css";

function Index() {
    const [walletAddress, setWalletAddress] = useState('');
    const [claimedWalletAddress, setClaimedWalletAddress] = useState('');
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        Aos.init();
        Aos.refresh();
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

    const handleClaimReward = async () => {
        if (walletAddress.trim() === '') {
            setError('Wallet Address is required');
            return;
        }

        try {
            const querySnapshot = await getDocs(query(collection(db, 'id'), where('walletAddress', '==', walletAddress)));
            if (!querySnapshot.empty) {
                setError('Already Subscribed On This Address');
                return;
            }
            const docRef = await addDoc(collection(db, 'id'), {
                walletAddress: walletAddress
            });
            setClaimedWalletAddress(walletAddress);
            setWalletAddress('');
            setError('');
            console.log('Document written with ID: ', docRef.id);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };


    return (
        <div id='airdrop' className='container-xxl my-5'>
            <div className='AirDrop-bg rounded-4 p-sm-5 p-3 py-4'>
                <div>
                    <h1 className='text-white mb-5'>AirDrop</h1>
                </div>

                <div className='mb-5'>
                    <div className='text-center mb-3'>
                        <h2 className='text-white'>Pre-sale Address:</h2>
                    </div>
                    {copied && (
                        <div className="alert alert-success copy-alert-pos transition-right" data-aos="fade-left"
                            data-aos-offset="50"
                            data-aos-duration="50" role="alert">
                            <p className='poppins-regular mb-0'>  Copied to clipboard!</p>
                        </div>
                    )}
                    <div className='text-center mb-3 walletAddress-css' onClick={handleCopyAddress}>
                        <h5 className='poppins-regular color-grey font-size-address'>
                            0xdC3838E50bC1854dfB4A169FB81320bD009966F7
                        </h5>
                    </div>
                    <div className='text-center mb-0'>
                        <p className='poppins-regular mb-0 color-grey'>(Click To Copy Address)</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div>
                            <div>
                                <p className='poppins-regular color-grey mb-1'>
                                    Pre-sale price: 1 ETH = 200,000 <strong className='text-white'>$EVGR</strong>.
                                </p>
                            </div>
                            <div>
                                <p className='poppins-regular color-grey'>
                                    Send BNB or <strong className='text-white'>BUSD</strong> from your wallet to the pre-sale address. The system will automatically send BNB or <strong className='text-white'>BUSD</strong> tokens to your wallet instantly. You can send any amount of BNB or <strong>BUS className='text-white'D</strong>.
                                    <br />
                                    <br />
                                    The distribution of BNB or <strong className='text-white'>BUSD</strong> tokens will be based on the time the BNB or <strong className='text-white'>BUSD</strong> arrived. It's a first-come, first-served basis. If the pre-sale is sold out and you were unable to purchase, a refund will be automatically issued to your wallet.
                                    <br />
                                    <br />
                                    Send ETH from your wallet to the pre-sale address below. Our system will send <strong className='text-white'>BUSD</strong> to your wallet instantly.
                                    Do not send from exchange!
                                    <br />
                                    <br />
                                    IMPORTANT: Binance & <strong className='text-white'>BUSD</strong> will be the first platform to list the token mentioned herein, with trade starting at 2024-04-30 12:00 (UTC
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className='w-100'>
                            <div>
                                <p className='poppins-regular color-grey'>Enter your wallet address</p>
                            </div>
                            <div>
                                <input
                                    className='w-100 bg-transparent p-3 px-4 border rounded-2 poppins-regular color-grey'
                                    placeholder='Wallet Address Here:'
                                    type="text"
                                    value={walletAddress}
                                    onChange={(e) => setWalletAddress(e.target.value)}
                                />
                            </div>
                            {error && (
                                <div className='text-danger poppins-medium mt-2'>{error}</div>
                            )}
                            <div className='mt-3'>
                                <button className='nav-btn-link border-0' onClick={handleClaimReward}>
                                    Claim Your Reward
                                </button>
                            </div>
                            {claimedWalletAddress && (
                                <div>
                                    <p className='poppins-regular text-white mt-3'>
                                        Successfully Subscribed on Wallet Address: {claimedWalletAddress}
                                    </p>
                                </div>
                            )}
                            <div>
                                <p className='poppins-regular color-grey mt-3'>
                                    The minimum purchase is 0.05 ETH, and the maximum purchase is 30 ETH. You can send any amount of ETH.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
