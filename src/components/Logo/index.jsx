import React from 'react'
import LogoIcon from '../../Assets/Images/Logo.png'
import './style.scss'

export default function Logo() {
    return (<div className="logo d-flex jc-center ai-center"><img src={LogoIcon} alt="logo" /></div>)
}
