import React from 'react'
import './App.css'
import daAppLaunchIcon from '../../Images/ClaimEverGrowImage/dapplaunch.svg'

function Index() {
    return (
        <>
            <div className='container-xxl my-5'>
                <div className='claim-ever-grow-bg p-sm-5 p-3 rounded-4'>
                    <div className=''>
                        <h1 className='text-white text-center mt-4 mt-sm-0'>
                            How to claim BUSD ?
                        </h1>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-6 claim-col-border-right mb-4 mb-md-0'>
                            <div className=''>
                                <p className='mb-0 poppins-medium text-center text-sm-start font-size-claim color-grey fs-5'>
                                    To claim BUSD tokens, you can participate in the airdrop and pre-sale events. After the airdrop and pre-sale, BUSD will be listed on top-tier exchanges such as Binance, Coinbase, Upbit, and Okx.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className=''>
                                <p className='mb-0 poppins-medium text-center text-sm-start font-size-claim color-grey fs-5'>
                                    <strong className='text-white'>$BUSD</strong> tokens can now be obtained by participating in the airdrop and pre-sale. After the airdrop and pre-sale, <strong className='text-white'>$BUSD</strong> will be listed on top-tier exchanges such as Binance, Coinbase, Upbit, and Okx.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 mb-sm-0 mb-4 text-center'>
                        <a className='nav-btn-link' href="/">
                            Claim Your Air Drop <img className='img-fluid' src={daAppLaunchIcon} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index