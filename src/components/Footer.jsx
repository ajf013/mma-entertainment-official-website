import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-12 border-bottom pb-5 mb-5">
                        <div className="d-flex">
                            <a href="index.html" className="navbar-brand">
                                <span className="brand-text">MMA Entertainment <br /> Tamil</span>
                            </a>

                            <ul className="social-icon ms-auto">
                                <li><a href="https://www.instagram.com/mma_entertainment_tamil/" target="_blank" className="social-icon-link bi-instagram"></a></li>
                                <li><a href="https://twitter.com/mma_ent_tamil" target="_blank" className="social-icon-link bi-twitter-x"></a></li>
                                <li><a href="https://linktr.ee/MMAEntertainment" target="_blank" className="social-icon-link bi-boombox"></a></li>
                                <li><a href="https://www.youtube.com/c/MMAEntertainment" target="_blank" className="social-icon-link bi-youtube"></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-5 col-12 ms-lg-auto">
                        <div className="copyright-text-wrap d-flex align-items-center">
                            <p className="copyright-text ms-lg-auto me-4 mb-0">
                                Copyright © {currentYear}.
                                <br />All Rights Reserved.
                                <br /><br /> <a title="CSS Templates" rel="sponsored" href="https://linktr.ee/MMAEntertainment" target="_blank">MMA Entertainment Tamil</a>
                            </p>
                            <a href="#section_1" className="bi-arrow-up arrow-icon custom-link"></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
