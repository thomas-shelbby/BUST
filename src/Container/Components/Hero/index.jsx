import React from 'react'
import './App.css'
import DiamondIcon from '../../Images/NavbarImages/diamond-02-stroke-rounded.svg'
import DropBoxIcon from '../../Images/HeroImages/dropbox-stroke-rounded.svg'

function Index() {
    return (
        <>
            <div className='container-xxl my-5 py-lg-5'>
                <div>
                    <div className='d-flex justify-content-center'>
                        <h1 className='hero-title-css text-center'>
                            (<span className='hero-title-css-span'>BUSD</span>) Token Airdrop & Pre-Sale
                        </h1>
                    </div>
                    <div className='d-flex justify-content-center mt-md-4 mt-3'>
                        <p className='hero-p text-center poppins-regular'>
                            BUST is a Liquid Restaking Token (<span className='hero-title-css-span'>LTR</span>) and Strategy Manager for EigenLayer. It serves as the interface to the EigenLayer ecosystem, providing security for Actively Validated Services (<span className='hero-title-css-span'>AVSs</span>) and offering a higher yield than ETH staking.
                        </p>
                    </div>
                    <div className='d-none d-sm-flex flex-wrap justify-content-center mt-4'>
                        <div className='me-sm-3'>
                            <a href='/' className='nav-btn-link'>
                                <img className='img-fluid me-2' src={DiamondIcon} alt="" />Pre-sale
                            </a>
                        </div>
                        <div>
                            <a href='/' className='nav-btn-link'>
                                <img className='img-fluid me-2' src={DropBoxIcon} alt="" />Airdrop
                            </a>
                        </div>
                    </div>
                    <div className='d-sm-none flex-wrap justify-content-center mt-xxl-5 mt-4'>
                        <div className='me-sm-5 mb-3'>
                            <a href='/' className='nav-btn-link w-100'>
                                <img className='img-fluid me-2' src={DiamondIcon} alt="" />Pre-sale
                            </a>
                        </div>
                        <div>
                            <a href='/' className='nav-btn-link w-100'>
                                <img className='img-fluid me-2' src={DropBoxIcon} alt="" />Airdrop
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index