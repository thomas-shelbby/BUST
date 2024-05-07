import React from 'react'
import './App.css'
import Col1Icon from '../../Images/AirDropDesc/bitcoin-store-stroke-rounded.svg'
import Col2Icon from '../../Images/AirDropDesc/Air-Drop-Desc-Col2-Icon.svg'
import Col3Icon from '../../Images/AirDropDesc/Air-Drop-Desc-Col3-Icon.svg'

function Index() {
    return (
        <>
            <div className='container-xxl my-5'>
                <div>
                    <div className='row justify-content-center'>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className='airdrop-desc-col1-bg p-4 h-100 rounded-4'>
                                <div>
                                    <div className='mb-3'>
                                        <img className='img-fluid' src={Col1Icon} alt="" />
                                    </div>
                                    <div className='mb-3'>
                                        <h4 className='text-white poppins-medium'>
                                            Airdrop Description
                                        </h4>
                                    </div>
                                    <div>
                                        <p className='color-grey poppins-regular'>
                                            To claim BUSD tokens, you can participate in the airdrop and pre-sale events. After the airdrop and pre-sale, BUSD will be listed on top-tier exchanges such as Binance, Coinbase, Upbit, and Okx.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className='airdrop-desc-col1-bg p-4 h-100 rounded-4'>
                                <div>
                                    <div className='mb-3'>
                                        <img className='img-fluid' src={Col2Icon} alt="" />
                                    </div>
                                    <div className='mb-3'>
                                        <h4 className='text-white poppins-medium'>
                                            Pre-sale Description
                                        </h4>
                                    </div>
                                    <div>
                                        <p className='color-grey poppins-regular'>
                                            Send ETH from your wallet to the pre-sale address. The system will automatically send BUSD tokens to your wallet instantly. You can send any amount of ETH.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className='airdrop-desc-col1-bg p-4 h-100 rounded-4'>
                                <div>
                                    <div className='mb-3'>
                                        <img className='img-fluid' src={Col3Icon} alt="" />
                                    </div>
                                    <div className='mb-3'>
                                        <h4 className='text-white poppins-medium'>
                                            Token Launch Description
                                        </h4>
                                    </div>
                                    <div>
                                        <p className='color-grey poppins-regular'>
                                            Experience the dawn of a new era with our <strong className='text-white'> Token Launch</strong>! Embrace innovation, seize investment opportunities, and redefine the landscape of decentralized finance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index