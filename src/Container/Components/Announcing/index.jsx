import React from 'react'
import './App.css'

function Index() {
    return (
        <>
            <div className='container-xxl my-5 pt-5'>
                <div>
                    <div className='row justify-content-center mt-5'>
                        <div className="col-lg-6 mb-4 d-flex align-items-center">
                            <div>
                                <div>
                                    <h1 className='text-white'>Announcing BUST</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className='announcing-bg p-sm-5 p-3 rounded-4'>
                                <div>
                                    <h4 className='text-white poppins-medium mb-3'>Dear Cryptocommunity members,</h4>
                                </div>
                                <div>
                                    <p className='poppins-regular color-grey mb-0'>
                                        BUST is a Liquid Restaking Token (<span className='hero-title-css-span'>LTR</span>) and Strategy Manager for EigenLayer. It serves as the interface to the EigenLayer ecosystem, providing security for Actively Validated Services (<span className='hero-title-css-span'>AVSs</span>) and offering a higher yield than ETH staking.
                                    </p>
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