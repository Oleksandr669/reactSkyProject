import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="container__flex">
                    <div className="footer-content">
                        <div className="footer-info">
                            © 2021 BeSki 2 -Betheme. All Rights Reserved.{' '}
                            <a href="http://">Muffin group</a>{' '}
                        </div>
                        <div className="footer-link">
                            <a href="http://">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
