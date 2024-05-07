import React from 'react'
import NavLogo from '../../Images/NavbarImages/Nav-Logo-2.png'
import TelegramIcon from '../../Images/NavbarImages/telegram-stroke-rounded.svg'
import DiamondIcon from '../../Images/NavbarImages/diamond-02-stroke-rounded.svg'
import './App.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Index() {
    return (
        <>
            <nav className="navbar navbar-expand-xl nav-bg p-3 position-sticky top-0">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="/">
                        <img className='nav-logo-height' src={NavLogo} alt="" />
                    </NavLink>
                    <div className='d-none d-md-flex d-xl-none ms-auto me-4'>
                        <div className='me-4'>
                            <a href='/' className='nav-btn-link'>
                                <img className='img-fluid me-2' src={TelegramIcon} alt="" />Telegram Group
                            </a>
                        </div>
                        <div>
                            <a href='/' className='nav-btn-link'>
                                <img className='img-fluid me-2' src={DiamondIcon} alt="" />
                                Pre-sale
                            </a>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon d-flex align-items-center">
                            <FontAwesomeIcon icon={faBars} style={{ color: "#f0f0f7", }} />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-xl-0 mt-4 d-flex align-items-xl-center">
                            <li className="nav-item me-2">
                                <a className="nav-link" activeClassName="active" exact href="/nothing">Airdrop & Pre-sale</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" activeClassName="active" href="/hero">Token</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" activeClassName="active" href="/#airdrop">Announcement</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" activeClassName="active" href="/tsdadk">Team</a>
                            </li>
                            <li className="d-md-none mb-3 mb-md-0 d-xl-block nav-item me-2">
                                <a href='/' className='nav-btn-link'>
                                    <img className='img-fluid me-2' src={TelegramIcon} alt="" />Telegram Group
                                </a>
                            </li>
                            <li className="d-md-none d-xl-block nav-item">
                                <a href='/' className='nav-btn-link'>
                                    <img className='img-fluid me-2' src={DiamondIcon} alt="" />
                                    Pre-sale
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Index