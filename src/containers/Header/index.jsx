import React from 'react'
import Logo from '../../components/Logo'
import './style.scss'

export default function Header() {
    return (
        <div className="common-header max-width-1200 d-flex">
            <div className="left d-flex jc-center ai-center">
                <Logo />
                <div className="logo-right d-flex jc-center ai-center d-none d-md-flex">
                    <div className="nav-item d-flex jc-center ai-center bottom-border">
                        <span>
                            Find jobs
                        </span>
                    </div>
                    <div className="nav-item d-flex jc-center ai-center">
                        <span>Upskill Yourself</span>
                    </div>
                </div>
            </div>
            <div className="right d-flex jc-center ai-center">
                <div className="nav-item d-flex jc-center ai-center">
                    <span>Post a Job</span>
                </div>
                <div className="nav-item d-flex jc-center ai-center">
                    <span>Sign in</span>
                </div>
            </div>
        </div>
    )
}
